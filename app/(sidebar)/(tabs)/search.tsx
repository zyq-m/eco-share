import { Box, FlatList } from "native-base";
import CardItem from "@/components/CardItem";

import { useEffect, useState } from "react";
import { ItemT } from "@/constants/type";
import api from "@/utils/axios";
import { useIsFocused } from "@react-navigation/native";

export default function SearchScreen() {
	const [items, setItems] = useState<ItemT[]>([]);
	const isFocused = useIsFocused();

	const fetchItems = async () => {
		try {
			const itemRes = await api.get("/item");
			setItems(itemRes.data);
		} catch (error) {
			// do popup
			console.log(error);
		}
	};

	useEffect(() => {
		isFocused && fetchItems();
	}, [isFocused]);

	return (
		<Box safeAreaTop={2} safeAreaX={2}>
			<FlatList
				data={items}
				renderItem={({ item }) => <CardItem {...item} />}
				keyExtractor={(item) => JSON.stringify(item.id)}
			/>
		</Box>
	);
}
