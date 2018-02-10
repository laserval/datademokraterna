import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PartyLeader.css';

class PartyLeader extends Component {

    render() {
        return (
            <div className="PartyLeader-wrapper">
                <h1>Vår partiledare</h1>
                <figure className="PartyLeader-figure">
                    <img src={this.props.leaders.length > 0 ? this.props.leaders[0] : ''}/>
                </figure>
                <button className="PartyLeader-like" onClick={this.props.onLike}>
                    <i className="material-icons">thumb_up</i>
                </button>
                <button className="PartyLeader-dislike" onClick={this.props.onDislike}>
                    <i className="material-icons">thumb_down</i>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        leaders: state.partyLeader.leaders
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLike: () => dispatch({ type: 'PARTYLEADER_LIKE' }),
        onDislike: () => dispatch({ type: 'PARTYLEADER_DISLIKE' })
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PartyLeader);
