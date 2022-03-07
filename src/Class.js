import React,{Component} from "react";

class Class extends Component {
  render() {
    return (
      <div className="div2">
        <h2>This is created using Class Component</h2>
        <p> this is done using external CSS</p>
        <p style={{ color: "green" }}>this is done using inline css</p>
      </div>
    );
  }
}

export default Class;