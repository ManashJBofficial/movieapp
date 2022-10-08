import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResult } from "../redux/action/searchQueryAction";
import {
  ActivityIndicator,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.rootReducer.searchTextInput);
  const { searchInput } = searchText;
  console.log("searchInput->", searchInput);

  const searchResult = useSelector(
    (state) => state.rootReducer.searchResultReducer
  );
  const {
    isSearchResultLoading,
    searchResult: { results },
  } = searchResult;

  console.log("isSearchResultLoading->", isSearchResultLoading);
  let poster_arr = results
    ?.slice(0, 10)
    .map((data) => data.poster_path)
    .filter((ele) => {
      return ele !== undefined && ele !== null;
    });
  useEffect(() => {
    const sendSearchRequest = setTimeout(() => {
      if (searchInput && searchInput.length > 2) {
        dispatch(getSearchResult(searchInput));
      }
    }, 800);
    return () => clearTimeout(sendSearchRequest);
  }, [dispatch, searchInput]);

  return (
    <ScrollView>
      <View>
        {isSearchResultLoading === true ? (
          <ActivityIndicator animating={true} color="red" size="large" />
        ) : (
          <View>
            <Text>Results</Text>
            {poster_arr?.map((data) => {
              return (
                <Card>
                  <Card.Cover
                    source={{
                      uri: "https://image.tmdb.org/t/p/w500" + data || [],
                    }}
                  />
                </Card>
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
