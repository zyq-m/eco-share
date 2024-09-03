import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  ScrollView,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import MapView from "react-native-maps";
import { Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import usePickImage from "@/hooks/usePickImage";

type Category = {
  id: number;
  name: string;
  selected: boolean | true | false;
};

export default function NewItemScreen() {
  const [service, setService] = useState("");
  const [category, setCategory] = useState<Category[] | []>([]);
  const { pickImage } = usePickImage();

  const oncategory = (id: number) => {
    setCategory((prev) => {
      return prev.map((d) => {
        if (d.id == id) return { ...d, selected: !d.selected };

        return { ...d };
      });
    });
  };

  useEffect(() => {
    setCategory([{ id: 1, name: "Food", selected: true }]);
  }, []);

  return (
    <ScrollView>
      <HStack background="white" p="3">
        <HStack alignItems="center" space={3}>
          <Pressable onPress={pickImage}>
            <VStack
              justifyContent="center"
              alignItems="center"
              borderColor="gray.300"
              width={120}
              h={120}
              borderWidth="1"
              borderStyle="dashed"
              borderRadius="md"
            >
              <MaterialCommunityIcons
                name="camera-plus-outline"
                size={50}
                color="black"
              />
            </VStack>
          </Pressable>
          <Text>Add up to 10 images</Text>
        </HStack>
      </HStack>
      <VStack space={6} background="white" mt="4" p="3">
        <FormControl>
          <FormControl.Label>Title</FormControl.Label>
          <Input />
        </FormControl>

        <Box>
          <Text>Description</Text>
          <TextArea numberOfLines={2} autoCompleteType={undefined} />
        </Box>

        <Box>
          <Text mb="2">Category</Text>
          <HStack>
            {category.map((d) => (
              <Button
                onPress={() => oncategory(d.id)}
                key={d.id}
                variant={d.selected ? "solid" : "outline"}
                px={4}
                borderRadius="full"
                size="sm"
              >
                {d.name}
              </Button>
            ))}
          </HStack>
        </Box>

        <Box>
          <Text>Condition</Text>
          <TextArea numberOfLines={2} autoCompleteType={undefined} />
        </Box>

        <FormControl>
          <FormControl.Label>Quantity</FormControl.Label>
          <Input keyboardType="numeric" />
        </FormControl>

        <Box>
          <Text>Location</Text>
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

        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="List for"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>

        <Button>Add Item</Button>
      </VStack>
    </ScrollView>
  );
}

// image
// title
// description
// category
// quantity
// condition
// location
// list for eg example
