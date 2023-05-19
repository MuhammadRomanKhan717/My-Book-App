import {
  StyleSheet,
  Image,
  Text,
  View,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const BookDetail = (props) => {
  console.log("only data....", props?.route?.params?.item);
  let data = props?.route?.params?.item;
  return (
    <SafeAreaView style={styles.mainView}>
      <Header navigation={props.navigation} hideBookArrow={true} />
      <View style={styles.BookDetail}>
        <Text style={styles.CollectBok}>Are you Collect this Book ?... </Text>
        <Image style={styles.image} source={{ uri: data.book_image }} />

        <Text style={styles.bookname}>{data.title}</Text>
        <View style={styles.booksdetail}>
          <View style={styles.textView}>
            <Text style={styles.Heading}>Author Name: </Text>
            <ScrollView style={styles.scroll}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
                {data.author}
              </Text>
            </ScrollView>
          </View>
          <View style={styles.textView}>
            <Text style={styles.Heading}> price: </Text>
            <Text style={styles.text}>{data.price}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={styles.Heading}>Description: </Text>
            <ScrollView style={styles.scroll}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
                {data.description}
              </Text>
            </ScrollView>
          </View>
        </View>
        <Text style={styles.Purchase}>Purchase link's</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(data.buy_links[0].url)}
        >
          <Text style={styles.link}> From Amazon</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(data.buy_links[1].url)}
        >
          <Text style={styles.link}>From Apple Books</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(data.buy_links[2].url)}
        >
          <Text style={styles.link}>From Barnes and Noble</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(data.buy_links[3].url)}
        >
          <Text style={styles.link}>From Book-A-Million</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(data.buy_links[4].url)}
        >
          <Text style={styles.link}>From Bookshop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  // mainView: {
  //   marginTop: 40,
  //   alignSelf: "center",
  //   borderRadius: 50,
  //   width: "90%",
  //   borderWidth: 3,
  //   borderColor: "lightgreen",
  // },

  BookDetail: {
    height: "95%",
  },
  CollectBok: {
    alignSelf: "center",
    fontSize: 25,
    color: "darkgreen",
    paddingBottom: 12,
  },

  image: {
    alignSelf: "center",
    height: 240,
    width: 170,
    marginBottom: 18,
  },
  bookname: {
    alignSelf: "center",
    paddingTop: 4,
    fontSize: 20,
    fontWeight: "700",
  },
  booksdetail: {
    paddingBottom: 4,
    paddingTop: 10,
    justifyContent: "center",
  },
  textView: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingLeft: 18,
  },
  Heading: {
    maxWidth: 120,
    maxHeight: 100,
    fontSize: 18,
    fontWeight: "600",
  },
  text: {
    paddingTop: 4,
    fontSize: 16,
    color: "green",
  },
  scroll: {
    flexDirection: "row",
  },
  Purchase: {
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10,
    color: "red",
    fontSize: 20,
  },
  link: {
    alignSelf: "center",
    fontSize: 18,
    paddingTop: 9,
    color: "blue",
  },

  BottumView: {
    backgroundColor: "red",
    paddingTop: 12,
    flexDirection: "column",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 20,
    width: "80%",
    borderRadius: 50,
    borderWidth: 1,

    borderColor: "#006400",
  },
  buttonText: {
    paddingBottom: 4,
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});
