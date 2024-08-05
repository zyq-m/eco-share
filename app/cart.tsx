import { CART_LIST } from "@/constants/Data";
import { Cart } from "@/constants/type";
import {
  AspectRatio,
  Box,
  FlatList,
  Heading,
  HStack,
  VStack,
  Image,
  Text,
  Checkbox,
  Button,
} from "native-base";
import { Pressable } from "react-native";

export default function CartScreen() {
  return (
    <Box mx="2">
      <FlatList
        data={CART_LIST.slice(0, 3)}
        renderItem={({ item }) => <CartList {...item} />}
        ItemSeparatorComponent={() => <Box height="1" />}
      />
    </Box>
  );
}

function CartList(cart: Cart) {
  return (
    <Pressable>
      <VStack backgroundColor="white" px="3" py="4" borderRadius="sm">
        <HStack space="4" mb="2">
          <Checkbox
            value={cart.item.name}
            aria-label={cart.item.name}
            // isChecked={cart.isCheck}
          />
          <Heading fontSize="md" textTransform="capitalize">
            {cart.item.user}
          </Heading>
        </HStack>
        <HStack space="4">
          <AspectRatio w="120">
            <Image
              source={{
                uri: cart.item.uri,
              }}
              alt={cart.item.name}
              borderRadius="sm"
            />
          </AspectRatio>
          <Box justifyContent="space-between" flex="1">
            <Text textTransform="capitalize">{cart.item.name}</Text>
            <HStack justifyContent="space-between">
              <Text>{cart.item.quantity} item left</Text>
              <Button.Group size="6" variant="outline" isAttached>
                <Button>-</Button>
                <Button disabled>1</Button>
                <Button>+</Button>
              </Button.Group>
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </Pressable>
  );
}
