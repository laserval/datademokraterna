import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './components/Text.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  renderHellos() {
    const { text } = this.props;

    return [...Array(text)].map((e, i) => {
      return (
          <Text key={i}>
            Hello
          </Text>
        );
    });
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
    text: state.text,
    headings: state.headings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDrive: (element) => () => dispatch({ type: 'DRIVE', data: { key: element }})
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
