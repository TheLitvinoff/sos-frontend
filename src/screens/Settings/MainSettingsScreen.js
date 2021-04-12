import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../../AppStyles";
import { AsyncStorage } from "react-native";
import { Configuration } from "../../Configuration";

import SettingBackIcon from "../../../assets/icons/settingBackButton.svg";
import BigWave from "../../../assets/icons/welcomeBigWave.png";
import SmallWave from "../../../assets/icons/welcomeSmallWave.png";
import AccountIcon from "../../../assets/icons/settingsMainAccount.svg";
import SecurityIcon from "../../../assets/icons/settingsMainSecurity.svg";
import NotificationIcon from "../../../assets/icons/settingsMainNotification.svg";
import LogoutIcon from "../../../assets/icons/settingsMainLogout.svg";



class MainSettingsScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    onPressBack = () => {
        this.props.navigation.dispatch({ type: "Login", user: {} });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={this.onPressBack}>
                    <SettingBackIcon />
                </TouchableOpacity>

                <View style={styles.emptyTopContainer}></View>

                <View style={styles.titleContainer}>
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.titleText}>Settings</Text>
                    </View>
                </View>

                <View style={styles.rowOneContainer}>
                    <TouchableOpacity style={styles.buttonTouchableContainer} onPress={() => {this.props.navigation.navigate("SettingsAccount")}}>
                        <View style={styles.buttonContainer}>
                            <AccountIcon />
                        </View>
                        <Text style={styles.buttonText}>Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTouchableContainer} onPress={() => {this.props.navigation.navigate("SettingsSecurity")}}>
                        <View style={styles.buttonContainer}>
                            <SecurityIcon />
                        </View>
                        <Text style={styles.buttonText}>Security</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.rowTwoContainer}>
                    <TouchableOpacity style={styles.buttonTouchableContainer} onPress={() => {this.props.navigation.navigate("SettingsNotifications")}}>
                        <View style={styles.buttonContainer}>
                            <NotificationIcon />
                        </View>
                        <Text style={styles.buttonText}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTouchableContainer} onPress={() => {this.props.navigation.dispatch({ type: "Logout" })}}>
                        <View style={styles.buttonContainer}>
                            <LogoutIcon />
                        </View>
                        <Text style={styles.buttonText}>Log out</Text>
                    </TouchableOpacity>
                </View>

                <Image source={SmallWave} style={styles.smallWave} />
                <Image source={BigWave} style={styles.bigWave} />

                <View style={styles.emptyBottomContainer}>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: AppStyles.color.white
    },

    emptyTopContainer: {
        flex: 7,
    },
    emptyBottomContainer: {
        flex: 42,
    },
    titleContainer: {
        flex: 11,
        flexDirection: "row",
        justifyContent: "center",
    },
    rowOneContainer: {
        flex: 20,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center"
    },
    rowTwoContainer: {
        flex: 20,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center"

    },

    titleTextContainer: {
        marginTop: 5
    },
    titleText: {
        fontFamily: AppStyles.fontName.bold,
        color: AppStyles.color.text,
        fontSize: 24,
    },

    buttonContainer: {
        backgroundColor: AppStyles.color.white,
        width: 132,
        height: 132,
        marginHorizontal: 15,
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
    buttonText: {
        fontFamily: AppStyles.fontName.main,
        color: AppStyles.color.text,
        fontSize: 14,
        marginVertical: 10
    },
    buttonTouchableContainer: {
        justifyContent: "center",
        alignItems: "center"
    },

    smallWave: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        width: '100%',
        height: '23%'
    },
    bigWave: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: '100%',
        height: '25%'
    },

    backButton: {
        position: 'absolute',
        top: 75,
        left: 30
    }

});

export default MainSettingsScreen;
