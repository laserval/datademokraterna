import React, { Component } from 'react';
import { connect } from 'react-redux';

class LikeThis extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    onClick(func) {
        this.setState({ clicked: true });
        func(this.props.type);
    }

    render() {
        return (
            <React.Fragment>
                { this.props.children }
                { !this.state.clicked &&
                <div className="LikeThis">
                    <button className="Button" onClick={() => this.onClick(this.props.onDrive)}>
                        Jag gillar
                    </button>
                    <button className="Button" onClick={() => this.onClick(this.props.lessDrive)}>
                        Jag gillar inte
                    </button>
                </div>
                }
                
            </React.Fragment>
        );
    }
}

LikeThis.defaultProps = {
    type: 'likethis'
}
  
const mapDispatchToProps = dispatch => {
    return {
        onDrive: (element) => dispatch({ type: 'DRIVE', data: { key: element }}),
        lessDrive: (element) => dispatch({ type: 'LESS', data: { key: element }})
    };
};


export default connect(
    undefined,
    mapDispatchToProps
)(LikeThis);
  