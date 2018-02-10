import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Menu.css';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
        this.onClick = this.onClick.bind(this);
        this.renderMenuOptions = this.renderMenuOptions.bind(this);
    }

    onClick(event) {
        this.setState({ active: true });
        event.preventDefault();
    }

    renderMenuOptions(options) {
        return options.map((e,i) => {
            const click = (event) => {
                this.props.onMenuClick(e.action)
                event.preventDefault();
                this.setState(() => {
                    return { active: false };
                })
            };
            return (
                <li key={i}>
                    <a onClick={click} href="#">{e.text}</a>
                </li>
            );
        });
    }

    render() {

        const options = [
            { text: "Vår politik", action: 'var-politik' },
            { text: "Partiprogram", action: 'partiprogram' },
            { text: "Vår partiledare", action: 'var-partiledare'},
            { text: "Valkompisen", action: 'valkompisen' },
            { text: "Svårläst", action: 'svarlast' },
            { text: "Webshop", action: 'webshop' },
            { text: "Kontakta oss", action: 'kontakta-oss'}
        ];
        if (this.state.active) {
            return (
                <div className={`Menu-wrapper ${this.props.className}`}>
                    <ol>
                        { this.renderMenuOptions(options) }
                    </ol>
                </div>
            )
        } else {
            return (
                <div className={`Menu-wrapper ${this.props.className}`}>
                    <a className="Menu-link" onClick={this.onClick} href="#menu"><i className="material-icons Menu-icon">menu</i></a>
                </div>
            );
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMenuClick: (option) => dispatch({ type: 'MENU', data: option })
    };
};


export default connect(
    undefined,
    mapDispatchToProps
)(Menu);
