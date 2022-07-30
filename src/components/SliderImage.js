import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SliderImage = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SingleMovie", {
            title: data,
          })
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
    height: 150,
    width: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
