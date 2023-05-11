import { StyleSheet, Image, Text, View } from "react-native";
import { useEffect } from "react";
// import UseEffectHook from "./src/components/UseEffectHook";
// import AppIntroSlider from "react-native-app-intro-slider";
// import LogInForm from "./src/screens/LogInForm";
// import Counter from "./src/screens/Counter";
// import InputScreen from "./src/screens/InputScreen";
// import HomeYoutube from "./src/components/HomeYoutube";
// import SignUp from "./src/components/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen2 from "./src/components/FirstProject/LoginScreen2";
import OnboardingScreen from "./src/screens/OnboardingScreen";
const Stack = createNativeStackNavigator();
// import SectionList from "./src/components/SectionList";
import Home from "./src/screens/Home";
import SignUpScreen from "./src/screens/SignUpScreen";
import LogIn from "./src/screens/LogIn";
import ForgetPassword from "./src/screens/ForgetPassword";
import BookCollection from "./src/screens/BookCollection";
import SplashScreen from "./src/screens/SplashScreen";
const App = () => {
  return (
    // <View>
    // {/* <UseEffectHook /> */}
    // {/* <SectionList /> */}

    // </View>

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="splash"
      >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="BookList" component={BookCollection} />
        <Stack.Screen name="Forget" component={ForgetPassword} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Borrding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
