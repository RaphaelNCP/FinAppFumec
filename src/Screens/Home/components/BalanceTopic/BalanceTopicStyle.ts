import { StyleSheet } from "react-native";
import { boxWidth } from "../../../../Utils/Variables/WidthCalculate";

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
		color: "#DADFF7",
		fontSize: 18,
		marginLeft: 10,
		fontWeight: "300",
		width: "60%",
	},
	topicValue: {
		color: "#50C878",
		fontSize: 18,
		marginLeft: 10,
		fontWeight: "300",
	},
});
