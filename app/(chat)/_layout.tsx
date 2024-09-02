import { useGlobalSearchParams } from "expo-router";
import { Stack } from "expo-router";

export default function ChatLayout() {
  const { user } = useGlobalSearchParams<{ user: string }>();

  return (
    <Stack>
      <Stack.Screen name="[user]" options={{ title: user }} />
    </Stack>
  );
}
