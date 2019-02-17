import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import api from "../services/api";

export default class PostsScreen extends Component {
  static navigationOptions = {
    title: "Posts"
  };

  state = {
    documents: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const response = await api.get("/posts");
    //console.log(response.data);

    const documents = response.data;
    //console.log(documents);

    this.setState({ documents });
    //console.log(this.state.documents);
  };

  renderItem = ({ item }) => (
    <View style={styles.itemView}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.postView}>
        <TouchableOpacity
          style={styles.firstButton}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        >
          <Text style={styles.firstText}>Go to Home</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.documents}
          renderItem={this.renderItem}
          key={item => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa"
  },
  list: {
    padding: 20
  },
  firstButton: {
    borderWidth: 2,
    borderColor: "#0589e1",
    height: 42,
    width: 200,
    borderRadius: 4,
    backgroundColor: "#0589e1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  firstText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF"
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  postBody: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },
  itemView: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  }
});
