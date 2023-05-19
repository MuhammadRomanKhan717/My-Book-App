import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const WellcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/Book-Input.jpg")}
      style={styles.mainView}
    >
      {/* <ScrollView> */}
      <SafeAreaView>
        <Image
          style={styles.Image}
          source={require("../../assets/mainPage.jpg")}
        />
        <Text style={styles.wellCome}>WellCome to Books Collection</Text>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.push("Login")}
        >
          <Text style={[styles.buttonText]}>LogIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={[styles.buttonText]}>Singup</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {/* </ScrollView> */}
    </ImageBackground>
  );
};

export default WellcomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },

  wellCome: {
    paddingBottom: 5,
    paddingTop: 25,
    fontSize: 22,
    alignSelf: "center",
  },
  Image: {
    borderRadius: 15,
    borderWidth: 1,
    height: 250,
    width: 250,
    alignSelf: "center",
  },

  button: {
    backgroundColor: "darkblue",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 20,
    marginBottom: 1,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 7,
    borderColor: "white",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});
