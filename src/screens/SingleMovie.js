import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import { windowWidth, windowHeight } from "../utils/dimensions";

const SingleMovie = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={{
            uri: "https://image.tmdb.org/t/p/w500" + title.poster_path || [],
          }}
        />
      </View>

      <Text style={styles.title}>{title.title}</Text>

      <Text style={styles.subtitle}>{title.overview}</Text>
      <View style={styles.btnContainer}>
        <Button
          title="Watch Now"
          onPress={() => console.log("Pressed")}
          color="tomato"
        />
      </View>
    </View>
  );
};

export default SingleMovie;

const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth,
    height: windowHeight - 500,
    backgroundColor: "yellow",
    marginBottom: 5,
  },
  img: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  title: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    padding: 10,
    fontSize: 16,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "space-between",
    alignItems: "flex-start",
  },
  // flexImg: {
  //   width: "100%",
  //   height: "100%",
  //   resizeMode: "contain",
  // },
  btnContainer: {
    padding: 10,
  },
});
