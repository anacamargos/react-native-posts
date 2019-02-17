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
          <Text style={styles.firstText}>Go to PostsScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.firstButton}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        >
          <Text style={styles.firstText}>Sign out</Text>
        </TouchableOpacity>
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
    alignItems: "center",
    marginTop: 10
  },
  firstText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF"
  },
  signinView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa"
  }
});
