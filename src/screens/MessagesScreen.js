import React from "react";
import {
  StyleSheet,
  StatusBar, 
  SafeAreaView,
  AsyncStorage, 
  Text
} from "react-native";
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { connect } from "react-redux";
import {
  AppIcon,
  AppStyles,
} from "../AppStyles";
import { Configuration } from "../Configuration";
import io from 'socket.io-client';
import store from 'react-native-simple-store';

class MessagesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: AppStyles.color.tint,
    },
    headerTitle: () => {
      return(
        <SafeAreaView>
          
          <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
          <Text style={styles.title}>{navigation.getParam('appBar', {title: ''}).title}</Text>
      </SafeAreaView>
      )
    },
  });

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

    this.socket = io('http://' + Configuration.backend.host + ":" + Configuration.backend.port + "/chat", {transports: ['websocket']} );
    
  }

  componentDidMount() {
    this.socket.emit('join', {"user": this.props.user.email, "room": makeGroupName(this.props.user.email, this.props.opponent)});
    this.socket.on('message', this.onReceivedMessage);
    this.socket.on('joined', (room) => { 
      store.get("userChat2:"+room.room).then(
        res => {
          let messages = [];
          if ( res !== null ) {
            messages = res; 
          }
          this.setState({
            ...this.state, 
            room: room.room,
            messages: messages
          })
        }
      );
      this.props.navigation.setParams({
        appBar: {
            title: this.props.opponent
        }
      });
    });
  }

  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        ...this.state,
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
    store.save("userChat2:"+this.state.room, this.state.messages)
  }

  onReceivedMessage(messages) {
    this._storeMessages(messages);
  }

  onSend(messages = []) {
    this.socket.emit('message', {"message": messages[0], "room": this.state.room} );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: 'white',
            paddingTop: 5,
          },
          left: {
            paddingTop: 5,
          }
        }}
        wrapperStyle={{
          right: {
            minWidth: 200,
            backgroundColor: AppStyles.color.tint,
          },
          left: {
            minWidth: 200,
          }
        }}
       />
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        showUserAvatar={false}
        renderAvatar={null}
        isAnimated={true}
        user={{
          _id: this.props.user.email,
          avatar: 'https://facebook.github.io/react/img/logo_og.png'
        }}
        renderBubble={this.renderBubble.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
    title: {
      fontFamily: AppStyles.fontName.bold,
      fontWeight: "bold",
      color: AppStyles.color.lightgrey,
      fontSize: 25
    }
})

const makeGroupName = (name1, name2) => {
  let str = name1 + name2;
  let arr = str.split('');
  let sorted = arr.sort();
  return sorted.join('');
}

const mapStateToProps = state => ({
  user: state.auth.user,
  opponent: state.auth.opponent
});

export default connect(mapStateToProps)(MessagesScreen);
