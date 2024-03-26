import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/StyledComponents/Container";
import { boxWidth } from "../../Utils/Variables/WidthCalculate";
import { AddForm } from "./Components/AddForm";
import { OptionSelect } from "./Components/OptionSelect";

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
				<Button
					text="Adicionar"
					width={boxWidth}
				/>
			</ScrollView>
		</Container>
	);
};
