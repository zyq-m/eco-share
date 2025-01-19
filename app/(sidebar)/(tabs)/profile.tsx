import {
  Text,
  Avatar,
  Box,
  Heading,
  Button,
  VStack,
  HStack,
} from 'native-base';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { User } from '@/constants/type';
import api from '@/utils/axios';

export default function Profile() {
  const [profile, setProfile] = useState<User>();

  const fetchProfile = async () => {
    try {
      const profileRes = await api.get('/profile');
      setProfile(profileRes.data);
    } catch (error) {
      // do popup
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <VStack space="4">
      <Box background="white" px="4" py="6" rounded="sm" alignItems="center">
        <Avatar
          bg="purple.600"
          alignSelf="center"
          size="xl"
          source={{
            uri:
              profile?.avatar ??
              'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        >
          RB
        </Avatar>
        <Heading textTransform="capitalize" size="md" mt="2">
          {profile?.name}
        </Heading>
        <Text color="gray.500">{profile?.email}</Text>
        <Button
          rounded="full"
          px="6"
          mt="4"
          // onPress={() => router.push(`/(profile)/${1}`)}
        >
          Edit profile
        </Button>
      </Box>
      <VStack background="white" px="5" py="6" rounded="sm" space="8">
        <Pressable onPress={() => router.push('/(item)/wishList')}>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space="3" alignItems="center">
              <MaterialIcons
                name="format-list-bulleted"
                size={20}
                color="black"
              />
              <Text>Request Lists</Text>
            </HStack>
            <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
          </HStack>
        </Pressable>
        <Pressable onPress={() => router.push('/(profile)/changePassword')}>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space="3" alignItems="center">
              <AntDesign name="eyeo" size={20} color="black" />
              <Text>Change password</Text>
            </HStack>
            <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
          </HStack>
        </Pressable>
        <Pressable onPress={() => router.replace('/')}>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space="3" alignItems="center">
              <MaterialIcons name="logout" size={20} color="black" />
              <Text>Logout</Text>
            </HStack>
            <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
          </HStack>
        </Pressable>
      </VStack>
    </VStack>
  );
}
