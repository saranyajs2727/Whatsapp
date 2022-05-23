import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ChatScreen from '../Components/ChatScreen';
import ChatData from '../Assets/Chat';
import MessageInput from '../Components/MessageInput';

const ChatRoom = () => {
  return (
    <View style={styles.page}>
      {/* <FlatList
        data={ChatData.messages}
        renderItem={({item}) => <ChatScreen message={item} />}
      /> */}
      {/* <MessageInput /> */}
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
