import React, { Component } from 'react';
import TextToLookAt from './TextToLookAt';

class TextArticle extends Component {
    render() {
        return (
            <article>
                <h1>
                    {this.props.heading}
                </h1>
                <TextToLookAt>
                    {this.props.body}
                </TextToLookAt>
            </article>
        );
    }
}

export default TextArticle;