import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import Carousel from "react-native-snap-carousel";
import { windowWidth } from "../utils/dimensions";
import { getApidata } from "../redux/action/movieAction";
import { getSeriesdata } from "../redux/action/seriesAction";
import SliderImage from "../components/SliderImage";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const movieDetails = useSelector((state) => state.rootReducer);

  const {
    movies: { isLoading, movies },
    series: { isSeriesLoading, series },
  } = movieDetails;

  // Subscribe
  const unsubscribe = NetInfo.addEventListener((state) => {
    // console.log("Connection type", state.type);
    // console.log("Is connected?", state.isConnected);
    if (state.isConnected !== true) {
      navigation.navigate("NoConnectionScreen");
    }
  });
  useEffect(() => {
    unsubscribe();
    dispatch(getApidata());
    dispatch(getSeriesdata());
  }, [dispatch]);

  const renderImage = ({ item, index }) => {
    return <SliderImage data={item} />;
  };
  // const isCarousel = React.useRef(null);

  return (
    <ScrollView>
      <View>
        <View>
          <Text style={styles.headText}>Trending Movies</Text>
          {movies?.results == undefined ? (
            <Text>Loading...</Text>
          ) : (
            <Carousel
              // ref={isCarousel}
              data={movies?.results}
              renderItem={renderImage}
              sliderWidth={windowWidth - 10}
              itemWidth={300}
              loop={true}
            />
          )}
        </View>
        <View>
          <Text style={styles.headText}>Trending Series</Text>
          {series?.results == undefined ? (
            <Text>Loading...</Text>
          ) : (
            <Carousel
              // ref={isCarousel}
              data={series?.results}
              renderItem={renderImage}
              sliderWidth={windowWidth - 10}
              itemWidth={300}
              loop={true}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
});
