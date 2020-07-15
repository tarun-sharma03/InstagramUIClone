import React from "react";
import { View, Image, Text } from "react-native";
import { Card } from "react-native-paper";
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
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "grey",
                  marginLeft: -5,
                  marginRight: 5,
                }}
              />
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

          <FontAwesome
            name="bookmark-o"
            size={30}
            color="white"
            style={{ marginTop: 7, marginLeft: 230 }}
          />
        </View>
      </View>
    );
  }
}
