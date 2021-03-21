import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage } from "react-native";
import { Configuration } from "../Configuration";

import GoBackIcon from "../../assets/icons/regisGoBack.svg";
import GoNextIcon from "../../assets/icons/regisGoNext.svg";
import DotsIcon from "../../assets/icons/regisProfileTypeDots.svg";
import PersonalIcon from "../../assets/icons/regisProfileTypeWhite.svg";
import BusinessIcon from "../../assets/icons/regisProfileTypeBusiness.svg";

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
      email: "test user",
      password: null
    }
    this.props.navigation.dispatch({ type: "Login", user: { email: user.email } });
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
                if (response.status != 200) {
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

        <View style={styles.titleContainer}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>Choose Type {"\n"} of Profile</Text>
          </View>
        </View>


        <View style={styles.typesContainer}>
          <View style={styles.typesContainerEmpty}></View>
          <View style={styles.typesContainerSelection}>

            <View style={styles.typesContainerSelectionPersonal}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => { }}>
                  <View style={styles.buttonPersonal}>
                    <PersonalIcon />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.profileSelectionTextContainer}>
                <Text style={styles.profileSelectionText}>Personal</Text>
              </View>
            </View>

            <View style={styles.typesContainerSelectionBusiness}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => { }}>
                  <View style={styles.buttonBusiness}>
                    <BusinessIcon />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.profileSelectionTextContainer}>
                <Text style={styles.profileSelectionText}>Business</Text>
              </View>
            </View>


          </View>

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
              onPress={() => this.setType("private")}>
              <GoNextIcon />
            </TouchableOpacity>
          </View>


        </View>

        <View style={styles.breadcrumbsContainer}>
          <View style={styles.dotsIconContainer}>
            <DotsIcon />
          </View>
        </View>














        {/*         <View style={styles.logoContainer}>
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
        /> */}


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
    flex: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  typesContainer: {
    flex: 58,
  },
  navContainer: {
    flex: 10,
    flexDirection: 'row',
  },
  breadcrumbsContainer: {
    flex: 12,
    justifyContent: "center",
    alignItems: "center",
  },



  titleText: {
    fontFamily: AppStyles.fontName.bold,
    fontSize: 24,
    color: AppStyles.color.text,
    textAlign: "center"
  },

  typesContainerEmpty: {
    flex: 17
  },
  typesContainerSelection: {
    flex: 83,
    flexDirection: "row",
    justifyContent: "center"
  },
  typesContainerSelectionPersonal: {
    width: "35%",
    marginRight: 30
  },
  typesContainerSelectionBusiness: {
    width: "35%",
  },
  buttonContainer: {
    flex: 32,
  },
  buttonPersonal: {
    backgroundColor: AppStyles.color.pink,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonBusiness: {
    backgroundColor: AppStyles.color.white,
    width: "100%",
    height: "100%",

    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1
    },

    borderRadius: 10,
    borderColor: AppStyles.color.pink,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  profileSelectionTextContainer: {
    flex: 68,
  },
  profileSelectionText: {
    fontFamily: AppStyles.fontName.main,
    fontSize: 18,
    color: AppStyles.color.text,
    textAlign: "center",
    paddingTop: 10
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



});

export default RegistrationProfileType;
