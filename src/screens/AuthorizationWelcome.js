import React from "react";
import Button from "react-native-button";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage, ActivityIndicator } from "react-native";
import { Configuration } from "../Configuration";

class AuthorizationWelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  async tryToLoginFirst() {
    const email = await AsyncStorage.getItem("@loggedInUserID:email");
    const password = await AsyncStorage.getItem("@loggedInUserID:password");
    if ( email !== null && password !== null ) {
      fetch('http://' + Configuration.backend.host + ":" + Configuration.backend.port + "/login", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      .then((response) => {
        if ( response.status != 200 ) {
          alert("Invalid Email or Password");
        } else {
          this.props.navigation.dispatch({ type: "Login", user: { email: email } });
        }
      })
    } 
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.tryToLoginFirst();
  }

  render() {
    if (this.state.isLoading == true) {
      return (
        <ActivityIndicator
          style={styles.spinner}
          size="large"
          color={AppStyles.color.tint}
        />
      );
    }
    return (
      <View style={styles.container}>
        
        {/* <View style={styles.logoContainer}>
            <Image
                source={AppIcon.images.logo}
                style={{
                    width: 90,
                    resizeMode: 'contain',
                }}
            />
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
                onPress={() => {this.props.navigation.navigate("Login");}}
                >
                <Image
                    source={AppIcon.images.authorizationSingIn}
                    style={{
                        width: 90,
                        resizeMode: 'contain',
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {this.props.navigation.navigate("Registration");}}
                >
                <Image
                    source={AppIcon.images.authorizationSingUp}
                    style={{
                        width: 90,
                        resizeMode: 'contain',
                    }}
                />
            </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 200,
    height: 200
  },
  logoContainer: {
    flex: 2,
    alignSelf: "stretch",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: AppStyles.color.tint,
  },
  buttonsContainer: {
    flex: 15,
    justifyContent: 'center'
  },
  loginText: {
    color: AppStyles.color.white
  },
  signupText: {
    color: AppStyles.color.tint
  },
  spinner: {
    marginTop: 200
  }
});

export default AuthorizationWelcomeScreen;
