import { Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { CategoryPickerProps } from "../../../../Utils/Types/CategoryPickerProps";
import { styles } from "./CategoryPickerStyle";

export const CategoryPicker = ({
	category,
	setCategory,
	categoryData,
	id,
}: CategoryPickerProps) => {
	const handleChangeCategory = (value: string) => {
		setCategory(value);
	};

	return (
		<View style={styles.pickerContainer}>
			<Text style={styles.formPickerTitle}>Categoria:</Text>
			<View style={styles.picker}>
				<RNPickerSelect
					key={id}
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
