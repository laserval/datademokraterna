import React, { Component } from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';

class Text extends Component {

    constructor() {
        super();
        this.didSpawn = false;
    }

    handleScrolledIntoViewport = () => {
        if (!this.didSpawn) {
            this.props.onDrive(this.props.type);
            this.didSpawn = true;
        }
    }

    render() {
        return (
            <Waypoint onEnter={() => this.handleScrolledIntoViewport()}>
                <p className="Text">
                    { this.props.children }
                </p>
            </Waypoint>
        );
    }
}

Text.defaultProps = {
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
)(Text);
