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
            selectSymbol: "",
            clearMode: false
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.handleMultiplication = this.handleMultiplication.bind(this);
        this.handleDivision = this.handleDivision.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleSubtraction = this.handleSubtraction.bind(this);

        this.getTotale = this.getTotale.bind(this);
    }

    onHandlePress(value) {
        var displayvalue = (this.state.displayvalue === "0" ? "" : this.state.clearMode ? "" : (this.state.displayvalue).toString()) + value;
        this.setState({ displayvalue, clearMode: false })
    }

    onClear() {
        this.setState({
            displayvalue: "0", oldValue: 0,
            selectSymbol: ""
        })
    }

    handleDivision() {
        if (!this.state.oldValue) {
            let oldValue = parseInt(this.state.displayvalue, 10);
            this.setState({
                displayvalue: "0",
                selectSymbol: "/",
                oldValue
            })
        } else {
            let oldValue = this.getTotaleWithSelectSymbol(this.state.selectSymbol)
            this.setState({
                displayvalue: "0",
                selectSymbol: "/",
                oldValue
            })
        }


    }

    handleSubtraction() {
        if (!this.state.oldValue) {
            let oldValue = parseInt(this.state.displayvalue, 10);
            this.setState({
                displayvalue: "0",
                selectSymbol: "-",
                oldValue
            })
        } else {
            let oldValue = this.getTotaleWithSelectSymbol(this.state.selectSymbol)
            this.setState({
                displayvalue: "0",
                selectSymbol: "-",
                oldValue
            })
        }
    }

    handleAddition() {
        if (!this.state.oldValue) {
            let oldValue = parseInt(this.state.displayvalue, 10);
            this.setState({
                displayvalue: "0",
                selectSymbol: "+",
                oldValue
            })
        } else {
            let oldValue = this.getTotaleWithSelectSymbol(this.state.selectSymbol)
            this.setState({
                displayvalue: "0",
                selectSymbol: "+",
                oldValue
            })
        }
    }
    handleMultiplication() {
        if (!this.state.oldValue) {
            let oldValue = parseInt(this.state.displayvalue, 10);
            this.setState({
                displayvalue: "0",
                selectSymbol: "*",
                oldValue
            })
        } else {
            let oldValue = this.getTotaleWithSelectSymbol(this.state.selectSymbol)
            //eval(parseInt(this.state.oldValue, 10) + this.state.selectSymbol + parseInt(this.state.displayvalue, 10));
            this.setState({
                displayvalue: "0",
                selectSymbol: "*",
                oldValue
            })
        }
    }
    getTotaleWithSelectSymbol(selectSymbol) {
        switch (selectSymbol) {
            case "/":
                let divisionTotal = parseInt(this.state.oldValue, 10) / parseInt(this.state.displayvalue, 10);
                return divisionTotal;
            case "+":
                let additionTotal = parseInt(this.state.oldValue, 10) + parseInt(this.state.displayvalue, 10);
                return additionTotal;
            case "-":
                let subtractionTotal = parseInt(this.state.oldValue, 10) - parseInt(this.state.displayvalue, 10);
                return subtractionTotal;
            case "*":
                console.log("old", this.state.oldValue);
                console.log("new", this.state.displayvalue);
                let multiplicationTotal = parseInt(this.state.oldValue, 10) * parseInt(this.state.displayvalue, 10);
                return multiplicationTotal;
            default:
                break;
        }
    }


    getTotale() {
        switch (this.state.selectSymbol) {
            case "/":
                let divisionTotal = parseInt(this.state.oldValue, 10) / parseInt(this.state.displayvalue, 10);
                this.setState({
                    displayvalue: divisionTotal, clearMode: true, oldValue: 0,
                    selectSymbol: ""
                })
                break;
            case "+":
                let additionTotal = parseInt(this.state.oldValue, 10) + parseInt(this.state.displayvalue, 10);
                this.setState({
                    displayvalue: additionTotal, clearMode: true, oldValue: 0,
                    selectSymbol: ""
                })
                break;
            case "-":
                let subtractionTotal = parseInt(this.state.oldValue, 10) - parseInt(this.state.displayvalue, 10);
                this.setState({
                    displayvalue: subtractionTotal, clearMode: true, oldValue: 0,
                    selectSymbol: ""
                })
                break;
            case "*":
                let multiplicationTotal = parseInt(this.state.oldValue, 10) * parseInt(this.state.displayvalue, 10);
                this.setState({
                    displayvalue: multiplicationTotal, clearMode: true, oldValue: 0,
                    selectSymbol: ""
                })
                break;
            default:
                break;
        }
    }

    handleKeyPress = (event) => {
        let { key } = event;
        if (key === 'Backspace') {
            event.preventDefault()
            this.onClear()
        }
        if (key === '*') {
            event.preventDefault()
            this.handleMultiplication()
        }
        if (key === '/') {
            event.preventDefault()
            this.handleDivision()
        }
        if (key === '+') {
            event.preventDefault()
            this.handleAddition()
        }
        if (key === '-') {
            event.preventDefault()
            this.handleSubtraction()
        }
        if (parseInt(key, 10)) {
            event.preventDefault()
            this.onHandlePress.bind(this, key)()
        }
        if (key === 'Enter') {
            event.preventDefault()
            this.getTotale();
        }

    }

    componentDidMount() {
        // window.addEventListener(KeyboardEvent)
        window.addEventListener('keydown', this.handleKeyPress)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
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
                            <Division onClick={this.handleDivision} />

                            <MyButton onClick={this.onHandlePress.bind(this, 7)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="7" />
                            <MyButton onClick={this.onHandlePress.bind(this, 8)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="8" />
                            <MyButton onClick={this.onHandlePress.bind(this, 9)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="9" />
                            <Subtraction onClick={this.handleSubtraction} />

                            <MyButton onClick={this.onHandlePress.bind(this, 4)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="4" />
                            <MyButton onClick={this.onHandlePress.bind(this, 5)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="5" />
                            <MyButton onClick={this.onHandlePress.bind(this, 6)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="6" />
                            <Addition onClick={this.handleAddition} />

                            <MyButton onClick={this.onHandlePress.bind(this, 1)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="1" />
                            <MyButton onClick={this.onHandlePress.bind(this, 2)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="2" />
                            <MyButton onClick={this.onHandlePress.bind(this, 3)} className="btn btn-light" style={{ width: "80px", height: "50px" }} titale="3" />
                            <Multiplication onClick={this.handleMultiplication} />

                            <button onClick={this.getTotale} className="btn  btn-block" style={{ height: "50px", backgroundColor: "#f2274f" }} > =</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

