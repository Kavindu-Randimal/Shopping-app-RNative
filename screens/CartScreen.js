import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  onPress,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import iphonexs from "../assets/iphonexs.jpeg";

function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.rowText}>
          <Image style={styles.productImage} source={iphonexs}></Image>
          <View style={styles.comp}>
            <View style={styles.rowText}>
              <View style={styles.columText}>
                <Text style={styles.title}>iPhone 9</Text>
                <Text style={styles.qty}>quantity: 1</Text>
              </View>
              <View style={styles.columText}>
                <Text style={styles.price}>100$</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.rowText}>
          <Image style={styles.productImage} source={iphonexs}></Image>
          <View style={styles.comp}>
            <View style={styles.rowText}>
              <View style={styles.columText}>
                <Text style={styles.title}>iPhone 9</Text>
                <Text style={styles.qty}>quantity: 1</Text>
              </View>
              <View style={styles.columText}>
                <Text style={styles.price}>100$</Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("CheckoutScreen")}
        >
          <Text style={styles.btntext}>Checkout</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: "center",
    alignContent: "center",
    fontSize: 10,
  },

  title: {
    marginTop: "25%",
    fontSize: 18,
    fontFamily: "American Typewriter",
    paddingLeft: "8%",
    fontWeight: "bold",
  },
  comp: {
    marginTop: "10%",
  },
  qty: {
    marginTop: "25%",
    fontSize: 13,
    fontFamily: "American Typewriter",
    paddingLeft: "8%",
  },

  price: {
    marginTop: "35%",
    fontSize: 22,
    fontFamily: "American Typewriter",
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  delete: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productImage: {
    flex: 1,
    height: 100,
    width: 150,
    marginHorizontal: "2%",
    marginTop: "13%",
    borderWidth: 0.2,
    borderColor: "black",
  },

  rowText: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  columText: {
    flexDirection: "column",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
  },

  hrPoint: {
    marginHorizontal: 5,
  },

  text: {
    fontSize: 18,
    letterSpacing: 0.25,
    color: "white",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#6558f5",
    width: "90%",
    height: 42,
    marginHorizontal: "5%",
    marginTop: "40%",
  },
  btntext: {
    fontSize: 18,
    letterSpacing: 0.25,
    color: "white",
  },
});
export default CartScreen;
