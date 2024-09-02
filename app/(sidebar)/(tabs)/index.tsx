import CardItem from "@/components/CardItem";
import { CARD_ITEM } from "@/constants/Data";
import { AntDesign } from "@expo/vector-icons";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  FlatList,
  Heading,
  Icon,
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
        mb="2"
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
          <Button
            rightIcon={<Icon as={AntDesign} name="right" size="xs" />}
            mt="3"
            px="5"
          >
            Try Now
          </Button>
        </Center>
      </Box>

      <Box backgroundColor="warmGray.100" py="4">
        <Heading mx="2" mb="4" fontSize="md" textTransform="uppercase">
          Recomended for you
        </Heading>
        <FlatList
          style={{ columnGap: 200 }}
          data={CARD_ITEM}
          renderItem={({ item }) => (
            <Box mb="3">
              <CardItem {...item} />
            </Box>
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
        />
      </Box>
    </ScrollView>
  );
}