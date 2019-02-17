import React, { Component } from "react";
import { View, Button } from "react-native";

export default class PostsScreen extends Component {
  static navigationOptions = {
    title: "Posts"
  };

  render() {
    return (
      <View>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}
