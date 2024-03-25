import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	ScrollView,
	Text,
	View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker, {
	DateType,
} from "react-native-ui-datepicker";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/StyledComponents/Container";
import { Title } from "../../Components/StyledComponents/Title";
import { styles } from "./AddScreenStyle";
import { FormField } from "./Components/FormField";

export const AddScreen = () => {
	const [selectedDate, setSelectedDate] =
		useState<string>("");
	const [date, setDate] = useState<DateType>(
		new Date()
	);

	return (
		<Container>
			<StatusBar
				style="light"
				backgroundColor="black"
			/>
			<View style={styles.optionSelectContainer}>
				<Title>Selecione</Title>
				<View style={styles.optionSelect}>
					<Button
						text="Ganho"
						onPress={() => {}}
					/>
					<Button
						text="Despesa"
						onPress={() => {}}
					/>
				</View>
			</View>
			<ScrollView>
				<FormField title="Nome do gasto:" />
				<FormField title="Descrição:" />
				<FormField
					title="Valor:"
					type="decimal-pad"
				/>
				<View style={styles.pickerContainer}>
					<Text style={styles.formPickerTitle}>
						Categoria:
					</Text>
					<View style={styles.picker}>
						<RNPickerSelect
							onValueChange={(value) =>
								console.log(value)
							}
							placeholder={{
								label: "Selecione a categoria",
								value: null,
								color: "#000",
							}}
							items={[
								{
									label: "Football",
									value: "football",
								},
								{
									label: "Baseball",
									value: "baseball",
								},
								{
									label: "Hockey",
									value: "hockey",
								},
							]}
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
							locale="pt-BR"
							onChange={(date) => {
								setDate(date.date);
							}}
						/>
					</View>
				</View>
				<View>
					<Button text="Adicionar" width={300} />
				</View>
			</ScrollView>
		</Container>
	);
};
