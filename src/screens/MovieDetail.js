import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { windowWidth, windowHeight } from "../utils/dimensions";
import YoutubePlayer from "react-native-youtube-iframe";
import { useDispatch, useSelector } from "react-redux";
import { resetTrailerId, getTrailerdata } from "../redux/action/trailerAction";

const MovieDetail = ({ route, navigation }) => {
  const { movieData } = route.params;

  const dispatch = useDispatch();

  const trailerDetails = useSelector((state) => state.rootReducer.trailers);
  const { trailer } = trailerDetails;

  useEffect(() => {
    (() => {
      navigation.setOptions({ title: movieData.title });
    })();

    dispatch(getTrailerdata(movieData.id));
    return () => {
      dispatch(resetTrailerId());
    };
  }, [dispatch]);

  return (
    <ScrollView>
      <View>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{
              uri:
                "https://image.tmdb.org/t/p/w500" + movieData.poster_path || [],
            }}
            resizeMode="cover"
            style={styles.img}
          >
            {trailer === undefined ? (
              <></>
            ) : (
              <YoutubePlayer height={221} play={true} videoId={trailer} />
            )}
          </ImageBackground>
        </View>
        <Text style={styles.title}>{movieData.title}</Text>
        <Text style={styles.subtitle}>
          {movieData.release_date.split("-")[0]} |{" "}
          {movieData.media_type.charAt(0).toUpperCase() +
            movieData.media_type.slice(1)}{" "}
          | {Math.round(movieData.vote_average * 10) / 10}
        </Text>

        <Text style={styles.subtitle}>{movieData.overview}</Text>
        <View style={styles.btnContainer}>
          <Button
            title="Watch Now"
            onPress={() => console.log("Pressed")}
            color="red"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth,
    height: windowHeight - 570,
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
