import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const InputScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  console.log("#########", agree);
  // const onSubmit = () => {
  //   alert(userName);
  // };
  // const Submite =()=>{
  //   //  return Alert.alert(userName,password)
  //   if (userName==="roman"&& password==="1122")
  //   Alert.alert(`thank you ${userName}`);
  //   else {
  //     Alert.alert(`user and password is not correct
  //     `);
  //   }
  // };
  // const onEndEditing = () => {
  //   alert(email);
  // };
  const short = () => {
    alert(password);
  };
  const onNavigate = () => {
    const data = {
      name: userName,
      email,
      password,
    };
    navigation.navigate("Data Entery", { _data: data });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          <Text style={styles.loginData}>Login Your Acount</Text>
          <Text style={styles.label}> Names</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name."
            value={userName}
            onChangeText={(text) => setUserName(text)}
            autoFocus={true}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter E.mail"
            // secureTextEntry={true}
            keyboardType="email-address"
            autoFocus={true}
            autoCapitalize="none" //Write automatically small Alphabits
            onChangeText={(text) => setEmail(text)}
            // onBlur={onEndEditing}
            // value={email}
          />

          <Text style={styles.label}> Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={true}
            keyboardType="number-pad"
            autoFocus={true}
            onChangeText={(password) => setPassword(password)}
            onBlur={short}
          />

          <View style={styles.label}>
            <Checkbox value={agree} onValueChange={() => setAgree(!agree)} />
            <Text style={styles.label}>
              I Have read and agreed with your pollicy.
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: agree ? "green" : "red" },
            ]}
            onPress={() => onNavigate()}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.outPut}>Name: ({userName})</Text>
          <Text style={styles.outPut}>Email: ({email})</Text>
          <Text style={styles.outPut}>Password: ({password})</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginData: {
    fontSize: 22,
    fontWeight: 600,
    color: "blue",
    textAlign: "center",
  },
  mainView: {
    paddingHorizontal: 15,
  },
  label: {
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
    borderColor: "blue",
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
    borderColor: "blue",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
  },
  outPut: {
    fontSize: 18,
    fontWeight: 600,

    alignSelf: "center",
  },
});
