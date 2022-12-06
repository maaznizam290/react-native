import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./../screens/login";
import FakeApi from "./../screens/fakeapi";
import Signup from "./../screens/signup";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from "../screens/product";
const Tab = createBottomTabNavigator();
function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FakeApi"
            component={FakeApi}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
       
      </NavigationContainer>
    </>
  )
}
export default Navigation; 