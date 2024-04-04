import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { DateType } from "react-native-ui-datepicker";
import { Button } from "../../../../Components/Button";
import { FormField } from "../../../../Components/FormField";
import {
	gainCategoryData,
	wastCategoryData,
} from "../../../../Utils/Data/CategoryData";
import { AddFormProps } from "../../../../Utils/Types/AddFormProps";
import { boxWidth } from "../../../../Utils/Variables/WidthCalculate";
import { auth, db } from "../../../../services/firebaseConfig";
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

	// const register = async () => {
	// 	const userId = auth.currentUser?.uid;
	// 	if (!userId) return alert("Usuário não encontrado");
	// 	await setDoc(doc(db, "transactions", userId), {
	// 		date: date,
	// 		name: name,
	// 		description: description,
	// 		value: value,
	// 		category: category,
	// 		transactionType: addType,
	// 	});
	// };

	const NameFormmater = (name: string): string => {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		return name;
	};

	const DescriptionFormmater = (description: string): string => {
		description =
			description.charAt(0).toUpperCase() + description.slice(1);
		return description;
	};

	const ValueFormmater = (value: string): string => {
		value = parseFloat(value).toFixed(2);
		value = value.toString();
		return value;
	};

	return (
		<KeyboardAwareScrollView>
			<FormField title="Nome:" set={setName} value={name} />
			<FormField
				title="Descrição:"
				set={setDescription}
				value={description}
			/>
			<FormField
				title="Valor:"
				type="decimal-pad"
				set={setValue}
				value={value}
			/>
			<CategoryPicker
				category={category}
				setCategory={setCategory}
				categoryData={categoryData}
			/>
			<DatePicker date={date} setDate={setDate} />
			<Button
				text="Adicionar"
				// onPress={() => register()}
				width={boxWidth}
			/>
		</KeyboardAwareScrollView>
	);
};
