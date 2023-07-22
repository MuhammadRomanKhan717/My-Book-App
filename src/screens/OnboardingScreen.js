import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
// import Swiper from "react-native-swiper";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      bottomBarHeight={30}
      onSkip={() => {
        navigation.navigate("Home");
      }}
      onDone={() => {
        navigation.navigate("Home");
      }}
      pages={[
        {
          backgroundColor: "#D8BFD8",

          image: (
            <Image
              style={styles.Image}
              source={require("../../assets/Collection.jpg")}
            />
          ),
          title: "Collection of your favourite Books ",
          subtitle: "choose the bast books.",
        },

        {
          backgroundColor: "lightblue",

          image: (
            <Image
              style={styles.freeBook}
              source={require("../../assets/freeBookpng.png")}
            />
          ),
          title: "Totaly free of Cost",
          subtitle: " these app..! for free  of every type of books.",
        },

        {
          backgroundColor: "lightgray",

          image: (
            <Image
              style={styles.bookAccount}
              source={require("../../assets/bookAccount.jpg")}
            />
          ),
          title: "login your account",
          subtitle: "",
        },
        {
          backgroundColor: "#E0FFFF",

          image: (
            <Image
              style={styles.signup}
              source={require("../../assets/Booksignup.jpg")}
            />
          ),
          title: "SignUp your account",
          subtitle:
            "If you haven't your account then create it..! your account.",
        },

        {
          backgroundColor: "lightgray",

          image: (
            <Image
              style={styles.letsStart}
              source={require("../../assets/letsStart.jpg")}
            />
          ),
          title: "Let's Start",
          subtitle: "",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  Image: {
    height: 230,
    width: 270,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 50,
  },
  bookAccount: {
    justifyContent: "center",
    height: 510,
    width: 270,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 50,
  },
  freeBook: {
    height: 380,
    width: 350,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 50,
  },
  signup: {
    justifyContent: "center",
    height: 510,
    width: 270,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#AFEEEE",
    borderRadius: 50,
  },
  mainView: {
    flex: 1,
    paddingHorizontal: 15,
  },
  letsStart: {
    height: 150,
    width: 360,
  },
});
