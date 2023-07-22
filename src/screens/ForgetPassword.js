import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const ForgetPassword = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.mainView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../../assets/Book-Input.jpg")}
      >
        <SafeAreaView>
          <Image
            style={styles.Image}
            source={require("../../assets/thinking.jpg")}
          />
          <Text style={styles.verify}> Reser Password</Text>
          <TextInput
            style={styles.input}
            keyboardType="numbers-and-punctuation"
            placeholder="Enter Your Email"
          />
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.buttonText]}>Reset Password</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingVertical: 15,
  },
  ImageBackground: {
    justifyContent: "center",
    flex: 1,
  },
  verify: {
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
  input: {
    height: 50,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    marginHorizontal: 20,
    borderColor: "blue",
  },
  button: {
    backgroundColor: "darkblue",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: "white",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});
