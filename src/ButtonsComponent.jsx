import React from "react";
import './App.css';

export default class MyButton extends React.Component {
    render() {
        return (
            <button {...this.props}>{this.props.titale}</button>
        )
    }
}

