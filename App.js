import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "./components/BottomBar";
import Header from "./components/Header";
import { View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <BottomNav />
      </View>
    );
  }
}
