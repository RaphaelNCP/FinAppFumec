import { StyleSheet } from "react-native";
import { tertiaryColor } from "../../../../Utils/Theme";

export const styles = StyleSheet.create({
	monthlyBalanceVisor: {
		marginTop: 10,
		flexDirection: "column",
	},
	monthlyBalanceValue: {
		fontSize: 40,
		color: tertiaryColor,
		fontWeight: "bold",
		flexWrap: "wrap",
	},
});
