import { Tabs } from "expo-router";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} safeAreaInsets={{ bottom: 2 }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: () => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="newItem"
        options={{
          title: "Add",
          tabBarIcon: () => (
            <MaterialIcons name="add" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chats",
          tabBarIcon: () => (
            <MaterialIcons name="chat" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
