import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "./LandingScreen";
import LargeButton from "./LargeButton";
import Login from "./Login";
import Screenonboarding from "./Screen onboarding";
import SignUp from "./SignUp";
import { createStackNavigator } from "@react-navigation/stack";
import PoupularCategories from "./PopularCategories";
import StorySlider from "./LargeButton";
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
        <Stack.Screen name="PoupularCategories" component={PoupularCategories} />
      </Stack.Navigator>
    </NavigationContainer> 
);
};