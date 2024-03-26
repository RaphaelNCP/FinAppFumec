import { StyleSheet } from "react-native";
import { boxWidth } from "../../../../Utils/Variables/WidthCalculate";

export const styles = StyleSheet.create({
	pickerContainer: {
		marginTop: 26,
	},
	formPickerTitle: {
		fontSize: 18,
		fontWeight: "300",
		color: "#DADFF7",
		marginBottom: 10,
	},
	picker: {
		marginTop: 0,
		marginVertical: 40,
		width: boxWidth,
		borderRadius: 10,
		overflow: "hidden",
		backgroundColor: "#DADFF7",
		color: "#000",
	},
});
