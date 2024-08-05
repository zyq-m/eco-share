import { Link, Stack } from "expo-router";
import { Text } from "native-base";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Ops!" }} />
      <Link href="/">
        <Text>Go to home screen!</Text>
      </Link>
    </>
  );
}
