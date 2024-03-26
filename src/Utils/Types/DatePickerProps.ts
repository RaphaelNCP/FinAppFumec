import { DateType } from "react-native-ui-datepicker";

export type DatePickerProps = {
	date: DateType;
	setDate: React.Dispatch<
		React.SetStateAction<DateType>
	>;
};
