import { Ionicons } from "@expo/vector-icons";
import {
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { topicsData } from "../../../../Utils/Data/TopicsData";
import { BalanceTopic } from "../BalanceTopic/BalanceTopic";
import { styles } from "./BalanceTopicsVisorStyle";

export const BalanceTopicsVisor = () => {
	return (
		<ScrollView style={styles.BalanceTopics}>
			<View style={styles.resumeBalance}>
				<TouchableOpacity>
					<Ionicons
						name="help-circle"
						size={21}
						color="#50C878"
					/>
				</TouchableOpacity>
				<Text style={styles.resumeBalanceText}>
					Resumo de gastos mensais:
				</Text>
			</View>
			{topicsData.map((topic, index) => (
				<BalanceTopic
					key={index}
					type={topic.type as "waste" | "gain"}
					title={topic.title}
					value={topic.value}
				/>
			))}
		</ScrollView>
	);
};
