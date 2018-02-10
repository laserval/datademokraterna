import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './components/Text.js';
import logo from './logo.svg';
import './App.css';
import Floskel from './components/Floskel.js';
import Button from './components/Button.js';
import Input from './components/Input.js';
import LikeThis from './components/LikeThis.js';
import Opinion from './components/Opinion.js';

class App extends Component {

  renderHellos() {
    const { hellos } = this.props;

    return [...Array(hellos)].map((e, i) => {
      return (
        <div>
          <Text key={i} type="hellos">
            {this.props.logo > 1 && <img src={logo} className="App-logo" alt="logo" />}
            Hello
          </Text>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Floskel />
          <LikeThis type="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </LikeThis>
          <Button>
            Clicky {this.props.button}
          </Button>
        </header>

        <section>
          <Opinion />
        </section>

        {this.renderHellos()}
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
    logo: state.logo
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
