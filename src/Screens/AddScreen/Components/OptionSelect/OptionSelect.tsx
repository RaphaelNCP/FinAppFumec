import { Dispatch } from "react";
import { View } from "react-native";
import { Button } from "../../../../Components/Button";
import { Title } from "../../../../Components/StyledComponents/Title";
import { styles } from "../../AddScreenStyle";

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
					disabled={isDisabled(value)}
				/>
				<Button
					text="Despesa"
					onPress={() => {
						typeValue("waste");
					}}
					disabled={isDisabled(value)}
				/>
			</View>
		</View>
	);
};
