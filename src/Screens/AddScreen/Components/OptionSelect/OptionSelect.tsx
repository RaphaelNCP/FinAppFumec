import { View } from "react-native";
import { Button } from "../../../../Components/Button";
import { Title } from "../../../../Components/StyledComponents/Title";
import { styles } from "../../AddScreenStyle";

export const OptionSelect = () => {
	return (
		<View style={styles.optionSelectContainer}>
			<Title>Selecione</Title>
			<View style={styles.optionSelect}>
				<Button text="Ganho" onPress={() => {}} />
				<Button
					text="Despesa"
					onPress={() => {}}
				/>
			</View>
		</View>
	);
};
