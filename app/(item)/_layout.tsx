import { Stack } from "expo-router";

export default function ItemLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ title: "Item" }} />
      <Stack.Screen name="requestList" options={{ title: "Request Lists" }} />
      <Stack.Screen name="location" options={{ title: "Set Locaton" }} />
    </Stack>
  );
}
