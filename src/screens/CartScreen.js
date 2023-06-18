import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartComponents from "../components/CartComponent";
import { useSelector } from "react-redux";

const CartScreen = (props) => {
  const [data, setData] = useState([]);
  const selector = useSelector((state) => state.cart.value);
  const arr = [...new Set(selector)];
  //we are create duplicate array to remove the duplicate items from
  // the cart screen. it's easy to use but we try other method
  console.log("length....", selector.length);
  // useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <FlatList
        data={arr}
        renderItem={({ item, index }) => (
          <CartComponents
            item={item}
            index={index}
            navigation={props.navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
