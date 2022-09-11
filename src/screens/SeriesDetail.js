import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import Carousel from "react-native-snap-carousel";
import EpisodeSliderImage from "../components/EpisodeSliderImage";
import DropDownPicker from "react-native-dropdown-picker";

const SeriesDetail = ({ route, navigation }) => {
  const { seriesData } = route.params;
  console.log("data==", seriesData.id);
  const dispatch = useDispatch();

  const trailerDetails = useSelector((state) => state.rootReducer.trailers);
  const { trailer } = trailerDetails;

  const tvTrailerDetails = useSelector((state) => state.rootReducer.tvTrailers);
  const { tvTrailer } = tvTrailerDetails;

  const playDetails = useSelector((state) => state.rootReducer.playData);
  const { isLoading, play } = playDetails;

  const seriesDetails = useSelector((state) => state.rootReducer.seriesDetail);
  const {
    isSeriesDetailLoading,
    singleSeriesDetail: { number_of_seasons, seasons, status },
  } = seriesDetails;
  // console.log(number_of_seasons);
  // console.log(seasons);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [items, setItems] = useState([]);
  var template = [];
  if (seasons !== undefined) {
    if (seasons[0].season_number !== 1) {
      seasons.shift();
    }
    seasons.map((e) => {
      template.push({
        id: e.season_number,
        label: "Season " + e.season_number,
        value: e.season_number,
      });
    });
  }
  console.log("temq=", template);
  // const renderImage = ({ item, index }) => {
  //   return <EpisodeSliderImage data={item} />;
  // };

  var gen;
  const getGenres = () => {
    var res = play.genres.filter((ele) =>
      seriesData.genre_ids.includes(ele.id)
    );
    return res;
  };
  if (isLoading === false) {
    gen = getGenres();
  }
  useEffect(() => {
    navigation.setOptions({ title: seriesData.name });
    dispatch(getPlaydata());
    dispatch(getTrailerdata(seriesData.id));
    dispatch(getTvTrailerdata(seriesData.id));
    dispatch(getSeriesDetail(seriesData.id));
    return () => {
      dispatch(resetTrailerId());
      dispatch(resetTvTrailerId());
    };
  }, [dispatch]);

  return (
    <View>
      <ScrollView
        nestedScrollEnabled={true}
        scrollViewProps={{
          decelerationRate: "fast",
        }}
      >
        <View>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{
                uri:
                  "https://image.tmdb.org/t/p/w500" + seriesData.poster_path ||
                  [],
              }}
              resizeMode="cover"
              style={styles.img}
            >
              {tvTrailer === undefined ? (
                <></>
              ) : (
                <YoutubePlayer height={221} play={false} videoId={tvTrailer} />
              )}
            </ImageBackground>
          </View>
          <Text style={styles.title}>{seriesData.name}</Text>
          <Text style={styles.subtitle}>
            {seriesData.first_air_date.split("-")[0] +
              " | " +
              seriesData.media_type.charAt(0).toUpperCase() +
              seriesData.media_type.slice(1) +
              " | " +
              Math.round(seriesData.vote_average * 10) / 10}
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

          <Text style={styles.subtitle}>{seriesData.overview}</Text>
        </View>
        <View>
          {isSeriesDetailLoading === false ? (
            <>
              <DropDownPicker
                open={open}
                value={value}
                items={template}
                setOpen={setOpen}
                setValue={setValue}
                // setItems={setItems}
                autoScroll={true}
                dropDownDirection="AUTO"
                style={{
                  width: 150,
                  marginLeft: 10,
                }}
                dropDownContainerStyle={{
                  width: 150,
                  marginLeft: 10,
                }}
                selectedItemLabelStyle={{
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
                selectedItemContainerStyle={{
                  backgroundColor: "grey",
                }}
                listMode="SCROLLVIEW"
              />
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SeriesDetail;

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
