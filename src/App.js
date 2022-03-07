import React,{Component} from "react";
import Functional from "./Functional";
import Class from "./Class";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFunction: false,
      isClass: false,
    };
    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
  }
  button1() {
    this.setState((state) => ({
      isFunction: !state.isFunction,
    }));
  }
  button2() {
    this.setState((state) => ({
      isClass: !state.isClass,
    }));
  }
  render() {
    return (
      <div>
        <h1>STYLING FUNCTIONAL AND CLASS COMPONENTS </h1>
        <div className>
          <button onClick={this.button2} className="button2">
            Class Components
          </button>
          <button onClick={this.button1} className="button1">
            Functional Components
          </button>
          
        </div>
        <div className="Cards">
          {this.state.isFunction ? <Functional /> 
          : <></>}
          {this.state.isClass ? <Class /> 
          : <></>}
        </div>
      </div>
    );
  }
}

export default App;