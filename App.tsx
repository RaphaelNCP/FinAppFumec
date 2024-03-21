import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./src/Navigation/Navigation";

export default function App() {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
}
