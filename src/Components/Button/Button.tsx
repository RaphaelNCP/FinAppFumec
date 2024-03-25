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
	width = 120,
	height = 46,
}: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ width: width, height: height },
			]}
			onPress={onPress}
			disabled={disabled}
		>
			<Text style={styles.buttonText}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};
