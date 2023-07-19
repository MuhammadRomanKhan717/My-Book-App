import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const BookCard = ({ item, index, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.Maincard}
        onPress={() => navigation.navigate("bookDetail", { item: item })}
      >
        <Image style={styles.Image} source={{ uri: item.book_image }} />

        <View style={styles.bookText}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.heading}>Title:</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.Text, { maxWidth: 180 }]}
            >
              {item.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 220,
              maxWidth: 220,
            }}
          >
            <Text style={styles.heading}>Author Name:</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.Text}>
              {item.author}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.heading}>Description:</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.Text}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  Maincard: {
    marginTop: 15,
    borderWidth: 2,
    borderColor: "darkgreen",
    marginHorizontal: 13,
    flexDirection: "row",
  },
  Text: {
    color: "green",
    fontSize: 16,
    paddingStart: 4,
    maxWidth: 100,
  },
  heading: {
    color: "green",
    fontSize: 18,
    paddingStart: 4,
    fontWeight: "900",
  },

  Image: {
    justifyContent: "center",
    height: 110,
    width: 100,
  },
  bookText: {
    width: "61%",
    maxWidth: "61%",
    justifyContent: "space-evenly",
    paddingStart: 12,
  },
});
