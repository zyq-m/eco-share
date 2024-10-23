import { ItemT } from "@/constants/type";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Box, AspectRatio, HStack, Icon, Image, Text } from "native-base";
import { Pressable } from "react-native";

export default function CardItem(item: ItemT) {
  return (
    <Box background="white" rounded="sm" overflow="hidden" mb="3">
      <Pressable onPress={() => router.push(`/(item)/${item.id}`)}>
        <AspectRatio w="183">
          <Image
            source={{
              uri: item.images?.[0].uri,
            }}
            alt={item.name}
          />
        </AspectRatio>
        <Box p="2">
          <Text textTransform="capitalize" mb="1">
            {item.name}
          </Text>
          {/* <HStack alignItems="center">
            {[...Array(item.rating).keys()].map(() => (
              <Icon
                as={MaterialIcons}
                name="star"
                size="sm"
                color="yellow.400"
              />
            ))}
            <Text fontSize="11" ml="1" color="gray.400">
              ({item.rating})
            </Text>
          </HStack> */}
          <HStack justifyContent="space-between">
            <Text fontSize="xs">Qty: {item.quantity}</Text>
            <Icon
              as={MaterialCommunityIcons}
              name="cards-heart-outline"
              size="md"
              color="red.400"
            />
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
}
