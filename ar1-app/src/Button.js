import React, { Component } from 'react';




class Button extends Component {
  render() {
    return (
      <button onClick={() => {alert("Never push the red button!")}}>
        Push Me
      </button>
    )
  }
}

export default Button;