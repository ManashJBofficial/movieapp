import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EpisodeSliderImage = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity>
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

export default EpisodeSliderImage;

const styles = StyleSheet.create({
  imgStyle: {
    height: 200,
    width: 300,
    borderRadius: 10,
    resizeMode: "stretch",
  },
});
