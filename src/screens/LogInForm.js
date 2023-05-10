import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const LogInForm = () => {
  //NOTE......

  //these are App.js code past here for a records

  // <NavigationContainer>
  //   <Stack.Navigator initialRouteName="Login">
  //     <Stack.Screen name="Login" component={InputScreen} />
  //     <Stack.Screen name="Data Entery" component={HomeYoutube} />
  //     <Stack.Screen name="SingUp your Acount" component={SignUp} />
  //   </Stack.Navigator>
  // </NavigationContainer>
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.mianHeader}>Login Form</Text>
        <Text style={styles.decription}>you can raech Us</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.lable}>Enter Your Name</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.lable}>Enter Your password</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
        <View>
          <CheckBox
          // value={ }
          // onValueChange=() =>
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mianHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "bold",
  },
  decription: {
    fontSize: 20,
    color: "#7d7d7d",
    fontWeight: "500",
    lineHeight: 25,
    paddingBottom: 20,
    fontFamily: "regular",
  },
  inputStyle: {
    borderWidth: 1,
    marginBottom: 22,
    borderColor: "#FF8C00",
    paddingHorizontal: 15,
    borderRadius: 8,
    fontFamily: "regular",
    fontSize: 18,
    height: 33,
  },
});
