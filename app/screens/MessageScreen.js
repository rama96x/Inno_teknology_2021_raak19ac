import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
} from '../styles/MessagesStyle';
/*
* Hardcoder 2 beskeder i en list/array
* */
const Messages = [
    {
        id: '1',
        userName: 'Sine Zambach',
        userImg: require('../assets/users/user_image_female.png'),
        messageTime: '2 hours ago',
        messageText:
            'Hey there, I have sent the amount we agreed upon. Thank you once again!',
    },
    {
        id: '2',
        userName: 'Ramazan Akbas',
        userImg: require('../assets/users/random_user_2.png'),
        messageTime: '2 months ago',
        messageText:
            'Hey there, just wanted to thank you once again for your help. Really appreciate it!',
    }
];

/*
* Her defineres UI, hvor jeg kalder på værdierne i mit array fra oven.*/
const MessagesScreen = ({navigation}) => {
    return (
        <Container>
            <FlatList
                data={Messages}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                        <UserInfo>
                            <UserImgWrapper>
                                <UserImg source={item.userImg} />
                            </UserImgWrapper>
                            <TextSection>
                                <UserInfoText>
                                    <UserName>{item.userName}</UserName>
                                    <PostTime>{item.messageTime}</PostTime>
                                </UserInfoText>
                                <MessageText>{item.messageText}</MessageText>
                            </TextSection>
                        </UserInfo>
                    </Card>
                )}
            />
        </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});