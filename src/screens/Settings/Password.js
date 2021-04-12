import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../../AppStyles";
import { AsyncStorage } from "react-native";
import { Configuration } from "../../Configuration";

import MainIcon from "../../../assets/icons/regisShield.svg";
import EyeIcon from "../../../assets/icons/regisEye.svg";
import SettingBackIcon from "../../../assets/icons/settingBackButton.svg";
import BigWave from "../../../assets/icons/welcomeBigWave.png";
import SmallWave from "../../../assets/icons/welcomeSmallWave.png";


class SettingsPassword extends React.Component {
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

    onPressBack = () => {
        this.props.navigation.goBack();
    };

    setType = () => {

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
                        <Text style={styles.titleText}>Change Password</Text>
                    </View>
                </View>

                <View style={styles.iconContainer}>
                    <View style={styles.iconImageContainer}>
                        <MainIcon />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.placeholder}
                            secureTextEntry={true}
                            placeholder="OLD PASSWORD"
                            onChangeText={text => this.setState({ username: text })}
                            value={this.state.pwdOld}
                            placeholderTextColor="#A09E9E"
                            underlineColorAndroid="transparent"
                        />
                        <View style={styles.EyeIconContainer}>
                            <TouchableOpacity
                                onPress={() => { }}>
                                <EyeIcon />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.placeholder}
                            secureTextEntry={true}
                            placeholder="NEW PASSWORD"
                            onChangeText={text => this.setState({ username: text })}
                            value={this.state.pwdNew}
                            placeholderTextColor="#A09E9E"
                            underlineColorAndroid="transparent"
                        />
                        <View style={styles.EyeIconContainer}>
                            <TouchableOpacity
                                onPress={() => { }}>
                                <EyeIcon />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.placeholder}
                            secureTextEntry={true}
                            placeholder="REPEAT NEW PASSWORD"
                            onChangeText={text => this.setState({ username: text })}
                            value={this.state.pwdNewRepeat}
                            placeholderTextColor="#A09E9E"
                            underlineColorAndroid="transparent"
                        />
                        <View style={styles.EyeIconContainer}>
                            <TouchableOpacity
                                onPress={() => { }}>
                                <EyeIcon />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.buttonBoxTouchable}>
                        <View style={styles.buttonBox}>
                            <Text style={styles.buttonText}>Change</Text>
                        </View>
                    </TouchableOpacity>

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
        flex: 10,
        alignItems: "center",
    },
    iconContainer: {
        flex: 22,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        flex: 60,
        alignItems: "center",
    },


    titleText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 24,
        color: AppStyles.color.text,
        textAlign: "center"
    },


    inputBox: {
        justifyContent: "center",
        flexDirection: 'row',
        justifyContent: "flex-start",
        backgroundColor: AppStyles.color.greyfill,
        marginBottom: 8,
        width: "79%",
        borderRadius: 10,
        height: 47,
    },
    placeholder: {
        flex: 80,
        fontFamily: AppStyles.fontName.main,
        fontSize: 14,
        paddingHorizontal: 20,
        color: AppStyles.color.text,
    },
    EyeIconContainer: {
        flex: 10,
        justifyContent: "center",
    },


    buttonBox: {
        justifyContent: "center",
        backgroundColor: AppStyles.color.pink,
        borderRadius: 10,
        height: 47,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonBoxTouchable: {
        marginTop: 10,
        width: "79%",
    },
    buttonText: {
        fontFamily: AppStyles.fontName.main,
        fontSize: 14,
        fontWeight: "bold",
        color: AppStyles.color.white,
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

export default SettingsPassword;
