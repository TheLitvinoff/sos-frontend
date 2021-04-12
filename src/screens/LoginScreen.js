import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage } from "react-native";
import { Configuration } from "../Configuration";

import Logosvg from "../../assets/icons/loginLogo.svg";
import SignUpIcon from "../../assets/icons/welcomeSignUp.svg";
import UsernameIcon from "../../assets/icons/loginUsername.svg";
import PasswordIcon from "../../assets/icons/loginPassword.svg";

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
/*     if (email.length <= 0 || password.length <= 0) {
      alert("Please fill out the required fields.");
      return;
    } */
    const { navigation } = this.props;
    AsyncStorage.setItem("@loggedInUserID:email", email);
    AsyncStorage.setItem("@loggedInUserID:password", password);

    this.props.navigation.navigate("AuthorizationWelcome");
    navigation.dispatch({ type: "Login", user: { email: email } });

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
        if (response.status != 200) {
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
        <Image source={AppIcon.images.loginWave} style={styles.topWave} />
        <View style={styles.logoContainer}>
          <Logosvg
            width="30%"
          />
        </View>

        <View style={styles.signInTextContainer} elevation={5}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formBack}>

            <View style={styles.emptyInputContainer}>
            </View>

            <View style={styles.emailInputContainer}>
              <View style={styles.emailInputBoxContainer}>
                <View style={styles.emailImageBox}>
                  <UsernameIcon
                    width="80%"
                  />
                </View>
                <View style={styles.emailInputBox}>
                  <TextInput
                    style={styles.placeholder}
                    placeholder="USERNAME OR EMAIL"
                    onChangeText={text => this.setState({ email: text })}
                    value={this.state.email}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                  />

                </View>

              </View>
              <View style={styles.emailInputBoxContainerEmpty}></View>
            </View>


            <View style={styles.passwordInputContainer}>
              <View style={styles.passwordInputBoxContainer}>
                <View style={styles.passwordImageBox}>
                  <PasswordIcon
                    width="80%"
                  />
                </View>

                <View style={styles.passwordInputBox}>
                  <TextInput
                    style={styles.placeholder}
                    secureTextEntry={true}
                    placeholder="PASSWORD"
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                  />
                </View>

              </View>
              <View style={styles.passwordInputBoxContainerEmpty}></View>
            </View>


            <View style={styles.signInButtonContainer}>

              <TouchableOpacity
                onPress={() => this.onPressLogin()}>
                <View style={styles.signInButton}>
                  <Text style={styles.signInButtonText}>Sign In</Text>
                </View>
              </TouchableOpacity>

            </View>

            <View style={styles.forgotPwdContainer}>
              <View style={styles.signInButtonContainer}>
                <TouchableOpacity
                  onPress={() => {}}>
                    <Text style={styles.forgotPwdText}>Forgotten Password?</Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>
        </View>

        <View style={styles.orContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 2 }} />
            <View style={{ flex: 1, height: 1, backgroundColor: AppStyles.color.text }} />
            <View>
              <Text style={{ width: 50, textAlign: 'center', fontFamily: AppStyles.fontName.bold, fontSize: 12, color: AppStyles.color.text }}>OR</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: AppStyles.color.text }} />
            <View style={{ flex: 2 }} />
          </View>
        </View>


        <View style={styles.signUpContainer}>

          <View style={styles.signUpContainer}>
            <TouchableOpacity
              onPress={() => { }}
              style={styles.signUp}>
              <SignUpIcon

              />
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: AppStyles.color.white
  },
  topWave: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    width: '100%',
    height: '40%'
  },
  logoContainer: {
    flex: 30,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  signInTextContainer: {
    flex: 8,
    justifyContent: "flex-start",
  },
  signInText: {
    fontFamily: AppStyles.fontName.bold,
    color: 'white',
    fontSize: 24,
  },
  formContainer: {
    flex: 50,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formBack: {
    height: '100%',
    width: '82.5%',
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1
    },
    borderRadius: 10,
    backgroundColor: AppStyles.color.white
  },
  orContainer: {
    flex: 10,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpContainer: {
    flex: 25,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  emptyInputContainer: {
    flex: 50,
    justifyContent: "flex-end",
  },
  emailInputContainer: {
    flex: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emailInputBoxContainer: {
    flex: 20,
    width: "74%",
    flexDirection: 'row',
  },
  emailInputBoxContainerEmpty: {
    flex: 20,
    width: "74%",
    borderTopWidth: 1.5,
    borderColor: AppStyles.color.grey,
    flexDirection: 'row',
  },
  emailImageBox: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  emailInputBox: {
    flex: 85,
    justifyContent: 'center',
  },


  passwordInputContainer: {
    flex: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  passwordInputBoxContainer: {
    flex: 20,
    width: "74%",
    flexDirection: 'row',
  },
  passwordInputBoxContainerEmpty: {
    flex: 20,
    width: "74%",
    borderTopWidth: 1.5,
    borderColor: AppStyles.color.grey,
    flexDirection: 'row',
  },
  passwordImageBox: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  passwordInputBox: {
    flex: 85,
    justifyContent: 'center',
  },


  signInButtonContainer: {
    flex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  signInButton: {
    width: 230,
    height: 51,
    borderRadius: 50,
    backgroundColor: AppStyles.color.pink,
    alignItems: "center",
    justifyContent: "center",
  },
  signInButtonText: {
    fontFamily: AppStyles.fontName.main,
    color: 'white',
    fontSize: 18,
  },


  forgotPwdContainer: {
    flex: 80,
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  forgotPwdText: {
    flex: 1,
    fontFamily: AppStyles.fontName.main,
    color: AppStyles.color.text,
    fontSize: 12,
  },
  placeholder: {
    fontFamily: AppStyles.fontName.main,
    color: AppStyles.color.text,
    fontSize: 14,

  }
});

export default LoginScreen;
