import CardItem from "@/components/CardItem";
import { CARD_ITEM } from "@/constants/Data";
import { Box, FlatList } from "native-base";
import React from "react";

export default function Listing() {
  return (
    <Box>
      <FlatList
        mt="3"
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
  );
}
