import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../../Components/Button";
import { FormField } from "../../Components/FormField";
import { Container } from "../../Components/StyledComponents/Container";
import { Title } from "../../Components/StyledComponents/Title";
import { boxWidth } from "../../Utils/Variables/WidthCalculate";
import { styles } from "./LoginScreenStyle";

export const LoginScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (text: string) => {
		setUsername(text);
	};

	const handlePasswordChange = (text: string) => {
		setPassword(text);
	};

	return (
		<Container>
			<View style={styles.callContainer}>
				<Text style={styles.finAppText}>FinApp</Text>
				<Text style={styles.subtitle}>Seu controle financeiro</Text>
			</View>
			<KeyboardAwareScrollView>
				<Title>Login:</Title>
				<View style={styles.loginContainer}>
					<FormField
						title="Usuário"
						value={username}
						onChange={handleUsernameChange}
					/>
					<FormField
						title="Senha"
						isPassword
						value={password}
						onChange={handlePasswordChange}
					/>
				</View>
				<Button text="Fazer Login" width={boxWidth} />
			</KeyboardAwareScrollView>
		</Container>
	);
};
