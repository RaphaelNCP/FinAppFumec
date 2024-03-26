import { StyleSheet } from "react-native";
import { boxWidth } from "../../../../Utils/Variables/WidthCalculate";

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
		width: boxWidth,
	},
});
