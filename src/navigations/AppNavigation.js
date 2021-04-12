import React from "react";
import { Animated, Easing, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  createDrawerNavigator,
} from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from "react-navigation-redux-helpers";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import RegistrationProfileTypeScreen from "../screens/RegistrationProfileTypeScreen";
import RegistrationFingerScreen from "../screens/RegistrationFingerScreen";
import RegistrationPersonalInfoScreen from "../screens/RegistrationPersonalInfo";
import RegistrationPhotoScreen from "../screens/RegistrationPhoto";
import AuthorizationWelcome from "../screens/AuthorizationWelcome";
import ContactsScreen from "../screens/ContactsScreen";
import FeedScreen from "../screens/FeedScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import GlobalScreen from "../screens/GlobalScreen";
import MessagesScreen from "../screens/MessagesScreen";
import { AppIcon, AppStyles } from "../AppStyles";
import { Configuration } from "../Configuration";
import DrawerContainer from "../components/DrawerContainer";

import MainSettingsScreen from "../screens/Settings/MainSettingsScreen";
import SettingsAccount from "../screens/Settings/Account";
import SettingsSecurity from "../screens/Settings/Security";
import SettingsEmail from "../screens/Settings/Email";
import SettingsPassword from "../screens/Settings/Password";
import SettingsNotifications from "../screens/Settings/Notifications";

import TabbarFeedActive from "../../assets/icons/tabbarFeedActive.svg";
import TabbarFeedInactive from "../../assets/icons/tabbarFeedInactive.svg";
import TabbarGlobalActive from "../../assets/icons/tabbarGlobalActive.svg";
import TabbarGlobalInactive from "../../assets/icons/tabbarGlobalInactive.svg";
import TabbarProfileActive from "../../assets/icons/tabbarProfileActive.svg";
import TabbarProfileInactive from "../../assets/icons/tabbarProfileInactive.svg";
import TabbarMessagesActive from "../../assets/icons/tabbarMessagesActive.svg";
import TabbarMessagesInactive from "../../assets/icons/tabbarMessagesInactive.svg";
import TabbarNewVideo from "../../assets/icons/tabbarNewVideo.svg";


import { View } from "react-native";

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

const middleware = createReactNavigationReduxMiddleware(
  // "root",
  state => state.nav
);

// login stack
const LoginStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Registration: { screen: RegistrationScreen },
    RegistrationFinger: { screen: RegistrationFingerScreen },
    RegistrationProfileType: { screen: RegistrationProfileTypeScreen },
    RegistrationPersonalInfo: { screen: RegistrationPersonalInfoScreen },
    RegistrationPhoto: { screen: RegistrationPhotoScreen },
    AuthorizationWelcome: { screen: AuthorizationWelcome }
  },
  {
    initialRouteName: "AuthorizationWelcome",
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "red",
      headerTitleStyle: styles.headerTitleStyle
    }),
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);

const MessagesStack = createStackNavigator(
  {
    Messages: { screen: MessagesScreen },
  },
  {
    initialRouteName: "Messages",
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "red",
      headerTitleStyle: styles.headerTitleStyle
    }),
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);


const SettingsStack = createStackNavigator(
  {
    MainSettings: { screen: MainSettingsScreen },
    SettingsAccount: { screen: SettingsAccount },
    SettingsSecurity: { screen: SettingsSecurity },
    SettingsEmail: { screen: SettingsEmail },
    SettingsPassword: { screen: SettingsPassword },
    SettingsNotifications: { screen: SettingsNotifications },
  },
  {
    initialRouteName: "MainSettings",
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "red",
      headerTitleStyle: styles.headerTitleStyle
    }),
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);


const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    headerLayoutPreset: "center",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "red",
      headerTitleStyle: styles.headerTitleStyle
    }),
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);

const ContactsStack = createStackNavigator(
  {
    Contacts: { screen: ContactsScreen }
  },
  {
    initialRouteName: "Contacts",
    headerMode: "float",
    headerLayoutPreset: "center",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "red",
      headerTitleStyle: styles.headerTitleStyle
    }),
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);


const FeedStack = createStackNavigator(
  {
    Feed: { screen: FeedScreen }
  },
  {
    initialRouteName: "Feed",
    headerMode: "float",

    headerLayoutPreset: "center",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "red",
      headerTitleStyle: styles.headerTitleStyle
    }),
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);

const GlobalStack = createStackNavigator(
  {
    Global: { screen: GlobalScreen }
  },
  {
    initialRouteName: "Global",
    headerMode: "none",

    headerLayoutPreset: "center",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "red",
      headerTitleStyle: styles.headerTitleStyle
    }),
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);

const FeedbackStack = createStackNavigator(
  {
    Feedback: { screen: FeedbackScreen }
  },
  {
    initialRouteName: "Feedback",
    headerMode: "float",
    headerLayoutPreset: "center",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "red",
      headerTitleStyle: styles.headerTitleStyle
    }),
    cardStyle: { backgroundColor: "#FFFFFF" }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) =>
          <View style={styles.smallTabbarIconContainer}>
            {(() => {
              if (focused) {
                return <TabbarProfileActive />
              }
              return <TabbarProfileInactive />
            })()}
          </View>
      }
    },
    Messages: {
      screen: ContactsStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) =>
          <View style={styles.smallTabbarIconContainer}>
            {(() => {
              if (focused) {
                return <TabbarMessagesActive />
              }
              return <TabbarMessagesInactive />
            })()}
          </View>
      }
    },
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) =>
          <View style={styles.smallTabbarIconContainer}>
            {(() => {
              if (focused) {
                return <TabbarFeedActive />
              }
              return <TabbarFeedInactive />
            })()}
          </View>
      }
    },
    Global: {
      screen: GlobalStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) =>
          <View style={styles.smallTabbarIconContainer}>
            {(() => {
              if (focused) {
                return <TabbarGlobalActive width="25"/>
              }
              return <TabbarGlobalInactive width="25"/>
            })()}
          </View>
      }
    },
    NewVideo: {
      screen: FeedbackStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) =>
          <View style={styles.hugeTabbarIconContainer}>
            <TabbarNewVideo />
          </View>
      }
    }
  },
  {
    order: ["Feed", "Global", "NewVideo", "Messages", "Home"],
    navigationOptions: ({ navigation }) => ({
    }),
    tabBarOptions: {
      activeTintColor: AppStyles.color.tint,
      inactiveTintColor: "gray",
      showIcon: true,
      showLabel: false,
      style: {
        height: Configuration.home.tab_bar_height
      }
    }
  }
);

// drawer stack
const DrawerStack = createDrawerNavigator(
  {
    Tab: TabNavigator
  },
  {
    drawerPosition: "left",
    initialRouteName: "Tab",
    drawerWidth: 200,
    contentComponent: DrawerContainer
  }
);

// Manifest of possible screens
const RootNavigator = createStackNavigator(
  {
    LoginStack: { screen: LoginStack },
    DrawerStack: { screen: DrawerStack },
    MessagesStack: { screen: MessagesStack },
    SettingsStack: { screen: SettingsStack }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "DrawerStack",
    transitionConfig: noTransitionConfig,
    navigationOptions: ({ navigation }) => ({
      color: AppStyles.color.tint
    })
  }
);

const AppWithNavigationState = createReduxContainer(RootNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    color: "black",
    flex: 1,
    fontFamily: AppStyles.fontName.main
  },
  smallTabbarIconContainer: {
    flex: 1,
    justifyContent: "center"
  },
  hugeTabbarIconContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

});

export { RootNavigator, AppNavigator, middleware };
