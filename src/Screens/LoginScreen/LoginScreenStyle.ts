import { StyleSheet } from "react-native";
import { secondaryColor, tertiaryColor } from "../../Utils/Theme";
import { boxWidth } from "../../Utils/Variables/WidthCalculate";

export const styles = StyleSheet.create({
	callContainer: {
		alignItems: "flex-start",
		width: boxWidth,
		marginVertical: 50,
		borderLeftWidth: 5,
		borderColor: tertiaryColor,
		paddingLeft: 12,
	},
	finAppText: {
		fontSize: 70,
		fontWeight: "bold",
		color: tertiaryColor,
	},
	subtitle: {
		fontSize: 20,
		color: secondaryColor,
	},
	loginContainer: {
		marginBottom: 40,
	},
	errorText: {
		color: "red",
		fontSize: 12,
	},
});
