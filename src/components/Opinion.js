import React, { Component } from 'react';
import Input from './Input';
import './Opinion.css';

class Opinion extends Component {
    constructor() {
        super();
        this.state = {
            isExpressive: undefined,
            submitted: false
        }
    }

    renderContent() {
        if(this.state.isExpressive === undefined) {
            return (
                <div className="Opinion-choice">
                    <h1>Vill du uttrycka din åsikt?</h1>
                    <button className="Opinion-button" onClick={() => { this.setState({isExpressive: true}) }}>Ja</button>
                    <button className="Opinion-button" onClick={() => { this.setState({isExpressive: false}) }}>Nej</button>
                </div>
            );
        } else {
            if(this.state.isExpressive) {
                if (this.state.submitted) {
                    return (<div className="Opinion-wrapper">
                        <h2>Datademokraterna är ett parti som tycker som du gör!</h2>
                        <p>Din åsikt är vår åsikt!</p>
                    </div>);
                }
                return (
                    <div className="Opinion-wrapper">
                        <h2>Datademokraterna är ett parti som på djupet bryr sig om vad du tycker!</h2>
                        <form onSubmit={(event) => this.setState({submitted: true})}>
                            <label>
                                Vad tycker du?
                            </label>
                            <Input />
                            <button className="Opinion-button">Tyck till</button>
                        </form>
                    </div>
                );
            } else {
                return <h2>Datademokraterna: partiet som inte vill veta vad du tycker!</h2>;
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