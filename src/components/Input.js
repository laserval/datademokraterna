import React, { Component } from 'react';
import wordlist from '../data/wordlist';

class Input extends Component {
    constructor() {
        super();
        this.skipWordInserts = false;
        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({value: event.target.value});
    }

    handleKeyDown = (event) => {
        event.preventDefault();
    }

    handleOnKeyUp = (event) => {
        event.preventDefault();
        if (event.key === ' ' && !this.skipWordInserts && this.state.value.trim().length) {
            // user seems to like words. Add another one for them to show them
            // we do too!
            const pickedIndex = Math.floor(Math.random() * wordlist.length);
            const randomWord = wordlist[pickedIndex];
            this.setState({value: this.state.value + randomWord + ' '});
            this.skipWordInserts = true;
        } else if(event.key !== ' ') {
            this.skipWordInserts = false;
        }
    }

    render() {
        return (
            <textarea type="text" className="Input" onKeyDown={this.onKeyDown} onKeyUp={this.handleOnKeyUp} onChange={this.handleChange} value={this.state.value} />
        );
    }
}

export default Input;
