import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddScreen } from "../Screens/AddScreen";
import { HistoryScreen } from "../Screens/HistoryScreen";
import { Home } from "../Screens/Home";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: "#50C878",
				tabBarInactiveTintColor: "#000",
				headerStyle: {
					backgroundColor: "#DADFF7",
				},
				tabBarStyle: {
					backgroundColor: "#DADFF7",
				},
				headerTitle: "FinApp Fumec",
			}}
		>
			<Tab.Screen
				name="Adicionar"
				component={AddScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="add"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="home"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Historico"
				component={HistoryScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="newspaper"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};
