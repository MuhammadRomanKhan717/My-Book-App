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
    // console.warn(item.title);
  }, []);
  return (
    <SafeAreaView>
      <View style={{ padding: 6 }}>
        <View style={styles.MainView}>
          <Image style={styles.Image} source={{ uri: item.book_image }} />
          <View style={{ flex: 0.8 }}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{index + 1}:</Text>
              <Text numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
            </View>

            <View style={styles.interQuantity}>
              <Text style={styles.textQuantity}>Inter quantity</Text>
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
                  <MaterialCommunityIcons
                    name="delete"
                    size={34}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
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
    width: "100%",
    flexDirection: "row",
    borderWidth: 2,
    marginVertical: 8,
  },
  Image: {
    height: 140,
    width: 100,
  },
  titleView: {
    paddingLeft: 5,
    paddingBottom: 25,
    flexDirection: "row",
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
  },
  interQuantity: {
    paddingLeft: 24,
  },
  textQuantity: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  pluseSign: {
    paddingLeft: 45,
    flexDirection: "row",
    alignItems: "center",
  },
  Delete: {
    paddingLeft: 70,
  },
});
