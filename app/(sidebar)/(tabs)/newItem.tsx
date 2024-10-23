import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Select,
  Stack,
  Text,
  TextArea,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import MapView, { Marker } from "react-native-maps";
import { Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import usePickImage, { ImageT } from "@/hooks/usePickImage";
import { useForm, Controller } from "react-hook-form";
import api from "@/utils/axios";
import dayjs from "dayjs";
import { InterfaceInputProps } from "native-base/lib/typescript/components/primitives/Input/types";
import { router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LocationT, useLocationStore } from "@/store/store";

type ItemForm = {
  name: string;
  description: string;
  condition: string;
  quantity: string;
  expiry: string | Date;
  category: string;
  images?: ImageT[];
  location?: LocationT | null;
};

const listOption = [
  {
    label: "A day",
    value: dayjs().add(1, "day").format("YYYY-MM-DD"),
  },
  {
    label: "3 day",
    value: dayjs().add(3, "day").format("YYYY-MM-DD"),
  },
  {
    label: "5 day",
    value: dayjs().add(5, "day").format("YYYY-MM-DD"),
  },
  {
    label: "A week",
    value: dayjs().add(7, "day").format("YYYY-MM-DD"),
  },
];

const categoryOption = [{ label: "Food", value: "food" }];

export default function NewItemScreen() {
  const { pickImage, images, clear } = usePickImage();
  const { location } = useLocationStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ItemForm>();

  const addItem = handleSubmit(async (data) => {
    try {
      const imgData = new FormData();

      images.forEach((d) => {
        imgData.append("images", d);
      });
      const uploadImages = await api.post("/upload", imgData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (uploadImages.status != 201) {
        // handle failed upload
        return;
      }

      data.images = images.map((img) => ({ name: img.name }));
      data.location = location;
      data.expiry = new Date(data.expiry);
      const newItem = await api.post("/item", data);

      router.push("/(sidebar)/(tabs)/");
      clear();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <ScrollView>
      <ScrollView horizontal>
        <HStack background="white" px="4" py="5" space="4">
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
                rounded="md"
              >
                <MaterialCommunityIcons
                  name="camera-plus-outline"
                  size={50}
                  color="black"
                />
              </VStack>
            </Pressable>
            {!images.length && <Text>Add up to 5 images</Text>}
          </HStack>
          {images?.map((d) => (
            <Image
              source={{ uri: d.uri }}
              alt={d.name ?? ""}
              height={120}
              width={120}
              rounded="md"
            />
          ))}
        </HStack>
      </ScrollView>

      <VStack space={6} background="white" mt="4" p="3">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormInput
              label="Title"
              options={{
                onChangeText: field.onChange,
                ...field,
              }}
            />
          )}
        />
        <Box>
          <Text>Description</Text>
          <Controller
            name="description"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <TextArea
                variant="underlined"
                numberOfLines={2}
                autoCompleteType={undefined}
                onChangeText={field.onChange}
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Text mb="2">Category</Text>
          <Controller
            name="category"
            rules={{ required: true }}
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select
                variant="underlined"
                selectedValue={value}
                minWidth="200"
                accessibilityLabel="Pick one"
                placeholder="Pick one"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt="1"
                onValueChange={(itemValue) => onChange(itemValue)}
              >
                {categoryOption.map((d, i) => (
                  <Select.Item key={i} label={d.label} value={d.value} />
                ))}
              </Select>
            )}
          />
        </Box>
        <Box>
          <Text>Condition</Text>
          <Controller
            name="condition"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <TextArea
                variant="underlined"
                numberOfLines={2}
                autoCompleteType={undefined}
                onChangeText={field.onChange}
                {...field}
              />
            )}
          />
        </Box>
        <Controller
          name="quantity"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormInput
              label="Quantity"
              options={{
                onChangeText: field.onChange,
                keyboardType: "numeric",
                ...field,
              }}
            />
          )}
        />
        <Box>
          <Text>List for</Text>
          <Controller
            name="expiry"
            rules={{ required: true }}
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select
                variant="underlined"
                selectedValue={value}
                minWidth="200"
                accessibilityLabel="Pick one"
                placeholder="Pick one"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => onChange(itemValue)}
              >
                {listOption.map((d, i) => (
                  <Select.Item key={i} label={d.label} value={d.value} />
                ))}
              </Select>
            )}
          />
        </Box>
        <Box>
          <Pressable onPress={() => router.push("/(item)/location")}>
            <HStack py="4" alignItems="center" justifyContent="space-between">
              <Text>Set your location</Text>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </HStack>
          </Pressable>
          <Box overflow="hidden" borderRadius="md">
            <MapView
              showsUserLocation
              style={{ width: "100%", height: 200 }}
              initialRegion={{
                latitude: location?.latitude ?? 5.33659,
                longitude: location?.longitude ?? 103.141998,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              {location && <Marker coordinate={{ ...location }} />}
            </MapView>
          </Box>
        </Box>
        <Button onPress={addItem}>Add Item</Button>
      </VStack>
    </ScrollView>
  );
}

function FormInput({
  label,
  error,
  helper,
  options,
}: {
  label: string;
  options: InterfaceInputProps;
  helper?: string;
  error?: string;
}) {
  return (
    <FormControl>
      <Stack>
        <FormControl.Label>{label}</FormControl.Label>
        <Input variant="underlined" {...options} />
        <FormControl.HelperText>{helper}</FormControl.HelperText>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
}
