import React from "react";

import containerStyle from "./TooltipContainer.module.css";

class TooltipContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isHover: false,
      class: [
        containerStyle.tooltipLeft,
        containerStyle.tooltipBottom,
        containerStyle.tooltipRight,
        containerStyle.tooltipTop,
      ],
    };
  }

  handleMouseEnter = () => {
    this.setState((prevState) => ({
      isHover: !prevState.isHover,
    }));
  };

  handleMouseLeave = () => {
    this.setState((prevState) => ({
      isHover: !prevState.isHover,
    }));
  };

  render() {
    return (
      <div className={containerStyle.container}>
        <div>
          <button
            type="button"
            className={containerStyle.hoverbtn}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            Hover over me!
          </button>
        </div>

        {this.state.isHover ? (
          <div className={this.state.class[this.props.position]}>
            Thanks for hovering! I'm a tooltip
          </div>
        ) : null}
      </div>
    );
  }
}
export default TooltipContainer;
