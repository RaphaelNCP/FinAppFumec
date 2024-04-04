import { StyleSheet } from "react-native";
import { boxWidth } from "../../../../Utils/Variables/WidthCalculate";
import { secondaryColor } from "../../../../Utils/Theme";

export const styles = StyleSheet.create({
	DatePickerTitle: {
		fontSize: 18,
		fontWeight: "300",
		color: secondaryColor,
		marginBottom: 10,
	},
	DatePickerContainer: {
		flex: 1,
		backgroundColor: secondaryColor,
		alignItems: "center",
		borderRadius: 10,
		overflow: "hidden",
		padding: 10,
		marginBottom: 40,
		width: boxWidth,
	},
});
