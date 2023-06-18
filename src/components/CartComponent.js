import {
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const CartComponents = ({ item, index, navigation }) => {
  const [refreshing, setRefreshing] = React.useState(true);
  const [quantity, setQuantity] = useState(0);
  // const uniqueNames = Array.from(new Set(names));

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    console.warn(item.title);
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.MainView}>
        <Image style={styles.Image} source={{ uri: item.book_image }} />
        <View>
          <View style={styles.titleView}>
            <Text style={styles.title}>{index + 1}:</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.pluseSign}>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <AntDesign name="pluscircle" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => setQuantity(quantity <= 0 ? 0 : quantity - 1)}
            >
              <AntDesign name="minuscircle" size={28} color="black" />
            </TouchableOpacity>
            <View style={styles.Delete}>
              <TouchableOpacity
                onPress={() => {
                  onRefresh();
                }}
              >
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
