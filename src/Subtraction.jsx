import React from "react";
import './App.css';

export default class Subtraction extends React.Component {
    render() {
        return (
            <button {...this.props} className="btn" style={{ width: "78px", height: "50px", backgroundColor: "#f2274f", fontSize: "30px", textAlign: "center" }} >-</button>
        )
    }
}

