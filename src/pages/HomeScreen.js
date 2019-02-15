import React, { Component } from "react";

import { View, Text, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("SignInScreen")}
          title="Go to Sign In Screen"
        />
      </View>
    );
  }
}
