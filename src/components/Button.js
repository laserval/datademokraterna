import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {
    render() {
        return (
            <button className="Button" onClick={() => this.props.onDrive('button')}>
                { this.props.children }
            </button>
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
)(Button);
  