import React, { useState, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomInput from "../components/custominput/CustomInput.js";
import CustomButton from "../components/custombutton/CustomButton.js";
import { AuthContext } from "../context/AuthContext.js";

function LoginScreen(navigation) {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const [message, setMessage] = useState("");

  // const val = useContext(AuthContext);

  // const { login } = useContext(AuthContext);

  const url = "https://dummyjson.com/auth/login";
  const login = async () => {
    if (username != "" && password != "") {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((resData) => {
          alert(resData.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Practical Test</Text>

      <CustomInput
        style={styles.textInput}
        placeholder="username"
        value={username}
        onchangeText={(text) => setUserName(text)}
      ></CustomInput>

      <CustomInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="password"
        value={password}
        onchangeText={(text) => setPassword(text)}
      ></CustomInput>

      <CustomButton
        onPress={() => {
          login();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifycontent: "center",
    alignContent: "center",
    fontSize: 10,
  },

  topic: {
    marginTop: "50%",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "American Typewriter",
    marginVertical: "30%",
  },
});
export default LoginScreen;
