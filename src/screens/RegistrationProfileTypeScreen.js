import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage } from "react-native";
import { Configuration } from "../Configuration";

class RegistrationProfileType extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      type: ""
    };
  }

  setType = () => {
    const { type } = this.state;
    const { navigation } = this.props;
    let user = {
      email: null,
      password: null
    }
    AsyncStorage.getItem("@loggedInUserID:email")
      .then((email) => {
        user.email = email
        AsyncStorage.getItem("@loggedInUserID:password")
          .then((password) => {
            user.password = password
            fetch('http://' + Configuration.backend.host + ":" + Configuration.backend.port + "/register", {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: user.email,
                password: user.password,
              }),
            })
            .then((response) => {
              if ( response.status != 200 ) {
                alert(response.status);
              } else {
                this.props.navigation.navigate("AuthorizationWelcome");
                navigation.dispatch({ type: "Login", user: user });
              }
            })
            .catch((error) => {     
                const { code, message } = error;
                alert(message);
            });

          })
      })
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
                      source={AppIcon.images.regisTypeUser}
                      style={{
                          width: 50,
                          marginTop: 10,
                          resizeMode: 'contain',
                      }}
                  />
                  <View style={styles.typesContainer}>
                  <TouchableOpacity
                    onPress={() => this.setType("private")}
                  >
                      <Image
                          source={this.state.type == "private" ? AppIcon.images.regisTypePrivateActive : AppIcon.images.regisTypePrivateInactive}
                          style={{
                              width: 90,
                              marginHorizontal: 20,
                              resizeMode: 'contain',
                          }}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setType("business")}
                  >
                      <Image
                        source={this.state.type == "business" ? AppIcon.images.regisTypeBusinessActive : AppIcon.images.regisTypeBusinessInactive}
                        style={{
                            width: 97,
                            marginHorizontal: 20,
                            resizeMode: 'contain',
                        }}
                    />
                  </TouchableOpacity>
                  </View>
        </View>
        <Image
            source={AppIcon.images.regisTypeDots}
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
    flex: 13,
  },
  typesContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

export default RegistrationProfileType;
