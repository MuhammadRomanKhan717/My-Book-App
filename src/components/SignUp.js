import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Checkbox from "expo-checkbox";

const SignUp = (props) => {
  const [name, setName] = useState("");
  console.log("props...////", props?.route?.params?._data);
  let a = props?.route?.params?._data;
  // const KeyboardAvoidingView = () => {
  useEffect(() => {
    setName(a.name ? a.name : "Fill the Name on Login Screen");
  }, []);

  const onNavigate = () => {
    const data = {
      name: userName,
      email,
      password,
    };
    // navigation.navigate("SingUp your Acount", { _data: data });
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setUserName(text)}
        keyboardType="default"
      />

      <Text style={styles.label}>Father Name</Text>
      <TextInput style={styles.input} keyboardType="default" />

      <Text style={styles.label}>School Name</Text>
      <TextInput style={styles.input} keyboardType="default" />

      <Text style={styles.label}>Class </Text>
      <TextInput style={styles.input} keyboardType="default" />

      <Text style={styles.label}>Dicipline</Text>
      <TextInput style={styles.input} keyboardType="numbers-and-punctuation" />

      <View style={styles.label}>
        <Checkbox

        // color={agree ? "	#FF1493" :undefined}
        />
        <Text style={styles.label}>
          I Have read and agreed with your pollicy.
        </Text>
      </View>

      <TouchableOpacity style={styles.submite} onPress={() => onNavigate()}>
        <Text style={styles.buttonText}>submited </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: 15,
  },

  label: {
    fontSize: 20,
    fontSize: 18,
    fontWeight: 500,
    marginTop: 15,
  },
  input: {
    height: 50,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 7,
    borderColor: "#7B68EE",
  },

  submite: {
    backgroundColor: "#00CED1",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 35,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 7,
    borderColor: "blue",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
