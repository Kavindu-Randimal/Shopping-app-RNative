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
import RadioButtonRN from "radio-buttons-react-native";

function CheckoutScreen({ navigation }) {
  const data = [
    {
      label: "Cash on delivery",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total</Text>
      <Text style={styles.amount}>$ 300.00</Text>
      <Text style={styles.total}>Payment method</Text>

      <RadioButtonRN
        style={styles.radiobutto}
        data={data}
        selectedBtn={(e) => console.log(e)}
      />

      <Pressable style={styles.button} onPress={payNow}>
        <Text style={styles.text}>Pay Now</Text>
      </Pressable>
    </View>
  );
}

const payNow = () => {
  Alert.alert("Payment successfull");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: "center",
    alignContent: "center",
    fontSize: 10,
  },
  total: {
    fontSize: 20,
    padding: 10,
    fontFamily: "American Typewriter",
  },
  amount: {
    fontSize: 50,
    textAlign: "center",
    padding: 40,
    fontFamily: "American Typewriter",
  },
  radiobutto: {
    fontFamily: "American Typewriter",
    fontSize: 100,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#6558f5",
    width: "90%",
    height: 42,
    marginHorizontal: "5%",
    marginTop: "75%",
  },
  text: {
    fontSize: 18,
    letterSpacing: 0.25,
    color: "white",
  },
});

export default CheckoutScreen;
