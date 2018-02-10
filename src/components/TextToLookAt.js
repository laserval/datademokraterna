import React, { Component } from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';

class TextToLookAt extends Component {

    componentWillUnmount() {
        clearInterval(this.id);
    }

    startViewing = () => {
        clearInterval(this.id);
        this.id = setInterval(() => this.props.onDrive(this.props.type), 1000);    
    }

    stopViewing = () => {
        clearInterval(this.id);
    }

    render() {
        return (
            <Waypoint onEnter={this.startViewing} onLeave={this.stopViewing}>
                <p className="Text">
                    { this.props.children }
                </p>
            </Waypoint>
        );
    }
}

TextToLookAt.defaultProps = {
    type: 'text'
}

const mapDispatchToProps = dispatch => {
    return {
        onDrive: (element) => dispatch({ type: 'DRIVE', data: { key: element }})
    };
};


export default connect(
    undefined,
    mapDispatchToProps
)(TextToLookAt);
