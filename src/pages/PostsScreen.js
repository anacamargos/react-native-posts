import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class PostsScreen extends Component {
  render() {
    return (
      <View>
        <Text>PostsScreen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}
