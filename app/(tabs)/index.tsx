import CardItem from "@/components/CardItem";
import { CARD_ITEM } from "@/constants/Data";
import {
  AspectRatio,
  Box,
  Center,
  FlatList,
  Heading,
  Image,
  ScrollView,
  Text,
} from "native-base";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Box
        bg="white"
        mx="2"
        rounded="sm"
        alignItems="center"
        borderRadius="sm"
        overflow="hidden"
        position="relative"
      >
        <AspectRatio w="full">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/262488/pexels-photo-262488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            alt=""
          />
        </AspectRatio>
        <Center
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          bg="rgba(0, 0, 0, 0.27)"
        >
          <Heading color="white" fontSize="4xl">
            Eco-Share
          </Heading>
          <Text color="white" fontSize="lg">
            Turn Waste Into Solution
          </Text>
        </Center>
      </Box>

      <Box backgroundColor="warmGray.100" py="4">
        <Heading mx="2" mb="4" fontSize="md" textTransform="uppercase">
          Recomended for you
        </Heading>
        <FlatList
          style={{ columnGap: 200 }}
          data={CARD_ITEM}
          renderItem={({ item }) => <CardItem {...item} />}
          numColumns={2}
          ItemSeparatorComponent={() => <Box height="3" />}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
        />
      </Box>
    </ScrollView>
  );
}
