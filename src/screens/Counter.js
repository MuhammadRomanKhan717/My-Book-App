import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../components/redux/counterReducer";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[styles.mainView]}>
      <View>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.Text}>Increment</Text>
        </TouchableOpacity>
        <Text style={styles.Counter}>{count}</Text>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.Text}>Decrement</Text>
        </TouchableOpacity>
        {/* <Button title="Increment" onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title="Decrement value" onPress={() => dispatch(decrement())} /> */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainView: {
    justifyContent: "flex-end",
    alignContent: "center",
  },
  button: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 40,
    borderRadius: 50,
  },
  Text: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  Counter: {
    paddingTop: 12,
    alignSelf: "center",
    fontSize: 26,
  },
});
