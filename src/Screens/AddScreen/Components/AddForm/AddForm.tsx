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

	const handleChangeName = (name: string) => {
		setName(name);
	};

	const handleChangeDescription = (
		description: string
	) => {
		setDescription(description);
	};

	const handleChangeValue = (value: string) => {
		setValue(value);
	};

	const handleChangeCategory = (
		category: string
	) => {
		setCategory(category);
	};

	const categoryData =
		addType === "gain"
			? gainCategoryData.map((category) => ({
					label: category.label,
					value: category.value,
			  }))
			: wastCategoryData.map((category) => ({
					label: category.label,
					value: category.value,
			  }));

	return (
		<View>
			<FormField
				title="Nome:"
				onChange={handleChangeName}
				value={name}
			/>
			<FormField
				title="Descrição:"
				onChange={handleChangeDescription}
				value={description}
			/>
			<FormField
				title="Valor:"
				type="decimal-pad"
				onChange={handleChangeValue}
				value={value}
			/>
			<View style={styles.pickerContainer}>
				<Text style={styles.formPickerTitle}>
					Categoria:
				</Text>
				<View style={styles.picker}>
					<RNPickerSelect
						onValueChange={handleChangeCategory}
						value={category}
						placeholder={{
							label: "Selecione a categoria",
							value: null,
							color: "#000",
						}}
						items={categoryData}
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
