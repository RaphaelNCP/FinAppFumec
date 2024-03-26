import { Dispatch } from "react";
import { View } from "react-native";
import { Button } from "../../../../Components/Button";
import { Title } from "../../../../Components/StyledComponents/Title";
import { styles } from "./OptionSelectStyle";

type OptionSelectProps = {
	typeValue: Dispatch<
		React.SetStateAction<string>
	>;
	value: string;
};

const isDisabled = (value: string): boolean => {
	return value === "gain" ? false : true;
};

export const OptionSelect = ({
	typeValue,
	value,
}: OptionSelectProps) => {
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
