import React, { Component } from 'react';
import LikeThis from './LikeThis';
import logo from '../logo.svg';

class ImageArticle extends Component {
    render() {
        return (
            <article>
                <h1>
                    {this.props.heading}
                </h1>
                <LikeThis type="logo">
                    <img src={logo} />
                </LikeThis>
            </article>
        );
    }
}

export default ImageArticle;