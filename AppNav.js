import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ArticleScreen from "./screens/ArticleScreen";

class AppNav extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
export default AppNav;

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerStyle: { height: 40 }
      };
    }
  }
});

const CategoriesStack = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Categories",
        headerStyle: { height: 40 }
      };
    }
  }
});

const SearchStack = createStackNavigator({
  Profile: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Search",
        headerStyle: { height: 40 }
      };
    }
  },
  Article: {
    screen: ArticleScreen
  }
});
const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Settings",
        headerStyle: { height: 40 }
      };
    }
  }
});

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Home") {
    iconName = `ios-home`;
    // We want to add badges to home tab icon
  } else if (routeName === "Categories") {
    iconName = `ios-albums`;
  } else if (routeName === "Search") {
    iconName = `ios-search`;
  } else if (routeName === "Settings") {
    iconName = `ios-settings`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Categories: CategoriesStack,
    Search: SearchStack,
    Settings: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        header: null,
        headerTitle: routeName,
        tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor)
      };
    },
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "#505050",
      safeAreaInset: { bottom: "never", top: "never" },
      showIcon: true,
      style: {
        borderTopWidth: 2,
        borderTopColor: "black"
      }
    }
  }
);

const AppContainer = createAppContainer(DashboardTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  safeArea: {
    flex: 1
  }
});
