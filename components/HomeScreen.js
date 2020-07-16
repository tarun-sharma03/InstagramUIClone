import { StatusBar } from "expo-status-bar";
import React from "react";
import ChatHead from "./ChatHeads";
import { View, ScrollView, Image, Text } from "react-native";
import Post from "./Post";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "rgb(26, 26, 26)" }}>
        <ScrollView>
          <ChatHead />
          <Post />
          <Post />
        </ScrollView>
      </View>
    );
  }
}
