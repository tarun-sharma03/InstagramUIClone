import React from "react";
import ChatHead from "./ChatHeads";
import { View, ScrollView } from "react-native";
import Post from "./Post";
import Header from "./Header";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "rgb(26, 26, 26)" }}>
        <Header />
        <ScrollView>
          <ChatHead />
          <Post />
          <Post />
        </ScrollView>
      </View>
    );
  }
}
