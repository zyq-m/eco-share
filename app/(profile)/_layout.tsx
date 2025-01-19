import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ title: 'Edit profile' }} />
      <Stack.Screen
        name="changePassword"
        options={{ title: 'Change password' }}
      />
    </Stack>
  );
}
