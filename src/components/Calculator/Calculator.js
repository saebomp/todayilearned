import React, { Component } from 'react';
import ResultComponent from './ResultComponent';
// import KeyPadComponent from "./KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    {/* <KeyPadComponent onClick={this.onClick}/> */}
                </div>
            </div>
        );
    }
}

export default App;