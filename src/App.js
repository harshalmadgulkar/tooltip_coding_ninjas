import React from "react";
import TooltipContainer from "./TooltipContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: 0,
    };
  }

  handleOptions=(e)=>{
    console.log(e);
    this.setState({
      position:e
    })
  }

  render() {
    return (
      <>
        <div className={"options"}>
          <select id="positions" onChange={(e)=>this.handleOptions(e.target.value)}>
            <option value="0">Left</option>
            <option value="1">Bottom</option>
            <option value="2">Right</option>
            <option value="3">Top</option>
          </select>
        </div>
        <TooltipContainer position={this.state.position} />
      </>
    );
  }
}

export default App;
