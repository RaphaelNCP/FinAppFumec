import { StyleSheet } from "react-native";
import { boxWidth } from "../../../../Utils/Variables/WidthCalculate";
import {
	secondaryColor,
	tertiaryColor,
} from "../../../../Utils/Theme";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginRight: 30,
		marginTop: 20,
		alignItems: "center",
	},
	topicContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: boxWidth * 0.9,
	},
	topicText: {
		color: secondaryColor,
		fontSize: 18,
		marginLeft: 10,
		fontWeight: "300",
		width: "60%",
	},
	topicValue: {
		color: tertiaryColor,
		fontSize: 18,
		marginLeft: 10,
		fontWeight: "300",
	},
});
