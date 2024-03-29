import {
  Button,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = ({ navigation }) => {
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
            source={require("../../assets/SignupIcon.png")}
          />
          <Text style={styles.header}>Create your acount</Text>

          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Enter Your Email"
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            keyboardType="numbers-and-punctuation"
            placeholder="Enter new password."
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            keyboardType="numbers-and-punctuation"
            placeholder="Re-enter the password. "
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[styles.button]}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.Warn}>If you have already account then.</Text>
            <Button
              title="LogIn"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingVertical: 15,
  },
  ImageBackground: {
    justifyContent: "center",
    flex: 1,
  },
  Image: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },

  header: {
    paddingBottom: 20,
    fontSize: 22,
    alignSelf: "center",
  },
  input: {
    height: 50,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "bold",
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
    marginHorizontal: 20,
    borderWidth: 1,
    paddingHorizontal: 7,
    borderColor: "white",
  },
  buttonText: {
    paddingBottom: 4,
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },

  Warn: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
    color: "#a3ebe0",
  },
});
