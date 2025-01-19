import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect, useCallback } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

export default function ChatScreen() {
  const [messages, setMessages] = useState<IMessage[] | []>([]);
  const { image, name } = useLocalSearchParams() as {
    image?: string;
    name?: string;
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Hi there, I have requested ${name}, is this item still available?`,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'John',
          avatar:
            'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        image: image,
        sent: true,
        received: true,
      },
    ]);
  }, [image]);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
