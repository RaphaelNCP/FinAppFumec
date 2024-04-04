import { StyleSheet } from "react-native";
import { secondaryColor } from "../../../../Utils/Theme";

export const styles = StyleSheet.create({
	resumeBalance: {
		marginVertical: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	resumeBalanceText: {
		color: secondaryColor,
		fontSize: 18,
		marginLeft: 10,
		fontWeight: "300",
		alignItems: "flex-start",
	},
	BalanceTopics: {
		marginTop: 20,
		flexDirection: "column",
	},
});
