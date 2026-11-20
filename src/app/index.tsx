import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Signup from "../app/signup"
import Login from "../app/login"
import Home from "../app/home"



const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="signup" component={Signup}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default HomeScreen;