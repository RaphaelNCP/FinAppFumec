import { StyleSheet } from "react-native";
import { primaryColor, tertiaryColor } from "../../Utils/Theme";

export const styles = StyleSheet.create({
	button: {
		backgroundColor: tertiaryColor,
		padding: 10,
		borderRadius: 50,
		alignItems: "center",
	},
	disabledButton: {
		backgroundColor: "grey",
		padding: 10,
		borderRadius: 50,
		alignItems: "center",
	},
	buttonText: {
		color: primaryColor,
		fontSize: 18,
	},
});
