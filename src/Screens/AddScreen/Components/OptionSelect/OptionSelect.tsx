import { View } from "react-native";
import { Button } from "../../../../Components/Button";
import { Title } from "../../../../Components/StyledComponents/Title";
import { OptionSelectProps } from "../../../../Utils/Types/OptionSelectProps";
import { styles } from "./OptionSelectStyle";

export const OptionSelect = ({
	typeValue,
	value,
}: OptionSelectProps) => {
	const isDisabled = (value: string): boolean => {
		return value === "gain" ? false : true;
	};

	return (
		<View style={styles.optionSelectContainer}>
			<Title>Selecione</Title>
			<View style={styles.optionSelect}>
				<Button
					text="Ganho"
					onPress={() => {
						typeValue("gain");
					}}
					isDisabled={isDisabled(value)}
				/>
				<Button
					text="Despesa"
					onPress={() => {
						typeValue("waste");
					}}
					isDisabled={!isDisabled(value)}
				/>
			</View>
		</View>
	);
};
