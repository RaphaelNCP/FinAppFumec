import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Container } from "../../Components/StyledComponents/Container";
import { Title } from "../../Components/StyledComponents/Title";
import { topicsData } from "../../Utils/Data/TopicsData";
import { styles } from "./HomeStyle";
import { BalanceTopic } from "./components/BalanceTopic";

export const Home = () => {
	return (
		<Container>
			<StatusBar
				style="light"
				backgroundColor="black"
			/>
			<View style={styles.monthlyBalanceVisor}>
				<Title>Saldo mensal</Title>
				<Text
					style={styles.monthlyBalanceValue}
					adjustsFontSizeToFit
					numberOfLines={1}
				>
					20.800,00 R$
				</Text>
			</View>
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
			<View style={styles.BalanceTopics}>
				{topicsData.map((topic, index) => (
					<BalanceTopic
						key={index}
						type={topic.type as "waste" | "gain"}
						title={topic.title}
						value={topic.value}
					/>
				))}
			</View>
		</Container>
	);
};
