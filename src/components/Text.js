import React, { Component } from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';

class Text extends Component {

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
  
const mapDispatchToProps = dispatch => {
    return {
        onDrive: (element) => dispatch({ type: 'DRIVE', data: { key: element }})
    };
};


export default connect(
    undefined,
    mapDispatchToProps
)(Text);
  