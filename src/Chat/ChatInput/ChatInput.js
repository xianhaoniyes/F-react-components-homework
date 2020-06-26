import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  render() {
    return (
      <footer className="ChatInput">
        <input
          className="Input"
          type="text"
          onChange={this.props.onInput}
          value={this.props.inputValue}
        />
        <button type="button" onClick={this.props.onSubmit}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
