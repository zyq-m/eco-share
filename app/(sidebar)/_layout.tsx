import { Drawer } from "expo-router/drawer";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
          drawerIcon: () => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="listing"
        options={{
          title: "My Listing",
          drawerIcon: () => (
            <MaterialIcons name="list" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="location"
        options={{
          title: "Location",
          drawerIcon: () => (
            <MaterialIcons name="location-on" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="nearMe"
        options={{
          title: "Near me",
          drawerIcon: () => (
            <MaterialIcons name="near-me" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="helpCentre"
        options={{
          title: "Help Centre",
          drawerIcon: () => (
            <MaterialIcons name="question-mark" size={24} color="black" />
          ),
        }}
      />
    </Drawer>
  );
}
