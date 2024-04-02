import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../../Components/Button";
import { FormField } from "../../Components/FormField";
import { Container } from "../../Components/StyledComponents/Container";
import { Title } from "../../Components/StyledComponents/Title";
import { AuthType } from "../../Utils/Types/AuthType";
import { boxWidth } from "../../Utils/Variables/WidthCalculate";
import { auth } from "../../services/firebaseConfig";
import { styles } from "./RegisterScreenStyle";

export const RegisterScreen = ({ setUser }: AuthType) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const navigation = useNavigation();

	const handleRegister = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				setUser(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorCode);
			});
	};

	const emailAlreadyInUse = () => {
		if (error === "auth/email-already-in-use") {
			return (
				<Text style={styles.errorText}>
					O email informado já está em uso
				</Text>
			);
		}
	};

	const passwordError = () => {
		if (error === "auth/weak-password") {
			return (
				<Text style={styles.errorText}>
					A senha deve ter no mínimo 6 caracteres
				</Text>
			);
		}
	};

	const emailInvalid = () => {
		if (error === "auth/invalid-email") {
			return (
				<Text style={styles.errorText}>
					O email informado é inválido
				</Text>
			);
		}
	};

	const isUsernameValid: boolean = username.length > 2;

	const userError = () => {
		if (!isUsernameValid) {
			return (
				<Text style={styles.errorText}>
					O nome de usuário deve ter no mínimo 3 caracteres
				</Text>
			);
		}
	};

	const isPasswordValid: boolean = password === confirmPassword;

	const passwordNoMatch = () => {
		if (!isPasswordValid) {
			return (
				<Text style={styles.errorText}>As senhas não coincidem</Text>
			);
		}
	};

	const handleNavigateToLogin = () => {
		navigation.navigate("Login" as never);
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
						set={setUsername}
					/>
					{userError()}
					<FormField
						title="Email"
						placeholder="Digite o seu email"
						value={email}
						set={setEmail}
					/>
					{emailInvalid()}
					{emailAlreadyInUse()}
					<FormField
						title="Senha"
						isPassword
						placeholder="Digite sua senha"
						value={password}
						set={setPassword}
					/>
					{passwordError()}
					{passwordNoMatch()}
					<FormField
						title="Confirme a senha"
						isPassword
						placeholder="Digite a senha novamente"
						value={confirmPassword}
						set={setConfirmPassword}
					/>
				</View>
				<Button
					text="Realizar cadastro"
					onPress={() => handleRegister()}
					width={boxWidth}
				/>
				<View style={{ marginVertical: 30 }}>
					<Button
						text="Ja possuo cadastro"
						onPress={handleNavigateToLogin}
						width={boxWidth}
					/>
				</View>
			</KeyboardAwareScrollView>
		</Container>
	);
};
