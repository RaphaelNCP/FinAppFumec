import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/StyledComponents/Container";
import { Title } from "../../Components/StyledComponents/Title";
import { styles } from "./AddScreenStyle";

export const AddScreen = () => {
	return (
		<Container>
			<StatusBar
				style="light"
				backgroundColor="black"
			/>
			<View style={styles.optionSelectContainer}>
				<Title>Selecione</Title>
				<View style={styles.optionSelect}>
					<Button
						text="Ganho"
						onPress={() => {}}
					/>
					<Button
						text="Despesa"
						onPress={() => {}}
					/>
				</View>
			</View>
		</Container>
	);
};
