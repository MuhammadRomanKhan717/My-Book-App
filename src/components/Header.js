import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

const Header = ({ navigation, hideBookArrow }) => {
  console.log("asdsf", hideBookArrow);
  const cartData = useSelector((state) => state.cart.value);
  const [cartItems, setcartItems] = useState(0);
  // console.warn(cartData.length);
  useEffect(() => {
    // setcartItems(cartItems.length);
  }, [cartData]);
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
          <View style={styles.textcart}>
            <TouchableOpacity onPress={() => navigation.navigate("cartScreen")}>
              <Text style={styles.text}>{cartData.length}</Text>
              <Entypo
                name="shopping-cart"
                size={24}
                color="green"
                style={styles.shopingcart}
              />
            </TouchableOpacity>
          </View>
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
  textcart: {
    flexDirection: "row",
  },
  shopingcart: { position: "absolute" },
  text: {
    fontSize: 22,
    // position: "absolute",
    height: 25,
    width: 19,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "grey",
    right: 5,
    bottom: 12,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
  },
});
