import { Stack } from 'expo-router';

export default function ItemLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ title: 'Item' }} />
      <Stack.Screen name="cart" options={{ title: 'Cart' }} />
      <Stack.Screen name="wishList" options={{ title: 'Wishlist' }} />
      <Stack.Screen name="location" options={{ title: 'Set Locaton' }} />
    </Stack>
  );
}
