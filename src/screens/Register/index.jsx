import { StyleSheet, Text, View } from "react-native";
import Avatar from "../../components/Avatar";

const Register = () => {
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
			<Text style={homeStyle.corTexto}>Página de Registro</Text>
		</View>
	);
};
export default Register;
