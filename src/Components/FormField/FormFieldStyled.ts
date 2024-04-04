import { StyleSheet } from "react-native";
import { secondaryColor } from "../../Utils/Theme";
import { boxWidth } from "../../Utils/Variables/WidthCalculate";

export const styles = StyleSheet.create({
	formFieldContainer: {
		marginTop: 26,
	},
	formTitle: {
		fontSize: 18,
		fontWeight: "300",
		color: secondaryColor,
		marginBottom: 10,
		marginRight: 10,
	},
	formField: {
		width: boxWidth,
		height: 50,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: secondaryColor,
		padding: 14,
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: boxWidth,
		paddingRight: 10,
	},
});
