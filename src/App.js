import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './components/Text.js';
import logo from './logo.svg';
import './App.css';
import {generateParagraph} from './data/wordgenerator';
import Floskel from './components/Floskel.js';
import LikeThis from './components/LikeThis.js';
import Opinion from './components/Opinion.js';

class App extends Component {

  renderPartyProgram() {
    const { partyProgram } = this.props;

    return [...Array(partyProgram)].map((e, i) => {
      return (
          <Text key={i} type="partyProgram">
            { generateParagraph() }
          </Text>
      );
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
            <h1 className="page-header">data<span className="text-color-alt">democraterna</span></h1>
          </header>
          <nav className="grid-nav">
          </nav>
          <aside className="grid-sidebar">
            <LikeThis type="floskel">
              <Floskel/>
            </LikeThis>
          </aside>
          <main className="grid-main">
            <article>
              <h1>Vårt partiprogram</h1>
              { this.renderPartyProgram() }
            </article>
            <article>
              <Opinion/>
            </article>
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
    partyProgram: state.partyProgram
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
