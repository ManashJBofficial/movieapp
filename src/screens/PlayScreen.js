import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaydata } from "../redux/action/playAction";
import { getSimilarMoviesData } from "../redux/action/similarMoviesAction";
import { WebView } from "react-native-webview";
import { windowWidth, windowHeight } from "../utils/dimensions";
import Carousel from "react-native-snap-carousel";
import SliderImage from "../components/SliderImage";

const PlayScreen = ({ route, navigation }) => {
  const { movieId,movieName } = route.params;
  const dispatch = useDispatch();

  const playDetails = useSelector((state) => state.rootReducer.playData);
  // const moviedata = useSelector((state) => state.rootReducer.movies);
  const { play } = playDetails;
  // console.log("play->", play);
  // console.log("moviedata->", moviedata.movies);

  const similarMovieDetails = useSelector((state) => state.rootReducer.similarMovieReducer);

  const {similarMovies } = similarMovieDetails
  // console.log("similarMovies",similarMovies)
  
  useEffect(() => {
    navigation.setOptions({ title:movieName });
    dispatch(getPlaydata(movieId));
    dispatch(getSimilarMoviesData(movieId))
  }, [dispatch]);
  console.log("movieId", movieId);
  const jsCode = `window.open = undefined`;

  // const similarRenderImage = ({ item }) => {
  //   return <SimilarSliderImage data={item}/>;
  // };
  const renderImage = ({ item, index }) => {
    return <SliderImage data={item} />;
  };
  return (
    <View>
      <View
        style={{
          height: windowHeight - 500,
          width: windowWidth,
          maxHeight: "100%",
          opacity: 0.99,
          overflow: "hidden",
        }}
      >
        <WebView
          source={{
            uri: `https://v2.vidsrc.me/embed/${movieId}`,
          }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          javaScriptCanOpenWindowsAutomatically={false}
          injectedJavaScript={jsCode}
          allowsFullscreenVideo={true}
          minimumFontSize={10}
          setBuiltInZoomControls={false}
          onError={() => console.log("Something went wrong")}
        />
      </View>
        <View>
        <Text style={styles.title}>More like this</Text>
            {similarMovies?.results == undefined ? (
              <Text>Loading...</Text>
            ) : (
              <Carousel
                // ref={isCarousel}
                data={similarMovies?.results.map(v => ({...v, media_type: "similar_movie"}))}
                renderItem={renderImage}
                sliderWidth={windowWidth - 10}
                itemWidth={300}
                loop={true}
              />
            )}
          </View>
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
});
