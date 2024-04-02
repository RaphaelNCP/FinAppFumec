import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../../Components/Button";
import { FormField } from "../../Components/FormField";
import { Container } from "../../Components/StyledComponents/Container";
import { Title } from "../../Components/StyledComponents/Title";
import { AuthType } from "../../Utils/Types/AuthType";
import { boxWidth } from "../../Utils/Variables/WidthCalculate";
import { styles } from "./LoginScreenStyle";

export const LoginScreen = ({ setUser }: AuthType) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigation = useNavigation();

	const handleLogin = () => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				setUser(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorCode);
			});
	};

	const userNotFound = () => {
		if (
			error === "auth/user-not-found" ||
			error === "auth/wrong-password" ||
			error === "auth/invalid-email"
		) {
			return (
				<Text style={styles.errorText}>Email ou senha inválidos</Text>
			);
		}
	};

	const handleNavigationRegister = () => {
		navigation.navigate("Register" as never);
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
					<FormField title="Email" value={email} set={setEmail} />
					{userNotFound()}
					<FormField
						title="Senha"
						isPassword
						value={password}
						set={setPassword}
					/>
				</View>
				<Button
					text="Fazer Login"
					onPress={() => handleLogin()}
					width={boxWidth}
				/>
				<View style={{ marginVertical: 30 }}>
					<Button
						text="Quero me registrar"
						onPress={handleNavigationRegister}
						width={boxWidth}
					/>
				</View>
			</KeyboardAwareScrollView>
		</Container>
	);
};
