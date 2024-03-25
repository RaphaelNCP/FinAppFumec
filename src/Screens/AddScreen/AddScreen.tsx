import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/StyledComponents/Container";
import { Title } from "../../Components/StyledComponents/Title";
import { styles } from "./AddScreenStyle";
import { FormField } from "./Components/FormField";

export const AddScreen = () => {
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
			<View>
				<FormField title="Nome do gasto:" />
				<FormField title="Descrição:" />
				<FormField title="Valor:" />
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
		</Container>
	);
};
