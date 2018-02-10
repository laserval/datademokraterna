import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            active: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.onSearch(this.state.value.split(' '));
        event.preventDefault();
    }

    onClick() {
        this.setState({ active: true });
    }

    render() {
        if (this.state.active) {
            return ( 
                <div className={`Search-wrapper ${this.props.className}`}>
                    <form onSubmit={this.handleSubmit}>
                        <input className="Search-input" type="search" placeholder="Sök och finn" 
                        value={this.state.value} onChange={this.handleChange}/>
                        <input className="Search-submit" type="submit" value="Sök"/>
                    </form>
                </div>
            );
        } else {
            return (
                <div className={`Search-wrapper ${this.props.className}`}>
                    <button onClick={this.onClick}>Sök</button>
                </div>
            )
        }

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (keywords) => dispatch({ type: 'SEARCH', data: keywords })
    };
};


export default connect(
    undefined,
    mapDispatchToProps
)(Search);
