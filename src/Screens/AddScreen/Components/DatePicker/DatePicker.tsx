import { Text, View } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import { DatePickerProps } from "../../../../Utils/Types/DatePickerProps";
import { styles } from "./DatePickerStyle";

export const DatePicker = ({
	date,
	setDate,
}: DatePickerProps) => {
	return (
		<View>
			<Text style={styles.DatePickerTitle}>
				Data:
			</Text>
			<View style={styles.DatePickerContainer}>
				<DateTimePicker
					mode="single"
					date={date}
					selectedItemColor="#50C878"
					locale="pt-BR"
					onChange={(date) => {
						setDate(date.date);
					}}
				/>
			</View>
		</View>
	);
};
