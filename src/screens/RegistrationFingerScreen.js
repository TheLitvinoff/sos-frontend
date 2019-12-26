import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage } from "react-native";

class RegistrationFingerScreen extends React.Component {
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

  onPressSendPass = () => {
    const { password } = this.state;
    if (password.length <= 0) {
      alert("Please fill out the required fields.");
      return;
    }
    let user = {
      user_uid: 1,
    }
    const { navigation } = this.props;
    AsyncStorage.setItem("@loggedInUserID:password", password);
    this.props.navigation.navigate("RegistrationProfileType");
    
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
                onPress={() => this.onPressSendPass()}
                >
                  <Image
                      source={AppIcon.images.regisFinger}
                      style={{
                          width: 90,
                          marginTop: 10,
                          resizeMode: 'contain',
                      }}
                  />
                </TouchableOpacity>
        </View>
        <Image
            source={AppIcon.images.regisDotsFinger}
            style={{
                flex: 2,
                width: 90,
                resizeMode: 'contain',
            }}
        />
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
    justifyContent: "center",
    flex: 13,
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

export default RegistrationFingerScreen;
