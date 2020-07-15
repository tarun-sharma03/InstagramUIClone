import * as React from "react";
import { Appbar } from "react-native-paper";
import { Entypo, Feather } from "@expo/vector-icons";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default class MyComponent extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async LoadFontHandler() {
    await Font.loadAsync({
      AlexBrush: require("./../assets/fonts/AlexBrush-Regular.ttf"),
      DancingScript: require("./../assets/fonts/DancingScript-Regular.ttf"),
    });
    this.setState({
      fontsLoaded: true,
    });
  }

  componentDidMount() {
    this.LoadFontHandler();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Appbar.Header style={{ backgroundColor: "rgb(26, 26, 26)" }}>
          <Appbar.Action
            icon={() => <Feather name="camera" size={25} color="white" />}
          />
          <Appbar.Content
            title="Instagram"
            style={{ alignItems: "center" }}
            titleStyle={{ fontFamily: "DancingScript" }}
          />
          <Appbar.Action
            icon={() => (
              <Entypo
                name="direction"
                size={25}
                color="white"
                style={{ marginRight: -5 }}
              />
            )}
          />
        </Appbar.Header>
      );
    } else {
      return <AppLoading />;
    }
  }
}
