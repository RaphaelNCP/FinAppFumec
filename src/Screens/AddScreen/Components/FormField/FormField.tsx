import {
	Text,
	TextInput,
	View,
} from "react-native";
import { FormFieldProps } from "../../../../Utils/Types/FormField";
import { styles } from "./FormFieldStyled";

export const FormField = ({
	title,
}: FormFieldProps) => {
	return (
		<View style={styles.formFieldContainer}>
			<Text style={styles.formTitle}>
				{title}
			</Text>
			<TextInput style={styles.formField} />
		</View>
	);
};
