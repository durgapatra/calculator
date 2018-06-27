import React from "react";
import './App.css';
import MyButton from "./ButtonsComponent";

import Division from "./Division";
import Subtraction from "./Subtraction";
import Addition from "./Addition";
import Multiplication from "./Multiplication";
export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayvalue: "0",
            oldValue: 0,
            selectSymbol: ""
        }
    }

    onHandlePress(value) {
        var displayvalue = (this.state.displayvalue === "0" ? "" : this.state.displayvalue) + value;
        this.setState({ displayvalue })
    }

    onClear() {
        this.setState({ displayvalue: "0" })
    }

    handleDivision() {
        let oldValue = parseInt(this.state.displayvalue, 10);
        this.setState({
            displayvalue: "0",
            selectSymbol: "/",
            oldValue
        })
    }

    handleSubtraction() {
        let oldValue = parseInt(this.state.displayvalue, 10);
        this.setState({
            displayvalue: "0",
            selectSymbol: "-",
            oldValue
        })
    }

    handleAddition() {
        let oldValue = parseInt(this.state.displayvalue, 10);
        this.setState({
            displayvalue: "0",
            selectSymbol: "+",
            oldValue
        })
    }
    handleMultiplication() {
        let oldValue = parseInt(this.state.displayvalue, 10);
        this.setState({
            displayvalue: "0",
            selectSymbol: "*",
            oldValue
        })
    }
    getTotale() {
        console.log(this.state.selectSymbol);

        switch (this.state.selectSymbol) {
            case "/":
                let divisionTotal = parseInt(this.state.oldValue, 10) / parseInt(this.state.displayvalue, 10);
                this.setState({ displayvalue: divisionTotal })
                break;
            case "+":
                let additionTotal = parseInt(this.state.oldValue, 10) + parseInt(this.state.displayvalue, 10);
                this.setState({ displayvalue: additionTotal })
                break;
            case "-":
                let subtractionTotal = parseInt(this.state.oldValue, 10) - parseInt(this.state.displayvalue, 10);
                this.setState({ displayvalue: subtractionTotal })
                break;
            case "*":
                let multiplicationTotal = parseInt(this.state.oldValue, 10) * parseInt(this.state.displayvalue, 10);
                this.setState({ displayvalue: multiplicationTotal })
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="calculatorBox">
                    <div className="calculatorDisplay">
                        {this.state.displayvalue}
                    </div>
                    <div style={{ overflow: "hidden", display: "flex", flexDirection: "row" }}>
                        <div >
                            <MyButton onClick={this.onClear.bind(this)} className="btn btn-light" style={{ width: "240px", height: "50px" }} titale="Clear" />
                            <Division onClick={this.handleDivision.bind(this)} />

                            <MyButton onClick={this.onHandlePress.bind(this, 7)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="7" />
                            <MyButton onClick={this.onHandlePress.bind(this, 8)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="8" />
                            <MyButton onClick={this.onHandlePress.bind(this, 9)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="9" />
                            <Subtraction onClick={this.handleSubtraction.bind(this)} />

                            <MyButton onClick={this.onHandlePress.bind(this, 4)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="4" />
                            <MyButton onClick={this.onHandlePress.bind(this, 5)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="5" />
                            <MyButton onClick={this.onHandlePress.bind(this, 6)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="6" />
                            <Addition onClick={this.handleAddition.bind(this)} />

                            <MyButton onClick={this.onHandlePress.bind(this, 1)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="1" />
                            <MyButton onClick={this.onHandlePress.bind(this, 2)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="2" />
                            <MyButton onClick={this.onHandlePress.bind(this, 3)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="3" />
                            <Multiplication onClick={this.handleMultiplication.bind(this)} />

                            <button onClick={this.getTotale.bind(this)} className="btn  btn-block" style={{ height: "50px", backgroundColor: "#f2274f" }} > =</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

