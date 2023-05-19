import { StyleSheet, Image, Text, View } from "react-native";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./src/screens/OnboardingScreen";
const Stack = createNativeStackNavigator();
import Home from "./src/screens/Home";

import SignUpScreen from "./src/screens/SignUpScreen";
import ForgetPassword from "./src/screens/ForgetPassword";
import BookCollection from "./src/screens/BookCollection";
import SplashScreen from "./src/screens/SplashScreen";
import LogIn from "./src/screens/LogIn,";
import BookDetail from "./src/screens/BookDetail";
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
        <Stack.Screen name="bookDetail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
