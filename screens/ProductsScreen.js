import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  onPress,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Product } from "../components/Product.js";

function ProductsScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <Text>Loading ...</Text>
      ) : (
        data.map((post) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { id: post.id })}
          >
            <View key={post.id}>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.description}>{post.description}</Text>
              <Image style={styles.productImage} source={post.image}></Image>
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
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

export default ProductsScreen;
