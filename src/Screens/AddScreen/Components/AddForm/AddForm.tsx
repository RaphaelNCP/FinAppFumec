import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { DateType } from "react-native-ui-datepicker";
import { FormField } from "../../../../Components/FormField";
import {
	gainCategoryData,
	wastCategoryData,
} from "../../../../Utils/Data/CategoryData";
import { AddFormProps } from "../../../../Utils/Types/AddFormProps";
import { CategoryPicker } from "../CategoryPicker/CategoryPicker";
import { DatePicker } from "../DatePicker";

export const AddForm = ({ addType }: AddFormProps) => {
	const [date, setDate] = useState<DateType>(new Date());
	const [name, setName] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [value, setValue] = useState<string>("");
	const [category, setCategory] = useState<string>("");

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
		<KeyboardAwareScrollView>
			<FormField title="Nome:" onChange={setName} value={name} />
			<FormField
				title="Descrição:"
				onChange={setDescription}
				value={description}
			/>
			<FormField
				title="Valor:"
				type="decimal-pad"
				onChange={setValue}
				value={value}
			/>
			<CategoryPicker
				category={category}
				setCategory={setCategory}
				categoryData={categoryData}
			/>
			<DatePicker date={date} setDate={setDate} />
		</KeyboardAwareScrollView>
	);
};
