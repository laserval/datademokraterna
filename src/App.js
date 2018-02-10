import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './components/Text.js';
import './App.css';
import {generateParagraph,generateHeadline} from './data/wordgenerator';
import Floskel from './components/Floskel.js';
import LikeThis from './components/LikeThis.js';
import Opinion from './components/Opinion.js';
import HardToRead from './components/HardToRead';
import Search from './components/Search';
import logo from './dd_logo.svg';

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
      return (<Floskel key={i}/>);
    });
  }

  render() {
    return (
      <div className="grid">
          <header className="grid-header">
            <figure className="header-logo">
              <img src={logo} alt="datademokraterna"/>
            </figure>
            <Search className="header-search"/>
          </header>
          <nav className="grid-nav">
          </nav>
          <main className="grid-main">
            
            { this.renderSearched() }
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
