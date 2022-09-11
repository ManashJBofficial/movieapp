import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { windowWidth, windowHeight } from "../utils/dimensions";
import YoutubePlayer from "react-native-youtube-iframe";
import { useDispatch, useSelector } from "react-redux";
import {
  resetTrailerId,
  resetTvTrailerId,
  getTrailerdata,
  getTvTrailerdata,
} from "../redux/action/trailerAction";
import { getPlaydata } from "../redux/action/playAction";
import { getSeriesDetail } from "../redux/action/seriesDetailAction";
import { Chip, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Foundation";

const MovieDetail = ({ route, navigation }) => {
  const { movieData } = route.params;
  console.log("data==", movieData.id);
  const dispatch = useDispatch();

  const trailerDetails = useSelector((state) => state.rootReducer.trailers);
  const { trailer } = trailerDetails;

  const tvTrailerDetails = useSelector((state) => state.rootReducer.tvTrailers);
  const { tvTrailer } = tvTrailerDetails;

  const playDetails = useSelector((state) => state.rootReducer.playData);
  const { isLoading, play } = playDetails;
  var gen;
  const getGenres = () => {
    var res = play.genres.filter((ele) => movieData.genre_ids.includes(ele.id));
    return res;
  };
  if (isLoading === false) {
    gen = getGenres();
  }
  useEffect(() => {
    navigation.setOptions({ title: movieData.title });

    dispatch(getPlaydata());
    dispatch(getTrailerdata(movieData.id));
    dispatch(getTvTrailerdata(movieData.id));
    dispatch(getSeriesDetail(movieData.id));
    return () => {
      dispatch(resetTrailerId());
      dispatch(resetTvTrailerId());
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
              <YoutubePlayer height={221} play={false} videoId={trailer} />
            )}
          </ImageBackground>
        </View>
        <Text style={styles.title}>{movieData.title}</Text>
        <Text style={styles.subtitle}>
          {movieData.release_date.split("-")[0] +
            " | " +
            movieData.media_type.charAt(0).toUpperCase() +
            movieData.media_type.slice(1) +
            " | " +
            Math.round(movieData.vote_average * 10) / 10}
        </Text>
        <Text style={styles.subtitle}>
          {isLoading === false
            ? gen.map((ele) => (
                <View key={ele.id}>
                  <Chip
                    style={{ marginRight: 5, marginBottom: 3 }}
                    onPress={() => console.log("Pressed")}
                  >
                    {ele.name}
                  </Chip>
                </View>
              ))
            : null}
        </Text>

        <Text style={styles.subtitle}>{movieData.overview}</Text>
        <View style={styles.btnContainer}>
          <Button
            icon="play-circle"
            mode="contained"
            onPress={() => {
              navigation.navigate("PlayScreen", { movieId: movieData.id });
            }}
            color="tomato"
          >
            Watch Now
          </Button>
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
  tag: {
    borderRadius: 3,
    borderColor: "red",
    borderWidth: 2,
  },
});
