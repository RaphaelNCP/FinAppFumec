import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { User } from "firebase/auth";
import { useState } from "react";
import { Header } from "../Components/Header/Header";
import { AddScreen } from "../Screens/AddScreen";
import { HistoryScreen } from "../Screens/HistoryScreen";
import { Home } from "../Screens/Home";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegisterScreen } from "../Screens/RegisterScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const Navigation = () => {
	const [user, setUser] = useState<User | undefined>();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{!user ? (
					<>
						<Stack.Screen
							name="Login"
							options={{ headerShown: false }}
						>
							{() => <LoginScreen setUser={setUser} />}
						</Stack.Screen>
						<Stack.Screen
							name="Register"
							options={{ headerShown: false }}
						>
							{() => <RegisterScreen setUser={setUser} />}
						</Stack.Screen>
					</>
				) : (
					<Stack.Screen
						name="Main"
						component={MyTabs}
						options={{ headerShown: false }}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const MyTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: "#50C878",
				tabBarInactiveTintColor: "#1e1e1e",
				tabBarStyle: {
					backgroundColor: "#DADFF7",
				},
				header: (props) => <Header {...props} />,
			}}
		>
			<Tab.Screen
				name="Adicionar"
				component={AddScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="add" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Historico"
				component={HistoryScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="newspaper" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
