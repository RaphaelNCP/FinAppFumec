import { KeyboardTypeOptions } from "react-native";

export type FormFieldProps = {
	title: string;
	type?: KeyboardTypeOptions;
	value?: string;
	onChange?: (value: string) => void;
	isPassword?: boolean;
};
