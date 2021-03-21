import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage } from "react-native";


import MainIcon from "../../assets/icons/regisEnvelope.svg";
import GoBackIcon from "../../assets/icons/regisGoBack.svg";
import GoNextIcon from "../../assets/icons/regisGoNext.svg";
import DotsIcon from "../../assets/icons/regisEmailDots.svg";

class RegistrationScreen extends React.Component {
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

  onPressSendEmail = () => {
    const { email } = this.state;
    if (email.length <= 0) {
      alert("Please fill out the required fields.");
      return;
    }
    let user = {
      user_uid: 1,
    }
    AsyncStorage.setItem("@loggedInUserID:email", email);
    this.props.navigation.navigate("RegistrationFinger");

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
            <Text style={styles.titleText}>Your Email {"\n"} Address</Text>
          </View>
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.iconImageContainer}>
            <MainIcon width="100%"/>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputStackContainer}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.placeholder}
                placeholder="EMAIL"
                onChangeText={text => this.setState({ email: text })}
                value={this.state.email}
                placeholderTextColor="#A09E9E"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.inputStackContainerEmpty}></View>
        </View>

        <View style={styles.navContainer}>
          <View style={styles.navBackContainer}>
            <TouchableOpacity
              onPress={() => {}}>
              <GoBackIcon />          
            </TouchableOpacity>
          </View>
          <View style={styles.navMidContainer}></View>
          <View style={styles.navNextContainer}>
            <TouchableOpacity
              onPress={() => this.onPressSendEmail()}>
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














});

export default RegistrationScreen;
