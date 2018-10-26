import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import "./input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };

    this.myInput = React.createRef();
  }

  handleClickOutside(e) {
    if (this.myInput.current && this.state.focused) {
      this.myInput.current.blur();
    }
  }

  render() {
    return (
      <div className="search-box">
        <input
          ref={this.myInput}
          type="text"
          className="search-input"
          value={this.props.value}
          onChange={e => {
            this.props.onChange(e);
          }}
          onTouchStart={e => {
            this.setState({ moving: false });
          }}
          onTouchMove={e => {
            this.setState({ moving: true });
          }}
          onTouchEnd={() => {
            if (!this.state.moving) {
              this.myInput.current.focus();
            }
          }}
          onFocus={() => {
            this.setState({ focused: true });
          }}
          onBlur={() => {
            this.setState({ focused: false });
          }}
        />
        <div
          className="search-icon"
          style={{ backgroundImage: "url(/search.svg)" }}
        />
      </div>
    );
  }
}

export default onClickOutside(Input);
