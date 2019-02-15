import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class SignInScreen extends Component {
  render() {
    return (
      <View>
        <Text>SignInScreen</Text>
        <Button>Go to PostsScreen</Button>
        <Button>Sign out</Button>
      </View>
    );
  }
}
