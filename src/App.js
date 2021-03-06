import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './components/Text.js';
import './App.css';
import Floskel from './components/Floskel.js';
import Opinion from './components/Opinion.js';
import Search from './components/Search';
import logo from './dd_logo.svg';
import Menu from './components/Menu.js';
import PartyLeader from './components/PartyLeader.js';
import Webshop from './components/Webshop';
import Quiz from './components/Quiz/Quiz';

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

  renderPartyLeaders() {
    const { partyLeader } = this.props;

    return [...Array(partyLeader.boxes)].map((e,i) => {
      return (
        <article key={i}>
          <PartyLeader/>
        </article>
      );
    });
  }

  renderQuizes() {
    const { quiz } = this.props;

    return [...Array(quiz)].map((e,i) => {
      return (
        <Quiz key={i}/>
      );
    });
  }

  renderContactUs() {
    const { contactUs } = this.props;

    return [...Array(contactUs)].map((e,i) => {
      return (
        <article key={i}>
          <Opinion/>
        </article>
      );
    });
  }

  renderWebshop() {
    const { webshop } = this.props;

    return [...Array(webshop.boxes)].map((e,i) => {
      return (
        <article key={i}>
          <Webshop/>
        </article>
      );
    });
  }

  render() {
    return (
      <div className={`grid ${this.props.hardToRead ? 'hardToRead' : ''}`}>
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
            { this.renderPartyLeaders() }
            { this.renderQuizes() }
            { this.renderFloskler() }
            { this.renderSearched() }
            { this.renderContactUs() }
            { this.renderWebshop() }
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
    floskel: state.floskel,
    partyProgram: state.partyProgram,
    search: state.search,
    partyLeader: state.partyLeader,
    quiz: state.quiz,
    hardToRead: state.hardToRead,
    contactUs: state.contactUs,
    webshop: state.webshop
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
