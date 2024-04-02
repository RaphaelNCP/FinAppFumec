import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Container } from "../../Components/StyledComponents/Container";
import { AddForm } from "./Components/AddForm";
import { OptionSelect } from "./Components/OptionSelect";

export const AddScreen = () => {
	const [addType, setAddType] = useState<string>("gain");

	return (
		<Container>
			<StatusBar style="light" backgroundColor="black" />
			<OptionSelect typeValue={setAddType} value={addType} />
			<ScrollView>
				<AddForm addType={addType} />
			</ScrollView>
		</Container>
	);
};
