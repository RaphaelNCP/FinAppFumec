import { StyleSheet } from "react-native";
import { boxWidth } from "../../../../Utils/Variables/WidthCalculate";

export const styles = StyleSheet.create({
	historyCard: {
		width: boxWidth,
		height: 150,
		backgroundColor: "#DADFF7",
		borderRadius: 10,
		marginTop: 26,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
	},
	cardContent: {
		flex: 1,
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 5,
	},
	descriptionText: {
		marginBottom: 10,
	},
	valueText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	cardActions: {
		flexDirection: "row",
	},
	actionButton: {
		marginLeft: 10,
	},
});
