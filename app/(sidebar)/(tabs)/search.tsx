import { Box, FlatList } from "native-base";
import CardItem from "@/components/CardItem";

import { useEffect, useState } from "react";
import { ItemT } from "@/constants/type";
import api from "@/utils/axios";

export default function SearchScreen() {
  const [items, setItems] = useState<ItemT[]>([]);

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
    fetchItems();
  }, []);

  return (
    <Box>
      <FlatList
        mt="2"
        style={{ columnGap: 200 }}
        data={items}
        renderItem={({ item }) => (
          <Box mb="3">
            <CardItem {...item} />
          </Box>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
      />
    </Box>
  );
}
