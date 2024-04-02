import { StyleSheet } from "react-native";
import { boxWidth } from "../../Utils/Variables/WidthCalculate";

export const styles = StyleSheet.create({
	callContainer: {
		alignItems: "flex-start",
		width: boxWidth,
		marginVertical: 50,
		borderLeftWidth: 5,
		borderColor: "#50C878",
		paddingLeft: 12,
	},
	finAppText: {
		fontSize: 70,
		fontWeight: "bold",
		color: "#50C878",
	},
	subtitle: {
		fontSize: 20,
		color: "#DADFF7",
	},
	loginContainer: {
		marginBottom: 40,
	},
	errorText: {
		color: "red",
		fontSize: 12,
	},
});
