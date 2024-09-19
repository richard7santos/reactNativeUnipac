import { Button, StyleSheet, Text, View } from "react-native";
import Avatar from "../../components/Avatar";

const Login = (props) => {
	const homeStyle = StyleSheet.create({
		fundo: {
			backgroundColor: "#3306fc",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		corTexto: {
			color: "#ffffff",
		},
	});
	return (
		<View style={homeStyle.fundo}>
			<Avatar cor={"#1ffc06"} />
			<Button
				title='Cadastre-se'
				color='#0800ff'
				onPress={() => {
					props.navigation.navigate("Registrar");
				}}
			/>
		</View>
	);
};
export default Login;
