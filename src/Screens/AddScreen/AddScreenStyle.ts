import { StyleSheet } from "react-native";
import {
	boxWidth,
	screenWidth,
} from "../../Utils/Variables/WidthCalculate";

export const styles = StyleSheet.create({
	optionSelectContainer: {
		marginTop: 5,
		alignItems: "flex-start",
		flexDirection: "column",
	},
	optionSelect: {
		marginTop: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		width: screenWidth * 0.86,
	},
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
	container: {
		flex: 1,
		backgroundColor: "#DADFF7",
		alignItems: "center",
		borderRadius: 10,
		overflow: "hidden",
		padding: 10,
		marginBottom: 40,
		width: boxWidth,
	},
});
