import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../../Components/Button";
import { FormField } from "../../Components/FormField";
import { Container } from "../../Components/StyledComponents/Container";
import { Title } from "../../Components/StyledComponents/Title";
import { boxWidth } from "../../Utils/Variables/WidthCalculate";
import { styles } from "./RegisterScreenStyle";

export const RegisterScreen = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const isPasswordValid: boolean = password === confirmPassword;

	// const isFormValid = (
	// 	name: string,
	// 	email: string,
	// 	password: string
	// ) => {
	// 	if (
	// 		validName(name) &&
	// 		validEmail(email) &&
	// 		validPassword(password) &&
	// 		isPasswordValid
	// 	) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	// const validName = (username: string) => {
	// 	if (username.length < 4) {
	// 		return false;
	// 	}
	// 	return true;
	// };

	// const validEmail = (email: string) => {
	// 	const re = /\S+@\S+\.\S+/;
	// 	return re.test(email);
	// };

	// const validPassword = (password: string) => {
	// 	if (password.length < 6) {
	// 		return false;
	// 	}
	// 	return true;
	// };

	// const emptyFieldAlert = () => {
	// 	if (!isFormValid) {
	// 		return (
	// 			<Text style={styles.errorText}>
	// 				Preencha todos os campos corretamente
	// 			</Text>
	// 		);
	// 	}
	// };

	const renderPasswordError = () => {
		if (!isPasswordValid) {
			return (
				<Text style={styles.errorText}>As senhas não coincidem</Text>
			);
		}
	};

	return (
		<Container>
			<View style={styles.callContainer}>
				<Text style={styles.finAppText}>FinApp</Text>
				<Text style={styles.subtitle}>Seu controle financeiro</Text>
			</View>
			<KeyboardAwareScrollView>
				<Title>Cadastrar:</Title>
				<View style={styles.loginContainer}>
					<FormField
						title="Usuário"
						placeholder="Digite o seu nomer de usuário"
						value={username}
						onChange={setUsername}
					/>
					<FormField
						title="Email"
						placeholder="Digite o seu email"
						value={email}
						onChange={setEmail}
					/>
					<FormField
						title="Senha"
						isPassword
						placeholder="Digite sua senha"
						value={password}
						onChange={setPassword}
					/>
					{renderPasswordError()}
					<FormField
						title="Confirme a senha"
						isPassword
						placeholder="Digite a senha novamente"
						value={confirmPassword}
						onChange={setConfirmPassword}
					/>
				</View>
				<Button text="Realizar cadastro" width={boxWidth} />
				<View style={{ marginVertical: 30 }}>
					<Button text="Ja possuo cadastro" width={boxWidth} />
				</View>
			</KeyboardAwareScrollView>
		</Container>
	);
};
