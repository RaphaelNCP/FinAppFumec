export type FormFieldProps = {
	title: string;
	type?: "default" | "decimal-pad";
	value?: string;
	onChange?: (value: string) => void;
};
