import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  renderHellos() {
    const { hellos } = this.props;

    return [...Array(hellos)].map((e, i) => <p className="App-intro" onClick={() => this.props.onDrivenClick('hellos')} key={i}>hello</p>);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={() => this.props.onDrivenClick('headings')}>
            Welcome to { this.props.headings }
          </h1>
        </header>
        { this.renderHellos() }
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    hellos: state.hellos,
    headings: state.headings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDrivenClick: (element) => dispatch({ type: 'DRIVE', data: { key: element }})
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
