import { Ionicons } from "@expo/vector-icons";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./HeaderStyle";

export const Header = ({
	navigation,
	route,
}: BottomTabHeaderProps) => {
	const navigations = useNavigation();

	// const logout = () => {
	// 	auth.signOut();
	// 	navigations.navigate("Login" as never);
	// };

	return (
		<View style={styles.callContainer}>
			<Text style={styles.finAppText}>FinApp</Text>
			<TouchableOpacity>
				<Ionicons name="log-out" size={24} color="#831010" />
			</TouchableOpacity>
		</View>
	);
};
