import { ItemT } from "@/constants/type";
import api from "@/utils/axios";
import {
  Text,
  ScrollView,
  VStack,
  Box,
  HStack,
  Image,
  AspectRatio,
  Heading,
  Button,
  Badge,
} from "native-base";
import { useEffect, useState } from "react";

type RequestItemT = {
  id: number;
  item: ItemT;
  item_id: number;
  quantity: number;
  email: string;
  completed: boolean;
};

export default function RequestList() {
  const [item, setItem] = useState<RequestItemT[]>([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemRes = await api.get("/item/my-request");
        setItem(itemRes.data);

        console.log(itemRes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItem();
  }, []);

  return (
    <ScrollView>
      <VStack>
        {item.map((d) => (
          <RequestComponent key={d.id} {...d} />
        ))}
      </VStack>
    </ScrollView>
  );
}

function RequestComponent(item: RequestItemT) {
  const onCompleted = async () => {
    try {
      const itemRes = await api.put(`/item/request/${item.id}`);
      console.log(itemRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HStack
      background={item.completed ? "gray.100" : "white"}
      px="4"
      py="3"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack space="3" alignItems="center">
        <Image
          source={{ uri: item.item.images?.[0].uri }}
          alt={item.item.name}
          height={90}
          width={90}
          rounded="md"
        />
        <Box>
          <Heading>{item.item.name}</Heading>
          <Text color="blueGray.600" textTransform="capitalize">
            {item.item.category} category
          </Text>
          <Text color="blueGray.400">{item.quantity} item</Text>
        </Box>
      </HStack>

      <Box>
        {item.completed ? (
          <Badge variant="outline" colorScheme="success" rounded="full">
            Completed
          </Badge>
        ) : (
          <Button onPress={onCompleted} size="sm" rounded="full">
            Recieve
          </Button>
        )}
      </Box>
    </HStack>
  );
}
