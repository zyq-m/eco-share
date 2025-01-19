import { CHAT_LIST } from '@/constants/Data';
import { Chat } from '@/constants/type';
import { router } from 'expo-router';
import {
  Avatar,
  Box,
  FlatList,
  Heading,
  HStack,
  Pressable,
  Text,
} from 'native-base';

export default function ChatListScreen() {
  return (
    <Box>
      <FlatList
        data={CHAT_LIST}
        renderItem={({ item }) => <ChatList {...item} />}
        ItemSeparatorComponent={() => <Box height="1" />}
      />
    </Box>
  );
}

function ChatList(chat: Chat) {
  return (
    <Pressable onPress={() => router.push(`/(chat)/${chat.name}`)}>
      <HStack
        space={3}
        alignItems="center"
        bgColor="white"
        py="5"
        px="3"
        rounded="sm"
      >
        <Avatar source={{ uri: chat.avatar }}></Avatar>
        <Box flex="1">
          <HStack justifyContent="space-between">
            <Heading fontSize="md">{chat.name}</Heading>
            <Text fontSize="xs" color="gray.500">
              {chat.date}
            </Text>
          </HStack>
          <Text color="gray.500">{chat.message}</Text>
        </Box>
      </HStack>
    </Pressable>
  );
}
