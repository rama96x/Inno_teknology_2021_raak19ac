import React, {useCallback, useEffect, useState} from 'react';
import {View,ScrollView,Text,Button,StyleSheet} from 'react-native';
import {GiftedChat} from "react-native-gifted-chat";


/**
 * Dokumentation for denne simple chat system er fundet i denne Github rep:
* https://github.com/FaridSafi/react-native-gifted-chat
 */

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}

export default ChatScreen;