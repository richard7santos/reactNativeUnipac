import { StyleSheet } from "react-native";
import Avatar from "./src/components/Avatar";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
	return (
		<SafeAreaView style={styleApp.telaVermelha}>
			<Avatar cor={"#7B68EE"} />
			<Avatar cor={"#00FF00"} />
			<Avatar cor={"#FF1493"} />
		</SafeAreaView>
	);
};
const styleApp = StyleSheet.create({
	telaVermelha: {
		backgroundColor: "#FF0000",
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default App;
