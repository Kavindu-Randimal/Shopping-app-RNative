import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen.js";
import ProductsScreen from "../screens/ProductsScreen.js";
import ProfileScreen from "../screens/ProfileScreen.js";
import DetailsScreen from "../screens/DetailScreen.js";
import CartScreen from "../screens/CartScreen.js";
// import CheckoutScreen from "../screens/checkoutscreen/CheckoutScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckoutScreen from "../screens/CheckoutScreen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Products") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "ios-cart" : "ios-cart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6558f5",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ tabBarButton: () => null, tabBarVisible: false }}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{ tabBarButton: () => null, tabBarVisible: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
