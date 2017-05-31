import React from 'react';
import {AppRegistry} from 'react-native';
import {Router, Switch, Scene} from 'react-native-mobx';
import GiftedChatView from './components/GiftedChatView';
import Login from './components/Login';
import xmpp from './stores/XmppStore';
// Define all routes of the app
var XmppDemo = React.createClass({
  render: function() {
      return (
          <Router xmpp={xmpp}>
            <Scene key="main" tabs component={Switch} selector={()=>!xmpp.logged ? 'login' : 'conversation'}>
              <Scene key="login" component={Login} title="Login"/>
              <Scene key="conversation" component={GiftedChatView}/>
            </Scene>
          </Router>
      );
  }
});

AppRegistry.registerComponent('XmppDemo', () => XmppDemo);
