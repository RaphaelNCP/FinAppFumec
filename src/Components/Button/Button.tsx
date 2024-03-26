import {
	Text,
	TouchableOpacity,
} from "react-native";
import { ButtonProps } from "../../Utils/Types/ButtonProps";
import { styles } from "./ButtonStyle";

export const Button = ({
	text,
	onPress,
	width = 120,
	height = 46,
	isDisabled,
}: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[
				{ width: width, height: height },
				isDisabled
					? styles.disabledButton
					: styles.button,
			]}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};
