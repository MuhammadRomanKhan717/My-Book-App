import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const displayLoader = () => {
    setShow(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={require("../../assets/Book-Input.jpg")}
        style={styles.ImageBackground}
      >
        <SafeAreaView>
          <Image
            style={styles.Image}
            source={require("../../assets/logIn.png")}
          />
          <Text style={styles.Header}>Login your account</Text>

          <Text style={styles.label}>Enter Your Name</Text>
          <TextInput
            placeholder="Enter Name"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Enter Your password</Text>
          <TextInput
            placeholder="Enter Password"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
          <Button
            title="Forget Password"
            onPress={() => navigation.navigate("Forget")}
          />

          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("BookList")}
          >
            <Text style={[styles.buttonText]}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.Warn}>You Don't have account?</Text>
            <Button
              title="SignUp"
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // paddingHorizontal: 20,
    justifyContent: "center",
  },
  ImageBackground: {
    justifyContent: "center",
    flex: 1,
  },
  Header: {
    paddingTop: 15,
    fontSize: 26,
    marginBottom: 20,
    alignSelf: "center",
  },
  Image: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 5,
    marginHorizontal: 22,
    // marginBottom: 3,
  },
  Warn: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
    color: "#00FFFF",
  },
  input: {
    paddingLeft: 10,
    fontSize: 16,
    height: 50,
    // marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: "#006400",
  },
  button: {
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    height: 50,

    marginHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#006400",
  },
  buttonText: {
    paddingBottom: 4,
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
});
