import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './components/Text.js';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';

class App extends Component {

  renderHellos() {
    const { hellos } = this.props;

    return [...Array(hellos)].map((e, i) => {
      return (
          <Text key={i} type="hellos">
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
          <Button>
            Clicky { this.props.button }
          </Button>
        </header>
        { this.renderHellos() }
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    hellos: state.hellos,
    text: state.text,
    headings: state.headings,
    button: state.button
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
