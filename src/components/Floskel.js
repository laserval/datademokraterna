import React, { Component } from 'react';
import floskler from '../data/floskler.js';

class Floskel extends Component {
    constructor() {
        super();
        const floskelPick = Math.floor(Math.random() * floskler.length);
        this.floskel = floskler[floskelPick];
    }

    render() {
        return (
            <h1 className="Floskel">{this.floskel}</h1>
        );
    }
}

export default Floskel;