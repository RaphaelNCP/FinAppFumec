import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/StyledComponents/Container";
import { AddForm } from "./Components/AddForm/AddForm";
import { OptionSelect } from "./Components/OptionSelect/OptionSelect";

export const AddScreen = () => {
	const [selectedDate, setSelectedDate] =
		useState<string>("");

	const [addType, setAddType] =
		useState<string>("gain");

	return (
		<Container>
			<StatusBar
				style="light"
				backgroundColor="black"
			/>
			<OptionSelect />
			<ScrollView>
				<AddForm addType={addType} />
				<Button text="Adicionar" width={300} />
			</ScrollView>
		</Container>
	);
};
