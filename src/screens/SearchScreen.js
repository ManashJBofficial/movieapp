import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchScreen = () => {
  const searchText = useSelector((state) => state.rootReducer.searchTextInput);
  const { searchInput } = searchText;
  console.log("input is-->", searchInput);
  return (
    <View>
      <Text>{searchInput}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
