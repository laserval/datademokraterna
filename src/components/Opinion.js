import React, { Component } from 'react';
import Input from './Input';

class Opinion extends Component {
    constructor() {
        super();
        this.state = {
            isExpressive: undefined,
        }
    }

    renderContent() {
        if(this.state.isExpressive === undefined) {
            return (
                <div class="Opionion__choice">
                    Vill du uttrycka din åsikt?
                    <button onClick={() => { this.setState({isExpressive: true}) }}>Ja!</button>
                    <button onClick={() => { this.setState({isExpressive: false}) }}>Nej!</button>
                </div>
            );
        } else {
            if(this.state.isExpressive) {
                return (
                    <div>
                        <h2>Datademokraterna -- ett parti som på djupet bryr sig om vad du tycker!</h2>
                        <label>
                            Vad tycker du? <Input />
                        </label>
                    </div>
                );
            } else {
                return <h2>Datademokraterna -- partiet som inte vill veta va du tycker!</h2>;
            }
        }
    }

    render() {
        return (
            <div className="Opinion">
                {this.renderContent()}
            </div>
        );
    }
}

export default Opinion;