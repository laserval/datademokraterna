import React, { Component } from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';

class Text extends Component {
    render() {
        return (
            <Waypoint onEnter={() => this.props.onDrive('text')}>
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
  