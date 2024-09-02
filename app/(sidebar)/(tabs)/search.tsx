import { Box, FlatList } from "native-base";
import CardItem from "@/components/CardItem";

import { CARD_ITEM } from "@/constants/Data";

export default function SearchScreen() {
  return (
    <Box>
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
  );
}
