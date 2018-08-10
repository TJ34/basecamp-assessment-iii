import React, { Component } from 'react';


class Sentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word1: "Ready ",
      word2: "for ",
      word3: "class!"
    };
  }
  render() {
    return <div className="For">{this.state.word1}{this.state.word2}{this.state.word3}</div>
  }
}

export default Sentence;