import {
	Text,
	TouchableOpacity,
} from "react-native";
import { ButtonProps } from "../../Utils/Types/ButtonProps";
import { styles } from "./ButtonStyle";

export const Button = ({
	text,
	onPress,
	disabled,
}: ButtonProps) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress}
			disabled={disabled}
		>
			<Text style={styles.buttonText}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};
