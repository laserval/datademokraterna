import React, { Component } from 'react';
import './HardToRead.css';

class HardToRead extends Component {
    render() {
        return (
            <div className="hard-to-read">
                { this.props.children }
            </div>
        );
    }
}

export default HardToRead;