import React from 'react';
import {View, Text, ScrollView, TextInput, Keyboard, ListView, Dimensions}  from 'react-native';
import styles from './styles';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import xmpp from '../stores/XmppStore';
import { GiftedChat } from 'react-native-gifted-chat';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class GiftedChatView extends React.Component {

    static title(props){
        return xmpp.remote;
    }

    constructor(props) {
      super(props);
      this.state = {messages: []};
      this.onSend = this.onSend.bind(this);
    }

    componentWillMount() {
      this.setState({
        messages: [
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
          },
        ],
      });
    }



    onSend(messages = []) {

      xmpp.sendMessage(messages[0].text);

      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, messages),
        };
      });
    }

    render() {
      return (
        <GiftedChat
          //style={styles.container}
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
        />
      );
    }

}
