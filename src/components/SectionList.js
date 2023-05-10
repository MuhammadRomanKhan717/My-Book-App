import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
const users = [
  {
    id: 1,
    name: "salman",
    data: ["book", "copy++", "pen"],
  },
  {
    id: 2,
    name: "sadiq",
    data: ["OOP", "OS", "OPP2"],
  },
  {
    id: 3,
    name: "umair",
    data: ["ICT", "PS++", "DLD"],
  },
];

const SectionList = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 31 }}>Section List</Text>
        {/* <SectionList
          sections={users}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 28 }}>Name {item.name}</Text>
          )}
        /> */}
        <FlatList
          data={users}
          renderItem={({ item, index }) => {
            return (
              <View key={index}>
                <Text style={{ fontSize: 28, color: "red" }}>
                  ID : {item.id}
                </Text>
                <Text style={{ fontSize: 25, color: "green" }}>
                  Name : {item.name}
                </Text>
                {item?.data.map((course) => {
                  return (
                    <View>
                      <Text>{course}</Text>
                    </View>
                  );
                })}
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SectionList;

const styles = StyleSheet.create({});
