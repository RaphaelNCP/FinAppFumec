import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/StyledComponents/Container";
import { AddForm } from "./Components/AddForm/AddForm";
import { OptionSelect } from "./Components/OptionSelect/OptionSelect";

export const AddScreen = () => {
	const [addType, setAddType] =
		useState<string>("gain");

	return (
		<Container>
			<StatusBar
				style="light"
				backgroundColor="black"
			/>
			<OptionSelect
				typeValue={setAddType}
				value={addType}
			/>
			<ScrollView>
				<AddForm addType={addType} />
				<Button text="Adicionar" width={300} />
			</ScrollView>
		</Container>
	);
};
