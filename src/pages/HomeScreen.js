import React, { Component } from "react";

import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={styles.homeView}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => this.props.navigation.navigate("SignInScreen")}
        >
          <Text style={styles.homeText}>Go to Sign in Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeButton: {
    height: 42,
    width: 200,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#0589e1",
    backgroundColor: "#0589e1",
    justifyContent: "center",
    alignItems: "center"
  },
  homeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  homeText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF"
  }
});
