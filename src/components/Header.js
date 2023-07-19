import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

const Header = ({ navigation, hideBookArrow }) => {
  // console.log("asdsf", hideBookArrow);
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
                size={28}
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
              size={28}
              color="green"
              onPress={() => navigation.navigate("Home")}
            />
          </TouchableOpacity>
          <View style={styles.textcart}>
            <Text
              style={styles.text}
              onPress={() => navigation.navigate("cartScreen")}
            >
              {cartData.length}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("cartScreen")}>
            <Entypo
              name="shopping-cart"
              size={26}
              color="green"
              style={styles.shopingcart}
            />
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
    alignItems: "center",
  },
  textcart: {
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "lightgreen",
    height: 30,
    width: 28,
    position: "absolute",
    right: 11,
    top: -6,
    zIndex: 1,
  },
  shopingcart: {
    // zIndex: -2,
    marginLeft: 20,
  },
  text: {
    fontSize: 22,
    left: 4,
    fontWeight: "600",
  },
});
