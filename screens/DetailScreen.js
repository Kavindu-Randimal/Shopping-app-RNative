import React, { useState, useEffect, Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  onPress,
  title,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import iphonexs from "../assets/iphonexs.jpeg";
import Slider from "@react-native-community/slider";
import Slick from "react-native-slick";

const DetailsScreen = ({ route }) => {
  const { ProductId } = route.params;

  const [range, setRange] = useState("10");
  const [sliding, setSliding] = useState("1");

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  console.log(data);

  const url = "https://dummyjson.com/products/1";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData([json]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <Text>Loading ...</Text>
      ) : (
        data.map((post) => (
          <View key={post.id}>
            {/* <Image style={styles.productImage} source={post.thumbnail}></Image>
             */}
            <Slick style={styles.wrapper} showsButtons={true}>
              <View style={styles.slide}>
                <Image
                  style={styles.productImage}
                  source={post.images[0]}
                ></Image>
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.productImage}
                  source={post.images[1]}
                ></Image>
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.productImage}
                  source={post.images[0]}
                ></Image>
              </View>
            </Slick>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.description}>{post.description}</Text>
            <View style={styles.rowText}>
              <Text style={styles.price}>Price</Text>
              <Text style={styles.price}>{post.price}$</Text>
            </View>
            <View style={styles.rowText}>
              <Text style={styles.feedback}>Feedback</Text>
              <Text style={styles.feedback}>{post.rating}</Text>
            </View>
            <View style={styles.rowText}>
              <Text style={styles.quantity}>Quantity</Text>
            </View>

            <View style={styles.rowText}>
              <Text style={styles.feedback}>{sliding}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={10}
                value={1}
                onValueChange={(value) => setRange(parseInt(value))}
                onSlidingStart={() => setSliding("10")}
                onSlidingComplete={() => setSliding("1")}
              ></Slider>
              <Text style={styles.feedback}>{range}</Text>
            </View>
            <Pressable style={styles.button} onPress={openAlert}>
              <Text style={styles.text}>Add To Cart</Text>
            </Pressable>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const openAlert = () => {
  Alert.alert("Product Added to cart");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: "center",
    alignContent: "center",
    fontSize: 10,
  },

  title: {
    marginTop: "10%",
    fontSize: 28,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "8%",
    fontWeight: "bold",
  },

  description: {
    marginTop: "1%",
    fontSize: 18,
    fontFamily: "American Typewriter",
    paddingLeft: "10%",
  },

  slider: {
    alignItems: "center",
    alignContent: "center",
    width: 180,
  },
  price: {
    marginTop: "15%",
    fontSize: 18,
    fontFamily: "American Typewriter",
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  feedback: {
    marginTop: "5%",
    fontSize: 18,
    fontFamily: "American Typewriter",
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  quantity: {
    flex: 1,
    alignContent: "center",
    textAlign: "center",
    marginTop: "15%",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "American Typewriter",
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

  rowText: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  hrPoint: {
    marginHorizontal: 35,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#6558f5",
    width: "90%",
    height: 42,
    marginHorizontal: "5%",
    marginTop: "15%",
  },
  text: {
    fontSize: 18,
    letterSpacing: 0.25,
    color: "white",
  },

  wrapper: {
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 25,
  },
});
export default DetailsScreen;
