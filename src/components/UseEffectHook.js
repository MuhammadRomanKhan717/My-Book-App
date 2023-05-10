import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

const UseEffectHook = () => {
  const [first, setfirst] = useState(0);

  useEffect(() => {
    // setfirst(40); // setComponent(first) to assign the value.
    console.warn(first); //  console.warn mean that show of warninig.
  }, [first]); // reapet the (first) component and there blank[] array then one time reandrer the array.

  return (
    <SafeAreaView>
      <View>
        <Text>UseEffectHook</Text>
        <Text>{first}</Text>
        <Button title="press" onPress={() => setfirst(first + 1)} />
      </View>
    </SafeAreaView>
  );
};

export default UseEffectHook;

const styles = StyleSheet.create({});
