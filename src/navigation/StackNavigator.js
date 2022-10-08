import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MovieDetail from "../screens/MovieDetail";
import SeriesDetail from "../screens/SeriesDetail";
import PlayScreen from "../screens/PlayScreen";
import PlayEpisode from "../screens/PlayEpisode";
import SearchScreen from "../screens/SearchScreen";
import SearchBar from "../components/SearchBar";
import NoConnectionScreen from "../screens/NoConnectionScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="SeriesDetail" component={SeriesDetail} />
      <Stack.Screen name="PlayScreen" component={PlayScreen} />
      <Stack.Screen name="PlayEpisode" component={PlayEpisode} />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: (props) => <SearchBar {...props} /> }}
      />
      <Stack.Screen name="NoConnectionScreen" component={NoConnectionScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
