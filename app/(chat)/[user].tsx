import { useState, useEffect, useCallback } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

export default function ChatScreen() {
  const [messages, setMessages] = useState<IMessage[] | []>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hi there. This item is available",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "John",
          avatar:
            "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
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
