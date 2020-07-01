import React, { Component } from 'react';
import '../index.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  onInput = (event) => {
    this.setState({
      userMessages: event.target.value,
    });
  };

  onSubmit = () => {
    if (this.state.userMessages.length > 0) {
      const userMessage = { text: this.state.userMessages, role: ROLE.CUSTOMER };
      const messages = this.state.messages.concat(userMessage);
      const storeMessages = answersData.filter((answer) => {
        return answer.tags.reduce((accumlator, currentValue) => {
          if (accumlator) return true;
          if (this.state.userMessages.includes(currentValue)) return true;
          return false;
        }, false);
      });
      const allMessages = messages.concat(storeMessages);
      this.setState({
        messages: allMessages,
        userMessages: '',
      });
    }
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Main">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput
          onInput={this.onInput}
          onSubmit={this.onSubmit}
          inputValue={this.state.userMessages}
        />
      </main>
    );
  }
}

export default Chat;
