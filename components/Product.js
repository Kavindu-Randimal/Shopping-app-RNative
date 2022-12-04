import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export function Product({ title, description, image, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.description}>{post.description}</Text>
        <Image style={styles.productImage} source={post.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifycontent: "center",
    alignContent: "center",
    fontSize: 10,
  },

  title: {
    marginTop: "10%",
    fontSize: 25,
    fontFamily: "American Typewriter",
    paddingLeft: "5%",
  },

  description: {
    marginTop: "1%",
    fontSize: 18,
    fontFamily: "American Typewriter",
    paddingLeft: "5%",
  },

  productImage: {
    flex: 1,
    height: 200,
    width: 320,
    marginHorizontal: "7%",
    marginTop: "8%",
    borderWidth: 0.2,
    borderColor: "black",
  },
});
