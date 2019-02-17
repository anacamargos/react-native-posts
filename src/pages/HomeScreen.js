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
    borderColor: "#da552f",
    backgroundColor: "#da552f",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
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
