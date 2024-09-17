import React, { useEffect, useState } from "react";
import {
  AspectRatio,
  ScrollView,
  Image,
  Box,
  Avatar,
  Text,
  HStack,
  Button,
  VStack,
  Icon,
} from "native-base";
import { useLocalSearchParams } from "expo-router";
import { ItemT } from "@/constants/type";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import MapView from "react-native-maps";
import api from "@/utils/axios";
import { useNavigation } from "expo-router";

export default function ItemScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [item, setItem] = useState<ItemT>();
  const navigation = useNavigation();

  const fetchItem = async () => {
    try {
      const itemRes = await api.get(`/item/${id}`);
      setItem(itemRes.data);
      navigation.setOptions({ title: itemRes.data.name });
    } catch (error) {
      // do popup
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <ScrollView>
      <AspectRatio>
        <Image
          source={{
            uri: item?.images?.[0].uri,
          }}
          alt="View"
          mb="3"
        />
      </AspectRatio>
      <Box px="3" safeAreaBottom={3}>
        <HStack justifyContent="flex-end">
          <Pressable>
            <Icon
              as={MaterialCommunityIcons}
              name="cards-heart-outline"
              size="lg"
              color="red.400"
            />
          </Pressable>
        </HStack>

        <HStack justifyContent="space-between" alignItems="center">
          <HStack space="2" alignItems={"center"} mb="4">
            <Avatar size="sm" source={{ uri: item?.user?.avatar ?? "" }} />
            <Text>{item?.user?.name}</Text>
          </HStack>
          <HStack space="1" alignItems="center" mb="3">
            <Icon as={MaterialCommunityIcons} name="clock-outline" />
            <Text color="gray.400" fontSize="xs">
              5 minutes ago
            </Text>
          </HStack>
        </HStack>

        <VStack space="6" mb="5">
          <Text fontWeight="medium">{item?.quantity} item left</Text>

          <Text fontWeight="medium">Category: {item?.category}</Text>

          <Box>
            <Text fontWeight="medium">Description:</Text>
            <Text>{item?.description}</Text>
          </Box>

          <Box>
            <Text fontWeight="medium">Condition:</Text>
            <Text>{item?.condition}</Text>
          </Box>

          <Text fontWeight="medium">Pickup time: By arrangement</Text>

          <Box>
            <HStack justifyContent="space-between" alignItems="center" mb="1">
              <Text>Location</Text>
              <HStack space="1" alignItems="center">
                <Icon as={MaterialIcons} name="location-pin" />
                <Text>100m away</Text>
              </HStack>
            </HStack>
            <Box overflow="hidden" borderRadius="md">
              <MapView
                style={{ width: "100%", height: 200 }}
                initialRegion={{
                  latitude: 5.33659,
                  longitude: 103.141998,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
            </Box>
          </Box>
        </VStack>

        <Button>Request This Item</Button>
      </Box>
    </ScrollView>
  );
}
