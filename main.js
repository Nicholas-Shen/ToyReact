/*
 * @Author: Nicholas Shen
 * @Date: 2020-08-04 21:56:39
 * @LastEditTime: 2020-08-04 23:05:15
 * @FilePath: /ToyReact/main.js
 */
import {ToyReact, Component} from "./ToyReact.js";

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : null
        }
    }
    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value ? this.state.value : ""}
            </button>
        );
    }
}

class Board extends Component {
    renderSquare(i) {
        return <Square value={i}></Square>
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

let a = <Board />

ToyReact.render(
    a,
    document.body,
);