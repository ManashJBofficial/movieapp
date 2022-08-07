import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MovieDetail from "../screens/MovieDetail";
import NoConnectionScreen from "../screens/NoConnectionScreen";
import { useDispatch, useSelector } from "react-redux";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="NoConnectionScreen" component={NoConnectionScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
