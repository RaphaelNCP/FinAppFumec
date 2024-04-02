import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	callContainer: {
		backgroundColor: "#1e1e1e",
		padding: 10,
		marginTop: StatusBar.currentHeight,
		borderLeftWidth: 15,
		borderColor: "#50C878",
	},
	finAppText: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#50C878",
	},
});
