import { StyleSheet, Text, View, Image, Button,Alert } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SliderImage = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() =>{
          switch (data.media_type) {
              case "movie":
                navigation.navigate("MovieDetail", {
                movieData: data,
              })
                break;
              case 'series':
                navigation.navigate("SeriesDetail", {
                seriesData: data,
              })
                break;
              // case 'similar_movie':
              //   navigation.navigate("SimilarMovieScreen")
              //   break;
              default:
                break;
            }
        }
          // data.media_type === "movie"
          // //   ? navigation.navigate("MovieDetail", {
          //       movieData: data,
          //     })
          //   : navigation.navigate("SeriesDetail", {
          //       seriesData: data,
          //     })
              
        }
      >
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/w500" + data.poster_path || [],
          }}
          style={styles.imgStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SliderImage;

const styles = StyleSheet.create({
  imgStyle: {
    height: 200,
    width: 300,
    borderRadius: 10,
    resizeMode: "stretch",
  },
});
