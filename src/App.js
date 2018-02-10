import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './components/Text.js';
import './App.css';
import Floskel from './components/Floskel.js';
import LikeThis from './components/LikeThis.js';
import Opinion from './components/Opinion.js';
import HardToRead from './components/HardToRead';
import Search from './components/Search';
import logo from './dd_logo.svg';
import Menu from './components/Menu.js';

class App extends Component {

  renderPartyProgram() {
    const { partyProgram } = this.props;

    return partyProgram.map((e, i) => {
      return (
          <Text key={i} type="partyProgram">
            { e }
          </Text>
      );
    });
  }

  renderSearched() {
    const { search } = this.props;
    if (search.length === 0) return;
    return search.map((e,i) => {
      return (
        <article key={i}>
          <h1>{ e.headline }</h1>
          <p>{ e.paragraph }</p>
        </article>
      )
    });
  }

  renderFloskler() {
    const { floskel } = this.props;

    return [...Array(floskel)].map((e,i) => {
      return (
        <article key={i}>
          <Floskel/>
        </article>
      );
    });
  }

  render() {
    return (
      <div className="grid">
          <header className="grid-header">
            <Menu className="header-menu"/>
            <figure className="header-logo">
              <img src={logo} alt="datademokraterna"/>
            </figure>
            <Search className="header-search"/>
          </header>
          <nav className="grid-nav">
          </nav>
          <main className="grid-main">
            { this.renderFloskler() }
            { this.renderSearched() }
            { this.props.partyProgram.length > 0 &&
              <article>
                {this.renderPartyProgram()}
              </article> }
          </main>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    hellos: state.hellos,
    text: state.text,
    headings: state.headings,
    button: state.button,
    floskel: state.floskel,
    partyProgram: state.partyProgram,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDrive: (element) => () => dispatch({ type: 'DRIVE', data: { key: element } })
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
