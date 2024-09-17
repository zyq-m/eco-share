import CardItem from "@/components/CardItem";
import { CARD_ITEM } from "@/constants/Data";
import { ItemT } from "@/constants/type";
import api from "@/utils/axios";
import { Box, FlatList } from "native-base";
import React, { useEffect, useState } from "react";

export default function Listing() {
  const [items, setItems] = useState<ItemT[]>([]);

  const fetchItems = async () => {
    try {
      const itemRes = await api.get("/item/my-item");
      setItems(itemRes.data);
      console.log(itemRes.data);
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
        mt="3"
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
