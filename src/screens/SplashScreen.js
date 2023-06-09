import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Lottie from "lottie-react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Borrding");
    }, 3000);
  }, []);

  return (
    <Lottie
      source={require("../../assets/splash.json")}
      // source={require("../../assets/bookIcon.json")}
      autoPlay
      loop={false}
    />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
