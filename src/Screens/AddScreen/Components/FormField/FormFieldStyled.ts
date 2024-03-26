import { StyleSheet } from "react-native";
import { boxWidth } from "../../../../Utils/Variables/WidthCalculate";

export const styles = StyleSheet.create({
	formFieldContainer: {
		marginTop: 26,
	},
	formTitle: {
		fontSize: 18,
		fontWeight: "300",
		color: "#DADFF7",
		marginBottom: 10,
	},
	formField: {
		width: boxWidth,
		height: 50,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#DADFF7",
		padding: 14,
	},
});
