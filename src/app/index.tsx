import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Signup from "../app/signup"
import Login from "../app/login"



const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="signup" component={Signup} options={{headerStyle: false}}/>
        <Stack.Screen name="login" component={Login} options={{headerStyle: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default HomeScreen;