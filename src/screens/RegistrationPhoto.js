import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage } from "react-native";

import MainIcon from "../../assets/icons/regisProfile.svg";
import GoBackIcon from "../../assets/icons/regisGoBack.svg";
import GoNextIcon from "../../assets/icons/regisGoNext.svg";
import DotsIcon from "../../assets/icons/regisPhotoDots.svg";


class RegistrationPhoto extends React.Component {
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

    onPressSendPersonalInfo = () => {
        /*         const { password } = this.state;
                if (password.length <= 0) {
                    alert("Please fill out the required fields.");
                    return;
                } */
        let user = {
            user_uid: 1,
        }
        const { navigation } = this.props;
        // AsyncStorage.setItem("@loggedInUserID:password", password);
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

                <View style={styles.titleContainer}>
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.titleText}>Add Profile Photo</Text>
                    </View>
                </View>


                <View style={styles.iconContainer}>
                    <View style={styles.iconImageContainer}>
                        <MainIcon height="100%" width="100%" />
                    </View>
                </View>

                <View style={styles.buttonsContainer}>

                    <View style={styles.buttonsContainerEmpty}></View>

                    <View style={styles.buttonContainerChoose}>
                        <TouchableOpacity
                            onPress={() => { }}>
                            <View style={styles.buttonChoose}>
                                <Text style={styles.buttonChooseText}>Choose a Photo</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.buttonContainerSkip}>

                        <View style={styles.buttonContainerChoose}>
                            <TouchableOpacity
                                onPress={() => { }}>
                                <View style={styles.buttonSkip}>
                                    <Text style={styles.buttonSkipText}>Skip</Text>
                                </View>
                            </TouchableOpacity>
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
                            onPress={() => this.onPressSendPersonalInfo()}>
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
        flex: 20,
        alignItems: "center",
    },
    iconContainer: {
        flex: 20
    },
    buttonsContainer: {
        flex: 38,
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


    titleTextContainer: {
        flex: 1,
        justifyContent: "center"
    },
    titleText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 24,
        color: AppStyles.color.text,
        textAlign: "center"
    },

    iconImageContainer: {
        alignItems: "center",
    },


    buttonsContainerEmpty: {
        flex: 20,
    },
    buttonContainerChoose: {
        flex: 20,
        width: "100%",
        alignItems: "stretch"
    },
    buttonContainerSkip: {
        flex: 60,
    },
    buttonChoose: {
        height: 51,
        width: "61%",
        backgroundColor: AppStyles.color.pink,
        alignSelf: "center",
        justifyContent: 'center',
        borderRadius: 50
    },
    buttonChooseText: {
        fontFamily: AppStyles.fontName.main,
        fontSize: 18,
        color: AppStyles.color.white,
        textAlign: "center"
    },
    buttonSkip: {
        height: 51,
        width: "61%",
        borderColor: AppStyles.color.pink,
        borderWidth: 0.5,
        alignSelf: "center",
        justifyContent: 'center',
        borderRadius: 50
    },
    buttonSkipText: {
        fontFamily: AppStyles.fontName.main,
        fontSize: 18,
        color: AppStyles.color.pink,
        textAlign: "center"
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

export default RegistrationPhoto;
