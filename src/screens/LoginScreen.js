import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage } from "react-native";
import { Configuration } from "../Configuration";

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      email: "",
      password: ""
    };
  }

  onPressLogin = () => {
    const { email, password } = this.state;
    if (email.length <= 0 || password.length <= 0) {
      alert("Please fill out the required fields.");
      return;
    }
    const { navigation } = this.props;
    AsyncStorage.setItem("@loggedInUserID:email", email);
    AsyncStorage.setItem("@loggedInUserID:password", password);

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
        this.props.navigation.navigate("AuthorizationWelcome");
        navigation.dispatch({ type: "Login", user: { email: email } });
      }
    })
    .catch((error) => {     
        const { code, message } = error;
        alert(message);
    });
    
      // .catch(error => {
      //   const { code, message } = error;
      //   alert(message);
      //   // For details of error codes, see the docs
      //   // The message contains the default Firebase string
      //   // representation of the error
      // });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                source={AppIcon.images.logo}
                style={{
                    width: 90,
                    resizeMode: 'contain',
                }}
            />
        </View>
        <View style={styles.loginContainer}>
                <Image
                    source={AppIcon.images.loginEmail}
                    style={{
                        width: 90,
                        marginTop: 100,
                        resizeMode: 'contain',
                    }}
                />
                <View style={styles.InputContainer}>
                  <TextInput
                    style={styles.body}
                    placeholder=""
                    onChangeText={text => this.setState({ email: text })}
                    value={this.state.email}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                  />
                </View>
                <View style={styles.InputContainer}>
                  <TextInput
                    style={styles.body}
                    secureTextEntry={true}
                    placeholder=""
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                  />
                </View>
                <TouchableOpacity
                onPress={() => this.onPressLogin()}
                >
                  <Image
                      source={AppIcon.images.loginFinger}
                      style={{
                          width: 90,
                          marginTop: 10,
                          resizeMode: 'contain',
                      }}
                  />
                </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logoContainer: {
    flex: 2,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: AppStyles.color.tint,
  },
  loginContainer: {
    alignItems: "center",
    flex: 15,
  },
  InputContainer: {
    width: 300,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  facebookText: {
    color: AppStyles.color.white
  }
});

export default LoginScreen;
