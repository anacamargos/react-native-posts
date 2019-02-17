import React from "react";
import Routes from "./src/routes";

import { StatusBar } from "react-native";
StatusBar.setBackgroundColor("#DA552F");
StatusBar.setBarStyle("light-content");

export default class App extends React.Component {
  render() {
    return <Routes />;
  }
}
