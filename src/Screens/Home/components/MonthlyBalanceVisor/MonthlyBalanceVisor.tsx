import { Text, View } from "react-native";
import { Title } from "../../../../Components/StyledComponents/Title";
import { styles } from "./MonthlyBalanceVisorStyle";

export const MonthlyBalanceVisor = () => {
	return (
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
	);
};
