import { KeyboardTypeOptions } from "react-native";

export type FormFieldProps = {
	title: string;
	placeholder?: string;
	type?: KeyboardTypeOptions;
	value?: string;
	onChange?: (value: string) => void;
	isPassword?: boolean;
	set?: React.Dispatch<React.SetStateAction<string>>;
};
