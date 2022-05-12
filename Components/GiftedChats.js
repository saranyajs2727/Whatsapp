import {View, Text} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
 import Icon from 'react-native-vector-icons/Feather'
 import FIcon from 'react-native-vector-icons/FontAwesome'
export default function GiftedChats() {
  // console.log("hiiii");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hii',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    // console.log(messages,"message");
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={{margin: 10, padding: 5}}>
          <Icon name="send" size={20} color="blue" />
        </View>
      </Send>
    );
  };
  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e5f55',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };
  const scrollToBottomComponent = () => {
    return <FIcon name="angle-double-down" size={22} color="#333" />;
  };
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
}