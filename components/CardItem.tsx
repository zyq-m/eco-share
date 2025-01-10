import { ItemT } from "@/constants/type";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
	Box,
	AspectRatio,
	HStack,
	Icon,
	Image,
	Text,
	Button,
	Spacer,
} from "native-base";
import { Pressable } from "react-native";

export default function CardItem(item: ItemT) {
	return (
		<Box
			background="white"
			py="2"
			px="3"
			rounded="sm"
			overflow="hidden"
			mb="3"
		>
			<Pressable>
				<HStack space="2">
					<AspectRatio w="170">
						<Image
							rounded="sm"
							source={{
								uri: `${process.env.EXPO_PUBLIC_API_URL}/${item.images?.[0].uri}`,
							}}
							alt={item.name}
						/>
					</AspectRatio>
					<Box flexGrow="1">
						<Box mb="4">
							<Text
								textTransform="capitalize"
								mb="1"
								fontWeight="bold"
								fontSize="md"
							>
								{item.name}
							</Text>
							<HStack justifyContent="space-between">
								<Text fontSize="xs">
									Quantity: {item.quantity}
								</Text>
							</HStack>
							<HStack justifyContent="space-between">
								<Text fontSize="xs">
									Condition: {item.condition}
								</Text>
							</HStack>
							<HStack justifyContent="space-between">
								<Text fontSize="xs">
									Description: {item.description}
								</Text>
							</HStack>
						</Box>
						<HStack
							alignItems="center"
							justifyContent="flex-end"
							space="3"
						>
							<Icon
								as={MaterialCommunityIcons}
								name="cards-heart-outline"
								size="md"
								color="red.400"
							/>
							<Button
								size="sm"
								rounded="full"
								px="4"
								onPress={() =>
									router.push(`/(item)/${item.id}`)
								}
							>
								Request
							</Button>
						</HStack>
					</Box>
				</HStack>
			</Pressable>
		</Box>
	);
}
