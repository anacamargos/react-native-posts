import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Button } from "react-native";

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: "Sign In"
  };

  render() {
    return (
      <View style={styles.signinView}>
        <TouchableOpacity
          style={styles.firstButton}
          onPress={() => this.props.navigation.navigate("PostsScreen")}
        >
          <Text>Go to PostsScreen</Text>
        </TouchableOpacity>
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
    borderWidth: 2,
    borderColor: "#0589e1",
    height: 42,
    width: 200,
    borderRadius: 5,
    backgroundColor: "#0589e1",
    justifyContent: "center",
    alignItems: "center"
  },
  secondButton: {},
  signinView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
