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
					headerShown: false,
				}}
			/>
			<Drawer.Screen
				name="listing"
				options={{
					title: "My Listings",
					drawerIcon: () => (
						<MaterialIcons name="list" size={24} color="black" />
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
					title: "Guidelines",
					drawerIcon: () => (
						<MaterialIcons
							name="question-mark"
							size={24}
							color="black"
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="aboutUs"
				options={{
					title: "About Us",
					drawerIcon: () => (
						<MaterialIcons
							name="question-mark"
							size={24}
							color="black"
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="termCondition"
				options={{
					title: "Terms & conditions",
					drawerIcon: () => (
						<MaterialIcons
							name="question-mark"
							size={24}
							color="black"
						/>
					),
				}}
			/>
		</Drawer>
	);
}
