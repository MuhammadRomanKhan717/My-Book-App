import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import BookCard from "../components/BookCard";
import Header from "../components/Header";

//   {
//     id: "1",
//     title: "First Item",
//   },
//   {
//     id: "2",
//     title: "Second Item",
//   },
//   {
//     id: "3",
//     title: "Third Item",
//   },
// ];

const BookCollection = ({ navigation }) => {
  const [inputSearch, SetInputSearch] = useState([]);

  const [data, setData] = useState([]);
  useEffect(() => {
    onGetBooks();
  }, []);

  const onGetBooks = async () => {
    await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Nmf4HPvGAF148CXYvkKG1Skg3gLp2XP1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("dddddddd", JSON.stringify(data.results.books));
        setData(data?.results?.books);
      });
  };
  return (
    <SafeAreaView>
      <Header navigation={navigation} hideBookArrow={false} />

      <View style={styles.inputView}>
        <View>
          <TouchableOpacity>
            <FontAwesome name="search" size={24} color="green" />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="search..."
          value={inputSearch}
          onChange={SetInputSearch}
        />
        <TouchableOpacity>
          <Entypo
            name="circle-with-cross"
            size={24}
            color="green"
            onPress={() => SetInputSearch("")}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        style={{ marginBottom: "30%" }}
        renderItem={({ item, index }) => (
          // call the BookCard screen
          <BookCard item={item} index={index} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default BookCollection;

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
  inputView: {
    borderColor: "darkgreen",
    flexDirection: "row",
    paddingHorizontal: 15,
    width: "93%",
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 25,
    height: 50,
    width: "80%",
    paddingLeft: "2%",
  },
});
