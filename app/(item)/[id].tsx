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
import { Cart } from "@/constants/type";
import { CART_LIST } from "@/constants/Data";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import MapView from "react-native-maps";

export default function ItemScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [item, setItem] = useState<Cart>();

  useEffect(() => {
    setItem(CART_LIST.filter((item) => item.item.id == id)[0]);
  }, []);

  return (
    <ScrollView>
      <AspectRatio>
        <Image
          source={{
            uri: item?.item.uri,
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
            <Avatar size="sm" source={{ uri: item?.item.user?.avatar }} />
            <Text>{item?.item.user?.name}</Text>
          </HStack>
          <HStack space="1" alignItems="center" mb="3">
            <Icon as={MaterialCommunityIcons} name="clock-outline" />
            <Text color="gray.400" fontSize="xs">
              5 minutes ago
            </Text>
          </HStack>
        </HStack>

        <VStack space="6" mb="5">
          <Text fontWeight="medium">{item?.item.quantity} item left</Text>

          <Text fontWeight="medium">Category: Others</Text>

          <Box>
            <Text fontWeight="medium">Description:</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quia cum, voluptates molestiae magni facilis error. Non
              accusamus ullam hic quaerat ad nulla, sunt, atque fugit illum eum,
              tenetur incidunt?
            </Text>
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
                style={{ width: "100%", height: 250 }}
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
