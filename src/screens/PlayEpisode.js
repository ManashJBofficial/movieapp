import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaydata } from "../redux/action/playAction";
import { WebView } from "react-native-webview";
import { windowWidth, windowHeight } from "../utils/dimensions";

const PlayEpisode = ({ route, navigation }) => {
  const { seriesId, seasonNo, episodeNo } = route.params;
  const dispatch = useDispatch();

  //   const playDetails = useSelector((state) => state.rootReducer.playData);
  // const moviedata = useSelector((state) => state.rootReducer.movies);
  //   const { play } = playDetails;
  // console.log("play->", play);
  // console.log("moviedata->", moviedata.movies);
  useEffect(() => {
    // dispatch(getPlaydata(movieId));
  }, [dispatch]);
  const jsCode = `window.open = undefined`;
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
      </View>
    </View>
  );
};

export default PlayEpisode;

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
});
