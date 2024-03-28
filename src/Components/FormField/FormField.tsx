import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { FormFieldProps } from "../../Utils/Types/FormField";
import { styles } from "./FormFieldStyled";

export const FormField = ({
	title,
	type = "default",
	value,
	isPassword = false,
	placeholder,
	set,
}: FormFieldProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const handle = (
		text: string,
		set: React.Dispatch<React.SetStateAction<string>>
	) => {
		set(text);
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const renderEyeIcon = () => {
		if (isPassword) {
			return (
				<TouchableOpacity onPress={toggleShowPassword}>
					<Ionicons
						name={showPassword ? "eye" : "eye-off"}
						size={24}
						color="#DADFF7"
					/>
				</TouchableOpacity>
			);
		}
		return null;
	};

	return (
		<View style={styles.formFieldContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.formTitle}>{title}</Text>
				{renderEyeIcon()}
			</View>
			<TextInput
				style={styles.formField}
				keyboardType={type}
				placeholder={placeholder}
				value={value}
				secureTextEntry={!showPassword && isPassword}
				onChange={(e) => handle(e.nativeEvent.text, set!)}
			/>
		</View>
	);
};
