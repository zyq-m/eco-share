import { Box, FlatList } from "native-base";
import CardItem from "@/components/CardItem";

import { CARD_ITEM } from "@/constants/Data";

export default function SearchScreen() {
  return (
    <Box>
      <FlatList
        style={{ columnGap: 200 }}
        data={CARD_ITEM}
        renderItem={({ item }) => <CardItem {...item} />}
        numColumns={2}
        ItemSeparatorComponent={() => <Box height="3" />}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
      />
    </Box>
  );
}
