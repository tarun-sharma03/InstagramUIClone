import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "rgb(26, 26, 26)", marginBottom: 5 }}>
        <ScrollView horizontal="true">
          <View style={styles.rings} />
          <View style={styles.rings} />
          <View style={styles.rings} />
          <View style={styles.rings} />
          <View style={styles.rings} />
          <View style={styles.rings} />
          <View style={styles.rings} />
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rings: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "grey",
    padding: 20,
    marginRight: 10,
    marginBottom: 10,
  },
});
