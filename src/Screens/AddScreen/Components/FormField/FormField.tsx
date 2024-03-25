import {
	Text,
	TextInput,
	View,
} from "react-native";
import { FormFieldProps } from "../../../../Utils/Types/FormField";
import { styles } from "./FormFieldStyled";

export const FormField = ({
	title,
	type = "default",
	value,
	onChange,
}: FormFieldProps) => {
	const handleChange = (text: string) => {
		if (onChange) {
			onChange(text);
		}
	};

	return (
		<View style={styles.formFieldContainer}>
			<Text style={styles.formTitle}>
				{title}
			</Text>
			<TextInput
				style={styles.formField}
				keyboardType={type}
				value={value}
				onChange={(e) =>
					handleChange(e.nativeEvent.text)
				}
			/>
		</View>
	);
};
