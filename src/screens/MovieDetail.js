import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useEffect } from "react";
import { windowWidth, windowHeight } from "../utils/dimensions";

const MovieDetail = ({ route, navigation }) => {
  const { movieData } = route.params;

  useEffect(() => {
    (() => {
      navigation.setOptions({ title: movieData.title });
    })();
  }, [movieData.title]);

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://image.tmdb.org/t/p/w500" + movieData.poster_path || [],
          }}
        />
      </View>

      <Text style={styles.title}>{movieData.title}</Text>

      <Text style={styles.subtitle}>{movieData.overview}</Text>
      <View style={styles.btnContainer}>
        <Button
          title="Watch Now"
          onPress={() => console.log("Pressed")}
          color="red"
        />
      </View>
    </View>
  );
};

export default MovieDetail;

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
