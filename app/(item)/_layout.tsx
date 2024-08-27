import { CART_LIST } from "@/constants/Data";
import { Stack, useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function ItemLayout() {
  const { id } = useGlobalSearchParams<{ id: string }>();
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(() => {
      const item = CART_LIST.filter((item) => item.item.id == id)[0];
      return item.item.name;
    });
  });

  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{ title: title.charAt(0).toUpperCase() + title.slice(1) }}
      />
    </Stack>
  );
}
