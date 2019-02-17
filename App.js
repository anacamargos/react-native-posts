import React from "react";
import Routes from "./src/routes";

import { StatusBar } from "react-native";
StatusBar.setBackgroundColor("#0589e1");
StatusBar.setBarStyle("light-content");

export default class App extends React.Component {
  render() {
    return <Routes />;
  }
}
