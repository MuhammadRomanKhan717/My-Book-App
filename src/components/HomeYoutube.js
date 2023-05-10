import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const HomeYoutube = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [name, setName] = useState("");
  console.log("props2...////", props?.route?.params?._data);
  let a = props?.route?.params?._data;
  // const KeyboardAvoidingView = () => {
  useEffect(() => {
    setName(a.name ? a.name : "Fill the Name");
  }, []);

  const onNavigate = () => {
    const data = {
      name: userName,
      email,
      password,
    };
    navigation.navigate("SingUp your Acount", { _data: data });
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.container}
    // >
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainView}>
          <Text style={styles.information}>Enter Your Information</Text>

          <View style={styles.childView}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              value={name}
            />

            <Text style={styles.label}>Father Name</Text>
            <TextInput style={styles.input} keyboardType="default" />
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter E.mail"
              keyboardType="email-address"
              autoFocus={true}
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none" //Write automatically small Alphabits
            />
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              keyboardType="numbers-and-punctuation"
              // value={userName}
              // onChangeText={(text) => setUserName(text)}
            />

            <Text style={styles.label}>Gender</Text>
            <TextInput style={styles.input} keyboardType="default" />

            <Text style={styles.label}>Countery</Text>
            <TextInput style={styles.input} keyboardType="default" />

            <Text style={styles.label}>Nationality</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>CNIC No</Text>
            <TextInput
              style={styles.input}
              keyboardType="numbers-and-punctuation"
            />

            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.input} keyboardType="default" />

            <Text style={styles.label}>Mobile Number</Text>
            <TextInput style={styles.input} keyboardType="number-pad" />
          </View>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => onNavigate()}
          >
            <Text style={styles.buttonText}>Go Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    // {/* </KeyboardAvoidingView> */}
  );
};
// };

export default HomeYoutube;

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 30,
  },
  childView: {
    flex: 1,

    // paddingHorizontal: 15,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  information: {
    fontSize: 22,
    fontWeight: 600,
    color: "#4B0082",
    textAlign: "center",
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
    borderColor: "#00BFFF",
  },

  button: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 35,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 7,
    borderColor: "#00BFFF",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
  },
  container: {
    flex: 1,
  },
});
