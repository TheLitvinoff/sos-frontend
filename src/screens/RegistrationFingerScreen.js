import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage } from "react-native";

import MainIcon from "../../assets/icons/regisShield.svg";
import GoBackIcon from "../../assets/icons/regisGoBack.svg";
import GoNextIcon from "../../assets/icons/regisGoNext.svg";
import DotsIcon from "../../assets/icons/regisPwdDots.svg";
import EyeIcon from "../../assets/icons/regisEye.svg";

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
    this.props.navigation.navigate("RegistrationPersonalInfo");

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

        <View style={styles.titleContainer}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>Secure Your {"\n"} Account</Text>
          </View>
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.iconImageContainer}>
            <MainIcon width="100%" />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputStackContainer}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.placeholder}
                placeholder="USERNAME"
                onChangeText={text => this.setState({ username: text })}
                value={this.state.username}
                placeholderTextColor="#A09E9E"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.inputStackContainerPwd}>
            <View style={styles.inputBoxPwd}>
              <TextInput
                style={styles.placeholderpwd}
                secureTextEntry={true}
                placeholder="PASSWORD"
                onChangeText={text => this.setState({ password: text })}
                value={this.state.password}
                placeholderTextColor={"#A09e9e"}
                underlineColorAndroid="transparent"
              />

              <View style={styles.EyeIconContainer}>
                <TouchableOpacity
                  onPress={() => { }}>
                  <EyeIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.inputStackContainerEmpty}></View>
        </View>

        <View style={styles.navContainer}>
          <View style={styles.navBackContainer}>
            <TouchableOpacity
              onPress={() => { }}>
              <GoBackIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.navMidContainer}></View>
          <View style={styles.navNextContainer}>
            <TouchableOpacity
              onPress={() => this.onPressSendPass()}>
              <GoNextIcon />
            </TouchableOpacity>
          </View>


        </View>

        <View style={styles.breadcrumbsContainer}>
          <View style={styles.dotsIconContainer}>
            <DotsIcon />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: 'white',
  },

  titleContainer: {
    flex: 80,
    alignItems: "center",
  },
  titleTextContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  titleText: {
    fontFamily: AppStyles.fontName.bold,
    fontSize: 24,
    color: AppStyles.color.text,
    textAlign: "center"
  },


  iconContainer: {
    flex: 110,
    alignItems: "center",
  },
  iconImageContainer: {
    flex: 1,
    width: "25%",
    justifyContent: "flex-end",
    alignItems: "center"
  },

  inputContainer: {
    flex: 190,
  },
  inputStackContainer: {
    flex: 35,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  inputStackContainerPwd: {
    flex: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStackContainerEmpty: {
    flex: 65,
  },
  inputBox: {
    justifyContent: "center",
    backgroundColor: AppStyles.color.greyfill,
    width: "79%",
    borderRadius: 10,
    height: 47,
  },
  inputBoxPwd: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    backgroundColor: AppStyles.color.greyfill,
    width: "79%",
    borderRadius: 10,
    height: 47,
  },
  EyeIconContainer: {
    flex: 10,
    justifyContent: "center",
  },

  navContainer: {
    flex: 55,
    flexDirection: 'row',
  },
  navMidContainer: {
    flex: 55,
  },
  navBackContainer: {
    flex: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  navNextContainer: {
    flex: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  breadcrumbsContainer: {
    flex: 55,
    justifyContent: "center",
    alignItems: "center",
  },

  placeholder: {
    fontFamily: AppStyles.fontName.main,
    fontSize: 14,
    paddingHorizontal: 20,
    color: AppStyles.color.text,
  },
  placeholderpwd: {
    flex: 80,
    fontFamily: AppStyles.fontName.main,
    fontSize: 14,
    paddingHorizontal: 20,
    color: AppStyles.color.text,
  },

});

export default RegistrationFingerScreen;
