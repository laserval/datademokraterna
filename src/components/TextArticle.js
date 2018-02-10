import React, { Component } from 'react';
import Text from './Text';

class TextArticle extends Component {
    render() {
        return (
            <article>
                <h1>
                    {this.props.heading}
                </h1>
                <Text>
                    {this.props.body}
                </Text>
            </article>
        );
    }
}

export default TextArticle;