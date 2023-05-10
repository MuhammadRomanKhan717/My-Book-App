import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];

const BookCollection = ({ navigation }) => {
  return (
    <ImageBackground>
      <SafeAreaView>
        <Text>BookCollection</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BookCollection;

const styles = StyleSheet.create({});
