import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../../AppStyles";
import { AsyncStorage } from "react-native";
import { Configuration } from "../../Configuration";


import SettingBackIcon from "../../../assets/icons/settingBackButton.svg";
import BigWave from "../../../assets/icons/welcomeBigWave.png";
import SmallWave from "../../../assets/icons/welcomeSmallWave.png";

import IconOn from "../../../assets/icons/settingsNotificationsOn.svg";
import IconOff from "../../../assets/icons/settingsNotificationsOff.svg";
import IconMessages from "../../../assets/icons/settingsNotificationsMessages.svg";
import IconCalls from "../../../assets/icons/settingsNotificationsCalls.svg";
import IconPosts from "../../../assets/icons/settingsNotificationsPosts.svg";
import IconLive from "../../../assets/icons/settingsNotificationsLive.svg";

class SettingsNotifications extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            messages: false,
            calls: true,
            posts: false,
            live: false
        };
    }

    onPressBack = () => {
        this.props.navigation.goBack();
    };

    toggleNotificationOption = (option) => {
        oldState = this.state
        oldState[option] = !this.state[option]
        this.setState(oldState)
    };

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.backButton} onPress={this.onPressBack}>
                    <SettingBackIcon />
                </TouchableOpacity>

                <View style={styles.emptyContainer}></View>
                <View style={styles.titleContainer}>
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.titleText}>Notification</Text>
                    </View>
                </View>

                <View style={styles.notificationsContainer}>
                    <View style={styles.notificationsItemContainer}>
                        <View style={styles.notificationsItemIconContainer}>
                            <IconMessages />
                        </View>
                        <View style={styles.notificationsItemTextContainer}>
                            <Text style={styles.notificationsItemText}>Messages</Text>
                        </View>
                        <View style={styles.notificationsItemToggleContainer}>
                            <TouchableOpacity onPress={() => { this.toggleNotificationOption('messages') }}>
                                {this.state.messages ? <IconOn /> : <IconOff />}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.notificationsItemContainer}>
                        <View style={styles.notificationsItemIconContainer}>
                            <IconCalls />
                        </View>
                        <View style={styles.notificationsItemTextContainer}>
                            <Text style={styles.notificationsItemText}>Calls</Text>
                        </View>
                        <View style={styles.notificationsItemToggleContainer}>
                            <TouchableOpacity onPress={() => { this.toggleNotificationOption('calls') }}>
                                {this.state.calls ? <IconOn /> : <IconOff />}
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.notificationsItemContainer}>
                        <View style={styles.notificationsItemIconContainer}>
                            <IconPosts />
                        </View>
                        <View style={styles.notificationsItemTextContainer}>
                            <Text style={styles.notificationsItemText}>Posts</Text>
                        </View>
                        <View style={styles.notificationsItemToggleContainer}>
                            <TouchableOpacity onPress={() => { this.toggleNotificationOption('posts') }}>
                                {this.state.posts ? <IconOn /> : <IconOff />}
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.notificationsItemContainer}>
                        <View style={styles.notificationsItemIconContainer}>
                            <IconLive />
                        </View>
                        <View style={styles.notificationsItemTextContainer}>
                            <Text style={styles.notificationsItemText}>Live Video</Text>
                        </View>
                        <View style={styles.notificationsItemToggleContainer}>
                            <TouchableOpacity onPress={() => { this.toggleNotificationOption('live') }}>
                                {this.state.live ? <IconOn /> : <IconOff />}
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <Image source={SmallWave} style={styles.smallWave} />
                <Image source={BigWave} style={styles.bigWave} />

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

    backButton: {
        position: 'absolute',
        top: 75,
        left: 30,
        zIndex: 2
    },

    emptyContainer: {
        flex: 8,
    },
    titleContainer: {
        flex: 13,
        alignItems: "center",
    },
    notificationsContainer: {
        flex: 79,
    },


    titleText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 24,
        color: AppStyles.color.text,
        textAlign: "center"
    },


    notificationsItemContainer: {
        height: 70,
        flexDirection: "row"
    },
    notificationsItemIconContainer: {
        height: "100%",
        flex: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    notificationsItemTextContainer: {
        height: "100%",
        flex: 40,
        justifyContent: "center"
    },
    notificationsItemToggleContainer: {
        height: "100%",
        flex: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    notificationsItemText: {
        fontFamily: AppStyles.fontName.main,
        fontSize: 14,
        color: AppStyles.color.text,
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


});

export default SettingsNotifications;
