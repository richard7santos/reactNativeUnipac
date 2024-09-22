import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import DefaultInput from "../../components/DefaultInput";
import DefaultButton from "../../components/DefaultButton";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const loginUser = () => {
		const userEmail = "teste@gmail.com";
		const userPassword = "1234";
		if (userEmail === email && userPassword === senha) {
			console.warn("Logado com sucesso");
			props.navigation.navigate("Home");
		} else {
			console.warn("Usuário ou senha inválido");
		}
	};

	const homeStyle = StyleSheet.create({
		fundo: {
			backgroundColor: "#3306fc",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			gap: 20,
		},
		corTexto: {
			color: "#ffffff",
		},
		input: {
			backgroundColor: "#ffffff",
			width: 300,
			height: 35,
			padding: 10,
			borderRadius: 5,
		},
	});
	return (
		<View style={homeStyle.fundo}>
			<Avatar cor={"#1ffc06"} />
			<DefaultInput
				placeholder='Digite seu Email'
				change={(event) => setEmail(event)}
				value={email}
			/>
			<DefaultInput
				placeholder='Digite sua Senha'
				change={(event) => setSenha(event)}
				value={senha}
				keyType='numeric'
				secure
			/>
			<DefaultButton
				onPress={() => {
					loginUser();
				}}
				label='SALVAR'
				bg='#59ff00'
				txt='#060101'
			/>
			<DefaultButton
				onPress={() => {
					props.navigation.navigate("Registrar");
				}}
				label='REGISTRAR'
				txt='#fffcfc'
			/>
		</View>
	);
};
export default Login;
