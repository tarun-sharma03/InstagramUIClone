import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Search") {
              iconName = focused ? "search1" : "search1";
            } else if (route.name === "Add") {
              iconName = focused ? "plussquare" : "plussquareo";
            } else if (route.name === "Activity") {
              iconName = focused ? "heart" : "hearto";
            } else if (route.name === "Profile") {
              iconName = focused ? "user" : "user";
            }

            return <AntDesign name={iconName} color={color} size={30} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "rgb(179,179,179)",
          inactiveBackgroundColor: "rgb(26, 26, 26)",
          activeBackgroundColor: "rgb(26, 26, 26)",
          showLabel: false,
        }}
      >
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Search" component={HomeScreen} />
        <BottomTab.Screen name="Add" component={HomeScreen} />
        <BottomTab.Screen name="Activity" component={HomeScreen} />
        <BottomTab.Screen name="Profile" component={HomeScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
