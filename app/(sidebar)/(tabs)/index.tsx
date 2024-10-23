import api from "@/utils/axios";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import {
	AspectRatio,
	Box,
	Button,
	Center,
	FlatList,
	Flex,
	Heading,
	Icon,
	Image,
	Pressable,
	ScrollView,
	Spacer,
	Text,
} from "native-base";
import { useEffect, useState } from "react";

type CategoryT = {
	id: string;
	name: string;
	image?: string;
};

export default function HomeScreen() {
	const [category, setCategory] = useState<CategoryT[]>([]);

	useEffect(() => {
		api.get("/category")
			.then((res) => {
				setCategory(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<ScrollView>
			<Box
				bg="white"
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
						Rebound
					</Heading>
					<Text color="white" fontSize="lg">
						Make Every Bite Count
					</Text>
					<Button
						rightIcon={
							<Icon as={AntDesign} name="right" size="xs" />
						}
						mt="3"
						px="5"
					>
						Try Now
					</Button>
				</Center>
			</Box>

			<Box safeAreaX={2} backgroundColor="warmGray.100" py="4">
				<Heading mb="4" fontSize="md" textTransform="uppercase">
					Category
				</Heading>
				<Flex direction="row" wrap="wrap" justify="space-between">
					{category?.map((c) => (
						<>
							<Pressable
								key={c.id}
								onPress={() =>
									router.push("/(sidebar)/(tabs)/search")
								}
								mb={2}
							>
								<AspectRatio width="183">
									<Image
										rounded="md"
										source={{
											uri: c.image,
										}}
										alt={c.name}
									/>
								</AspectRatio>
								<Text>{c.name}</Text>
							</Pressable>
						</>
					))}
				</Flex>
			</Box>
		</ScrollView>
	);
}
