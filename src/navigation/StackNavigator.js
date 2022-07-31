import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MovieDetail from "../screens/MovieDetail";
import TabNavigator from "../navigation/TabNavigator";
import { useDispatch, useSelector } from "react-redux";

const Stack = createStackNavigator();

const StackNavigator = () => {
  // const movieDetails = useSelector((state) => state.rootReducer);

  // const {
  //   movies: { isLoading, movies },
  // } = movieDetails;

  // console.log("movieName->", movies.results.);
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
