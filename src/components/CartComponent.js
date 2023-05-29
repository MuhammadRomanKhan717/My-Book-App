import {
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const CartComponents = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.MainView}>
        <Image style={styles.Image} source={require("..//../assets/36H.jpg")} />
        <View>
          <View style={styles.titleView}>
            <Text style={styles.title}>1: </Text>
            <Text style={styles.title}> Title</Text>
          </View>
          <View style={styles.pluseSign}>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>1</Text>
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={28} color="black" />
            </TouchableOpacity>
            <View style={styles.Delete}>
              <TouchableOpacity>
                <MaterialCommunityIcons name="delete" size={34} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartComponents;

const styles = StyleSheet.create({
  MainView: {
    maxWidth: "99%",
    flexDirection: "row",
    borderWidth: 1,
    paddingLeft: 12,
    // justifyContent: "center",
  },
  Image: {
    height: 140,
    width: 100,
  },
  titleView: {
    paddingLeft: 5,
    paddingBottom: 35,
    flexDirection: "row",
  },
  title: {
    fontWeight: "700",
    fontSize: 26,
  },
  pluseSign: {
    paddingLeft: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  Delete: {
    paddingLeft: 50,
  },
});
