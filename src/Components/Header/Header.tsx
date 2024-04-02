import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { styles } from "./HeaderStyle";

export const Header = ({
	navigation,
	route,
}: BottomTabHeaderProps) => {
	return (
		<View style={styles.callContainer}>
			<Text style={styles.finAppText}>FinApp</Text>
		</View>
	);
};
