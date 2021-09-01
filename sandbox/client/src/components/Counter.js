import React, { Component } from "react";
import "./CounterButton.css";

// window

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      downCount: 0,
      upCount: 0,
    };

//   this.<function> = this.<function>.bind(this);  
//   undefined method = this.updateDownCount.bind(this)
     this.updateDownCount = this.updateDownCount.bind(this)
  }

  // if you write your class methods you must bind this between class <-> consumer of this method
  static updateDownCount() {
    this.setState((state) => {
      return { downCount: state.downCount + 1 };
    });
  }; // recieve an undefined as ou try to update the count 

  static updateUpCount = (arg1) => {
    this.setState((state) => {
      return { upCount: state.upCount + 1 };
    });

    console.log(arg1)
  };

  static countTotal = () => {
    return this.downCount + this.upCount;
  };

//   objectReciever.methodName  
//   this.updateUpCount 
//   passing the above method into our event handler without parenthesis then most likely we need to explicity bind this
//   Global.updateCount => undefined (js really saying hey I see Global however I don't see the property method your asking for)

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        
        
        
        <div id="upvote" onClick={() => this.updateUpCount()}></div>
        
        
        
        <span> {this.state.upCount}</span>
        <div id="downvote" onClick={() => this.updateDownCount(this.coun)}></div>
        <span>{this.state.downCount}</span>
      </div>
    );
  }
}
export default CounterButton;