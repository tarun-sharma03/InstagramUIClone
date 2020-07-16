import * as React from "react";
import { Appbar, Button } from "react-native-paper";
import {
  Entypo,
  AntDesign,
  Ionicons,
  FontAwesome5,
  Octicons,
} from "@expo/vector-icons";
import { View, Image, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export default class MyComponent extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "rgb(26, 26, 26)", flex: 1 }}>
        <Appbar.Header style={{ backgroundColor: "rgb(26, 26, 26)" }}>
          <Appbar.Content title="tarun_sharma03" />
          <Appbar.Action
            icon={() => (
              <Entypo
                name="menu"
                size={25}
                color="white"
                style={{ marginRight: -5 }}
              />
            )}
          />
        </Appbar.Header>
        <View style={{ marginTop: 20, marginLeft: 10, flexDirection: "row" }}>
          <View>
            <Image
              style={{ width: 70, height: 70, borderRadius: 35 }}
              source={require("../assets/face.jpg")}
            />
          </View>
          <View style={{ marginLeft: 40 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
              100
            </Text>
            <Text style={{ textAlign: "center", color: "white" }}>Posts</Text>
          </View>
          <View style={{ marginLeft: 40 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
              10M
            </Text>
            <Text style={{ textAlign: "center", color: "white" }}>
              Followers
            </Text>
          </View>
          <View style={{ marginLeft: 30, alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              10
            </Text>
            <Text style={{ color: "white" }}>Following</Text>
          </View>
        </View>
        <View
          style={{ marginTop: 20, marginLeft: 10, alignContent: "flex-start" }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>Tarun Sharma</Text>
            <Octicons
              name="verified"
              size={15}
              color="skyblue"
              style={{ marginLeft: 5 }}
            />
          </View>
          <Text style={styles.text}>Tarun Kumar Dixit</Text>
          <Text style={styles.text}>You know me!!</Text>
        </View>
        <View>
          <Button
            mode="contained"
            style={{
              margin: 20,
              borderRadius: 10,
              height: 35,
              backgroundColor: "black",
            }}
          >
            Edit Profile
          </Button>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <View>
            <AntDesign name="pluscircleo" size={50} color="white" />
            <Text style={{ ...styles.text, textAlign: "center" }}>New</Text>
          </View>
          <View>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "black",
                marginLeft: 15,
              }}
            />
            <Text
              style={{ ...styles.text, textAlign: "center", marginLeft: 7 }}
            >
              Old
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View style={{ flex: 0.5, alignItems: "center" }}>
            <Ionicons name="md-grid" size={30} color="white" />
          </View>
          <View style={{ flex: 0.5, alignItems: "center" }}>
            <FontAwesome5 name="user-circle" size={30} color="white" />
          </View>
        </View>

        <ScrollView>
          <View style={{ marginTop: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: "33%", height: 100, margin: 2 }}
                source={{
                  uri:
                    "https://c8.alamy.com/comp/PC8ERD/demo-editable-flat-vector-icon-square-web-button-blue-computer-and-smartphone-application-sign-in-eps-10-PC8ERD.jpg",
                }}
              />
              <Image
                style={{ width: "33%", height: 100, margin: 2 }}
                source={{
                  uri:
                    "https://c8.alamy.com/comp/PC8ERD/demo-editable-flat-vector-icon-square-web-button-blue-computer-and-smartphone-application-sign-in-eps-10-PC8ERD.jpg",
                }}
              />
              <Image
                style={{ width: "33%", height: 100, margin: 2 }}
                source={{
                  uri:
                    "https://c8.alamy.com/comp/PC8ERD/demo-editable-flat-vector-icon-square-web-button-blue-computer-and-smartphone-application-sign-in-eps-10-PC8ERD.jpg",
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: "33%", height: 100, margin: 2 }}
                source={{
                  uri:
                    "https://c8.alamy.com/comp/PC8ERD/demo-editable-flat-vector-icon-square-web-button-blue-computer-and-smartphone-application-sign-in-eps-10-PC8ERD.jpg",
                }}
              />
              <Image
                style={{ width: "33%", height: 100, margin: 2 }}
                source={{
                  uri:
                    "https://c8.alamy.com/comp/PC8ERD/demo-editable-flat-vector-icon-square-web-button-blue-computer-and-smartphone-application-sign-in-eps-10-PC8ERD.jpg",
                }}
              />
              <Image
                style={{ width: "33%", height: 100, margin: 2 }}
                source={{
                  uri:
                    "https://c8.alamy.com/comp/PC8ERD/demo-editable-flat-vector-icon-square-web-button-blue-computer-and-smartphone-application-sign-in-eps-10-PC8ERD.jpg",
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: "33%", height: 100, margin: 2 }}
                source={{
                  uri:
                    "https://c8.alamy.com/comp/PC8ERD/demo-editable-flat-vector-icon-square-web-button-blue-computer-and-smartphone-application-sign-in-eps-10-PC8ERD.jpg",
                }}
              />
              <Image
                style={{ width: "33%", height: 100, margin: 2 }}
                source={{
                  uri:
                    "https://c8.alamy.com/comp/PC8ERD/demo-editable-flat-vector-icon-square-web-button-blue-computer-and-smartphone-application-sign-in-eps-10-PC8ERD.jpg",
                }}
              />
              <Image
                style={{ width: "33%", height: 100, margin: 2 }}
                source={{
                  uri:
                    "https://c8.alamy.com/comp/PC8ERD/demo-editable-flat-vector-icon-square-web-button-blue-computer-and-smartphone-application-sign-in-eps-10-PC8ERD.jpg",
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
