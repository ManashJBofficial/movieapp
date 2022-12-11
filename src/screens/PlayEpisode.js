import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaydata } from "../redux/action/playAction";
import { WebView } from "react-native-webview";
import { windowWidth, windowHeight } from "../utils/dimensions";
import Carousel from "react-native-snap-carousel";
import SliderImage from "../components/SliderImage";
import { getSimilarTvData } from "../redux/action/similarTvAction";

const PlayEpisode = ({ route, navigation }) => {
  const { seriesId, seasonNo, episodeNo,seriesName } = route.params;
  const dispatch = useDispatch();

  console.log("seriesId",seriesId)
  //   const playDetails = useSelector((state) => state.rootReducer.playData);
  // const moviedata = useSelector((state) => state.rootReducer.movies);
  //   const { play } = playDetails;
  // console.log("play->", play);
  // console.log("moviedata->", moviedata.movies);
  const similarTvDetails = useSelector((state) => state.rootReducer.similarTvReducer);

  const {similarTv } = similarTvDetails
  console.log("similarTv",similarTv)
  useEffect(() => {
    navigation.setOptions({ title: seriesName });
    // dispatch(getPlaydata(movieId));
    dispatch(getSimilarTvData(seriesId))
  }, [dispatch]);
  const jsCode = `window.open = undefined`;
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
            uri: `https://v2.vidsrc.me/embed/${seriesId}/${seasonNo}-${episodeNo}/`,
          }}
          startInLoadingState={false}
          javaScriptEnabled={true}
          javaScriptCanOpenWindowsAutomatically={false}
          injectedJavaScript={jsCode}
          allowsFullscreenVideo={true}
          setBuiltInZoomControls={false}
          minimumFontSize={10}
          onError={() => console.log("Something went wrong")}
        />
      </View>
      <View>
        <Text style={styles.title}>More like this</Text>
            {similarTv?.results == undefined ? (
              <Text>Loading...</Text>
            ) : (
              <Carousel
                // ref={isCarousel}
                data={similarTv?.results.map(v => ({...v, media_type: "similar_tv"}))}
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

export default PlayEpisode;

const styles = StyleSheet.create({
  title: {
    padding: 10,
    marginTop:50,
    fontSize: 24,
    fontWeight: "bold",
  },
});
