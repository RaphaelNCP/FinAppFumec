import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { BalanceTopicProps } from "../../../../Utils/Types/BalanceTopicPros";
import { styles } from "./BalanceTopicStyle";

export const BalanceTopic = ({
	type,
	title,
	value,
}: BalanceTopicProps) => {
	return (
		<View style={styles.container}>
			<Ionicons
				name="radio-button-on"
				size={21}
				{...(type === "waste"
					? { color: "#FF0000" }
					: { color: "#50C878" })}
			/>
			<View style={styles.topicContainer}>
				<Text style={styles.topicText}>
					{title}
				</Text>
				<Text style={styles.topicValue}>
					{value} R$
				</Text>
			</View>
		</View>
	);
};
