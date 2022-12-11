import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { windowWidth } from "../utils/dimensions";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { searchTextAction } from "../redux/action/searchTextAction";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchTextAction(searchQuery.toString().trim()));
  }, [searchQuery]);

  return (
    <View style={{ width: windowWidth - 90 }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        loading="true"
        icon={() => <FontAwesome name="search" size={15} />}
        style={{
          backgroundColor: "white",
          borderWidth: 0,
          shadowColor: "transparent",
          borderBottomColor: "transparent",
          borderTopColor: "transparent",
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
