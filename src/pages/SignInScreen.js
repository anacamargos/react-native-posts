import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: "Sign In"
  };

  render() {
    return (
      <View style={styles.signinView}>
        <Button
          style={styles.firstButton}
          title="Go to PostsScreen"
          onPress={() => this.props.navigation.navigate("PostsScreen")}
        />
        <Button
          style={styles.secondButton}
          title="Sign out"
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstButton: {
    flex: 1
  },
  secondButton: {},
  signinView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
