import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class SignInScreen extends Component {
  render() {
    return (
      <View>
        <Text>SignInScreen</Text>
        <Button
          title="Go to PostsScreen"
          onPress={() => this.props.navigation.navigate("PostsScreen")}
        />
        <Button
          title="Sign out"
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}
