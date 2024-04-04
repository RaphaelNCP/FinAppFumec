import { StatusBar, StyleSheet } from "react-native";
import { primaryColor, tertiaryColor } from "../../Utils/Theme";

export const styles = StyleSheet.create({
	callContainer: {
		backgroundColor: primaryColor,
		padding: 10,
		marginTop: StatusBar.currentHeight,
		borderLeftWidth: 15,
		borderColor: tertiaryColor,
	},
	finAppText: {
		fontSize: 30,
		fontWeight: "bold",
		color: tertiaryColor,
	},
});
