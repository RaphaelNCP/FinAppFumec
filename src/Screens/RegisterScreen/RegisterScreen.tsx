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

	const handleUsernameChange = (text: string) => {
		setUsername(text);
	};

	const handleEmailChange = (text: string) => {
		setEmail(text);
	};

	const handlePasswordChange = (text: string) => {
		setPassword(text);
	};

	const handleConfirmPasswordChange = (text: string) => {
		setConfirmPassword(text);
	};

	const isPasswordValid: boolean = password === confirmPassword;

	const isFormValid: boolean =
		username && email && password && isPasswordValid ? true : false;

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
						onChange={handleUsernameChange}
					/>
					<FormField
						title="Email"
						placeholder="Digite o seu email"
						value={email}
						onChange={handleEmailChange}
					/>
					<FormField
						title="Senha"
						isPassword
						placeholder="Digite sua senha"
						value={password}
						onChange={handlePasswordChange}
					/>
					{renderPasswordError()}
					<FormField
						title="Confirme a senha"
						isPassword
						placeholder="Digite a senha novamente"
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
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
