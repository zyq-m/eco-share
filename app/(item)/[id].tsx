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
	Modal,
	Pressable,
} from "native-base";
import { router, useLocalSearchParams } from "expo-router";
import { ItemT } from "@/constants/type";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import api from "@/utils/axios";
import { useNavigation } from "expo-router";
import dayjs from "dayjs";
import relativetime from "dayjs/plugin/relativeTime";
import { useLocationStore } from "@/store/store";

export default function ItemScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const [item, setItem] = useState<ItemT>();
	const navigation = useNavigation();
	const [isSubmit, setIsSubmit] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const { location, setLocation } = useLocationStore();

	const fetchItem = async () => {
		try {
			const itemRes = await api.get(`/item/${id}`);

			setItem({
				...itemRes.data,
				timestamp: dayjs().to(itemRes.data?.timestamp).toString(),
			});
			setLocation(itemRes.data.location);

			navigation.setOptions({ title: itemRes.data.name });
		} catch (error) {
			// do popup
			console.log(error);
		}
	};

	const onRequest = async () => {
		setIsSubmit(true);
		try {
			const item = await api.post(`/item/${id}`, { quantity });

			router.push("/(sidebar)/(tabs)/search");
		} catch (error) {
			console.log(error);
		}
		// setShowModal(false);
		setIsSubmit(false);
	};

	const onQuantity = (number: number) => {
		setQuantity((prev) => {
			let tmp = prev + number;
			if (item && tmp >= item.quantity && tmp <= 0) return prev + number;
			return prev;
		});
	};

	useEffect(() => {
		dayjs.extend(relativetime);
		fetchItem();
	}, []);

	return (
		<ScrollView>
			<AspectRatio>
				<Image
					key={item?.images?.[0].uri}
					source={{
						uri: `${process.env.EXPO_PUBLIC_API_URL}/${item?.images?.[0].uri}`,
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
						<Avatar
							size="sm"
							source={{
								uri:
									item?.user?.avatar ??
									"https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600",
							}}
						/>
						<Text>{item?.user?.name}</Text>
					</HStack>
					<HStack space="1" alignItems="center" mb="3">
						<Icon
							as={MaterialCommunityIcons}
							name="clock-outline"
						/>
						<Text color="gray.400" fontSize="xs">
							{item?.timestamp ?? ""}
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
						{/* <HStack justifyContent="space-between" alignItems="center" mb="1">
              <Text>Location</Text>
              <HStack space="1" alignItems="center">
                <Icon as={MaterialIcons} name="location-pin" />
                <Text>100m away</Text>
              </HStack>
            </HStack> */}
						<Pressable
							onPress={() => router.push("/(item)/location")}
						>
							<HStack
								py="4"
								alignItems="center"
								justifyContent="space-between"
							>
								<Text>Location</Text>
								<MaterialIcons
									name="navigate-next"
									size={24}
									color="black"
								/>
							</HStack>
						</Pressable>
						<Box overflow="hidden" borderRadius="md">
							<MapView
								showsUserLocation
								style={{ width: "100%", height: 200 }}
								initialRegion={{
									latitude: location?.latitude ?? 5.33659,
									longitude:
										location?.longitude ?? 103.141998,
									latitudeDelta: 0.0922,
									longitudeDelta: 0.0421,
								}}
							>
								{location && (
									<Marker coordinate={{ ...location }} />
								)}
							</MapView>
						</Box>
					</Box>
				</VStack>

				<Button
					isDisabled={!item?.available}
					onPress={() => setShowModal(true)}
				>
					Request This Item
				</Button>
			</Box>
			<Modal isOpen={showModal}>
				<Modal.Content maxWidth="400px">
					<Modal.CloseButton onPress={() => setShowModal(false)} />
					<Modal.Header>Item</Modal.Header>
					<Modal.Body>
						<HStack
							alignItems="center"
							justifyContent="space-between"
						>
							<Text>Quantity</Text>
							<Button.Group
								variant="outline"
								isAttached
								size="sm"
							>
								<Button onPress={() => onQuantity(-1)}>
									-
								</Button>
								<Button disabled>{quantity}</Button>
								<Button onPress={() => onQuantity(1)}>+</Button>
							</Button.Group>
						</HStack>
					</Modal.Body>
					<Modal.Footer>
						<Button
							flex="1"
							isLoadingText="Confirm"
							isLoading={isSubmit}
							onPress={onRequest}
						>
							Confirm
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</ScrollView>
	);
}
