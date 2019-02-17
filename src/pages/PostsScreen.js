import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

export default class PostsScreen extends Component {
  static navigationOptions = {
    title: "Posts"
  };

  render() {
    return (
      <View style={styles.postView}>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
