import { useState } from "react";
import { Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker, {
	DateType,
} from "react-native-ui-datepicker";
import {
	gainCategoryData,
	wastCategoryData,
} from "../../../../Utils/Data/CategoryData";
import { AddFormProps } from "../../../../Utils/Types/AddFormProps";
import { styles } from "../../AddScreenStyle";
import { FormField } from "../FormField";

export const AddForm = ({
	addType,
}: AddFormProps) => {
	const [date, setDate] = useState<DateType>(
		new Date()
	);
	const [name, setName] = useState<string>("");
	const [description, setDescription] =
		useState<string>("");
	const [value, setValue] = useState<string>("");
	const [category, setCategory] =
		useState<string>("");

	return (
		<View>
			<FormField
				title="Nome:"
				onChange={(name) => setName(name)}
				value={name}
			/>
			<FormField
				title="Descrição:"
				onChange={(description) =>
					setDescription(description)
				}
				value={description}
			/>
			<FormField
				title="Valor:"
				type="decimal-pad"
				onChange={(value) => setValue(value)}
				value={value}
			/>
			<View style={styles.pickerContainer}>
				<Text style={styles.formPickerTitle}>
					Categoria:
				</Text>
				<View style={styles.picker}>
					<RNPickerSelect
						onValueChange={(category) =>
							setCategory(category)
						}
						value={category}
						placeholder={{
							label: "Selecione a categoria",
							value: null,
							color: "#000",
						}}
						items={
							addType === "gain"
								? gainCategoryData.map(
										(category) => ({
											label: category.label,
											value: category.value,
										})
								  )
								: wastCategoryData.map(
										(category) => ({
											label: category.label,
											value: category.value,
										})
								  )
						}
					/>
				</View>
			</View>
			<View>
				<Text style={styles.formPickerTitle}>
					Data:
				</Text>
				<View style={styles.container}>
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
		</View>
	);
};
