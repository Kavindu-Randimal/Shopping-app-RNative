import react, { createContext } from "react";
// import axios from axios;
import axios from "axios";
import { BASE_URL } from "../config.js";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const login = (username, password) => {
    axios
      .post(`${BASE_URL}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`login error`);
      });
  };
  return <AuthContext.Provider value={login}>{children}</AuthContext.Provider>;
};
