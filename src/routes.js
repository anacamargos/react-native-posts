import { createStackNavigator } from "react-navigation";

import HomeScreen from "./pages/HomeScreen";
import PostsScreen from "./pages/PostsScreen";
import SignInScreen from "./pages/SignInScreen";

export default createStackNavigator(
  {
    HomeScreen,
    SignInScreen,
    PostsScreen
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#DA552F"
      },
      headerTintColor: "#FFF"
    }
  }
);
