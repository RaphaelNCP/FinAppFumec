import { useState } from "react";
import { View } from "react-native";
import { DateType } from "react-native-ui-datepicker";
import {
	gainCategoryData,
	wastCategoryData,
} from "../../../../Utils/Data/CategoryData";
import { AddFormProps } from "../../../../Utils/Types/AddFormProps";
import { CategoryPicker } from "../CategoryPicker/CategoryPicker";
import { DatePicker } from "../DatePicker";
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
			<CategoryPicker
				category={category}
				setCategory={setCategory}
				categoryData={categoryData}
			/>
			<DatePicker date={date} setDate={setDate} />
		</View>
	);
};
