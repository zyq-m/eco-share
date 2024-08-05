import { Tabs } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Icon } from "native-base";

import TabHeader from "@/components/TabHeader";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <TabHeader />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Icon as={MaterialIcons} name="home" size="xl" />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: () => <Icon as={MaterialIcons} name="search" size="xl" />,
        }}
      />
      <Tabs.Screen
        name="new-item"
        options={{
          title: "New",
          tabBarIcon: () => <Icon as={MaterialIcons} name="add" size="xl" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Me",
          tabBarIcon: () => (
            <Icon as={MaterialCommunityIcons} name="account" size="xl" />
          ),
        }}
      />
    </Tabs>
  );
}
