import { StatusBar } from "expo-status-bar";
import { Container } from "../../Components/StyledComponents/Container";
import { BalanceTopicsVisor } from "./components/BalanceTopicVisor";
import { MonthlyBalanceVisor } from "./components/MonthlyBalanceVisor";

export const Home = () => {
	return (
		<Container>
			<StatusBar
				style="light"
				backgroundColor="black"
			/>
			<MonthlyBalanceVisor />
			<BalanceTopicsVisor />
		</Container>
	);
};
