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
  reduxifyNavigator
} from "react-navigation-redux-helpers";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import RegistrationProfileTypeScreen from "../screens/RegistrationProfileTypeScreen";
import RegistrationFingerScreen from "../screens/RegistrationFingerScreen";
import AuthorizationWelcome from "../screens/AuthorizationWelcome";
import ContactsScreen from "../screens/ContactsScreen";
import FeedScreen from "../screens/FeedScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import GlobalScreen from "../screens/GlobalScreen";
import MessagesScreen from "../screens/MessagesScreen";
import { AppIcon, AppStyles } from "../AppStyles";
import { Configuration } from "../Configuration";
import DrawerContainer from "../components/DrawerContainer";

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

const middleware = createReactNavigationReduxMiddleware(
  "root",
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

// messages stack
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

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: "float",

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
    headerMode: "float",

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
    Home: { screen: HomeStack, 
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) =>
            <Image
            style={{
              width: 35,
              marginTop: 20,
              marginRight: 1,
              resizeMode: 'contain'
            }}
            source={focused ? AppIcon.images.tabbarProfileActive : AppIcon.images.tabbarProfileInactive}
          />
      } 
    },
    Contacts: { screen: ContactsStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) =>
            <Image
            style={{
              width: 35,
              marginTop: 20,
              resizeMode: 'contain'
            }}
            source={focused ? AppIcon.images.tabbarContactsActive : AppIcon.images.tabbarContactsInactive}
          />
      } 
    }, 
    Feed: { screen: FeedStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) =>
            <Image
            style={{
              width: 35,
              marginTop: 20,
              resizeMode: 'contain'
            }}
            source={focused ? AppIcon.images.tabbarFeedActive : AppIcon.images.tabbarFeedInactive}
          />
      } 
    },
    Global: { screen: GlobalStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) =>
            <Image
            style={{
              width: 35,
              marginTop: 20,
              resizeMode: 'contain'
            }}
            source={focused ? AppIcon.images.tabbarGlobalActive : AppIcon.images.tabbarGlobalInactive}
          />
      } 
    },
    Feedback: { screen: FeedbackStack,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) =>
            <Image
            style={{
              width: 35,
              marginTop: 20,
              resizeMode: 'contain'
            }}
            source={focused ? AppIcon.images.tabbarFeedbackActive : AppIcon.images.tabbarFeedbackInactive}
          />
      } 
    }
  },
  {
    order: ["Feed", "Global", "Home", "Feedback", "Contacts"],
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = AppIcon.images.tabbarProfileActive;
        } 
        else if ( routeName === "Contacts" ) {
          iconName = AppIcon.images.tabbarContactsActive;
        } 
        else if ( routeName === "Feed" ) {
          iconName = AppIcon.images.tabbarFeedActive;
        }
        else if ( routeName === "Feedback" ) {
          iconName = AppIcon.images.tabbarFeedActive;
        }
        else if ( routeName === "Global" ) {
          iconName = AppIcon.images.tabbarFeedActive;
        }

        return (
          <Image
            style={{
              width: 100,
              resizeMode: 'contain'
            }}
            source={AppIcon.images.tabbarProfileActive}
          />
        );
      }
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
    MessagesStack: { screen: MessagesStack }
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

const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root");

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
  }
});

export { RootNavigator, AppNavigator, middleware };
