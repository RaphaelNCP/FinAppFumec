import { Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { styles } from "./CategoryPickerStyle";
import { CategoryPickerProps } from "../../../../Utils/Types/CategoryPickerProps";

export const CategoryPicker = ({
	category,
	setCategory,
	categoryData,
}: CategoryPickerProps) => {
	const handleChangeCategory = (
		category: string
	) => {
		setCategory(category);
	};

	return (
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
	);
};
