import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Page.css';
import Text from '../components/Text.js';
import Button from '../components/Button.js';
import LikeThis from '../components/LikeThis.js';

class Page extends Component {

  render() {
    return (
        <div className="Page">
            <header>
                <h1>Datademokraterna</h1>
            </header>
            <nav>
                <Button>
                    Alt1
                </Button>
                <Button>
                    Alt2
                </Button>
            </nav>
            <aside>
                <p>hej</p>
            </aside>
            <main>
                <p>Text här</p>
            </main>
            <footer>
                <p>info om saker</p>
            </footer>
        </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    text: state.text,
    headings: state.headings,
    button: state.button,
    logo: state.logo
  };
};


export default connect(
  mapStateToProps,
  undefined
)(Page);
  