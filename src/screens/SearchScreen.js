import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchResult,
  resetSearchQuery,
} from "../redux/action/searchQueryAction";
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
    ?.slice(0, 15)
    .map((data, i) => data.poster_path)
    .filter((ele) => {
      return ele !== undefined && ele !== null;
    });
  useEffect(() => {
    const sendSearchRequest = setTimeout(() => {
      if (searchInput && searchInput.length > 2) {
        dispatch(getSearchResult(searchInput));
      }
    }, 600);
    return () => {
      clearTimeout(sendSearchRequest);
      // dispatch(resetSearchQuery());
    };
  }, [dispatch, searchInput]);

  return (
    <ScrollView>
      <View>
        {isSearchResultLoading === true ? (
          <ActivityIndicator animating={true} color="red" size="large" />
        ) : (
          <View style={styles.cardContainer}>
            {poster_arr?.map((data, i) => {
              return (
                <Card
                  key={i}
                  mode="contained"
                  elevation={5}
                  style={styles.card}
                >
                  <Card.Cover
                    source={{
                      uri: "https://image.tmdb.org/t/p/w500" + data || [],
                    }}
                    style={styles.cardCover}
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
  cardContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  card: {
    width: 126,
    height: 200,
    borderWidth: 0,
    margin: 2,
  },
  cardCover: {
    width: "100%",
    height: "100%",
  },
});
