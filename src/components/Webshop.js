import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Webshop.css';

class Webshop extends Component {

    render() {
        const product = this.props.products.length > 0 ? this.props.products[0] : {};
        return (
            <div className="Webshop-wrapper">
                <h1>{product.name}</h1>
                <figure className="Webshop-figure">
                    <img alt="Vara" src={product.img}/>
                </figure>
                <div className="Webshop-buttons">
                    <button className="Webshop-like" onClick={this.props.onLike}>
                        <i className="material-icons">thumb_up</i>
                    </button>
                    <button className="Webshop-dislike" onClick={this.props.onDislike}>
                        <i className="material-icons">thumb_down</i>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.webshop.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLike: () => dispatch({ type: 'WEBSHOP_LIKE' }),
        onDislike: () => dispatch({ type: 'WEBSHOP_DISLIKE' })
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Webshop);
