import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Page.css';
import Floskel from '../components/Floskel';
import Text from '../components/Text';
import Button from '../components/Button';
import LikeThis from '../components/LikeThis';
import Input from '../components/Input';
import Opinion from '../components/Opinion';
import TextArticle from '../components/TextArticle';
import ImageArticle from '../components/ImageArticle';

class Page extends Component {

  render() {
    return (
        <div className="Page">
            <header className="grid-header">
                <Floskel/>
            </header>
            <nav className="grid-nav">
                <Button>
                    Alt1
                </Button>
                <Button>
                    Alt2
                </Button>
            </nav>
            <aside className="grid-sidebar">
                <Opinion/>
            </aside>
            <main className="grid-main">
                <TextArticle heading="Hej" body="Det var kul"/>
                <ImageArticle/>
            </main>
            <footer className="grid-footer">
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
  