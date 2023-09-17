import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "./LandingScreen";
import LargeButton from "./LargeButton";
import Login from "./Login";
import Screenonboarding from "./Screen onboarding";
import SignUp from "./SignUp";
import Bt2 from "./bt2";
import { createStackNavigator } from "@react-navigation/stack";
const Stack =createStackNavigator();

export default function App(){
return (
//return(

//)
<NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
);
}