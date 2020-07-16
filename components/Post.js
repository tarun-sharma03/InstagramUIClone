import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Card, Avatar } from "react-native-paper";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";

export default class Post extends React.Component {
  render() {
    return (
      <View>
        <Card style={{ height: 70, backgroundColor: "rgb(26, 26, 26)" }}>
          <Card.Title
            title="tarun_sharma03"
            titleStyle={{ fontSize: 15, color: "white" }}
            left={() => (
              <Avatar.Image size={40} source={require("../assets/face.jpg")} />
            )}
            right={() => (
              <Entypo name="dots-three-vertical" size={24} color="white" />
            )}
          />
        </Card>
        <View
          style={{
            alignContent: "center",
            backgroundColor: "rgb(26, 26, 26)",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: 500,
            }}
            source={{
              uri:
                "https://lh3.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <AntDesign
              name="heart"
              size={30}
              color="red"
              style={{ marginTop: 10, marginLeft: 20, marginRight: 10 }}
            />
            <FontAwesome
              name="comment-o"
              size={30}
              color="white"
              style={{ marginTop: 7, marginRight: 10 }}
            />

            <Entypo
              name="direction"
              size={30}
              color="white"
              style={{ marginTop: 7, marginRight: 10 }}
            />
          </View>
          <View>
            <FontAwesome
              name="bookmark-o"
              size={30}
              color="white"
              style={{ marginTop: 7, marginRight: 10 }}
            />
          </View>
        </View>
        <Text style={styles.text}>Liked By You and 10,000 others</Text>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={{ ...styles.text, fontWeight: "bold" }}>
            tarun_sharma03
          </Text>
          <Text
            style={{ ...styles.text, flexWrap: "wrap", marginLeft: 5, flex: 1 }}
          >
            Hey Guys, Tarun here! Testing the working of Post part!! Right now i
            can't figure out how to adjust this text under the username. If you
            know, please help me!!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { color: "white", fontSize: 15, marginLeft: 20, marginTop: 5 },
});
