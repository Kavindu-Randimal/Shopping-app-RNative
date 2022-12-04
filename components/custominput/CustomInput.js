import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: 40,

    padding: 7,

    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    marginVertical: "2%",

    margin: "5%",
  },

  input: {
    padding: 5,
  },
});
export default CustomInput;
