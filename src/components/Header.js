import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

const Header = ({ navigation, hideBookArrow }) => {
  console.log("asdsf", hideBookArrow);
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.back}>
          {hideBookArrow && (
            <TouchableOpacity>
              <MaterialIcons
                name="arrow-back"
                size={24}
                color="green"
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.cart}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color="green"
              onPress={() => navigation.navigate("Home")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="shopping-cart" size={24} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "88%",
    alignSelf: "center",

    height: 40,
    marginBottom: 30,
    borderBottomWidth: 0.5,
    borderColor: "darkgreen",
    fontSize: 23,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  back: {
    flexDirection: "row",
  },
  cart: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
