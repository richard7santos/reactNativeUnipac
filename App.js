import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import AuthStack from "./src/routes/AuthStack";

const App = () => {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName='Auth'
				screenOptions={{ headerShown: false }}>
				<Tab.Screen name='Auth' component={AuthStack} />
				<Tab.Screen name='Home' component={Home} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
