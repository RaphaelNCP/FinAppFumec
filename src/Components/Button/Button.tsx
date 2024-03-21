import {
	Text,
	TouchableOpacity,
} from "react-native";
import { styles } from "./ButtonStyle";

type ButtonProps = {
	text: string;
	onPress: () => void;
	disabled?: boolean;
};

export const Button = ({
	text,
	onPress,
	disabled,
}: ButtonProps) => {
	return (
		<TouchableOpacity style={styles.button}>
			<Text style={styles.buttonText}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};
