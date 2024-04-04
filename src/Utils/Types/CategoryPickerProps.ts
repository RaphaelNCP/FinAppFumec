export type CategoryPickerProps = {
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
	categoryData: {
		label: string;
		value: string;
	}[];
	id: number;
};
