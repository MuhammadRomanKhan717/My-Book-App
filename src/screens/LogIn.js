import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  // useEffect(() => {
  //   navigation.nagate("OnboardingScreen");
  // }, []);

  return (
    <ImageBackground
      source={require("../../assets/Book-Input.jpg")}
      style={styles.mainView}
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
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,

    paddingHorizontal: 20,
    justifyContent: "center",
  },

  Header: {
    paddingTop: 15,
    fontSize: 22,
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
    marginTop: 20,
    marginBottom: 9,
  },
  Warn: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
    color: "#00FFFF",
  },
  input: {
    height: 50,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 7,
    borderColor: "#006400",
  },
  button: {
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 7,
    borderColor: "#006400",
  },
  buttonText: {
    paddingBottom: 4,
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});
