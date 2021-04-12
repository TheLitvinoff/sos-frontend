import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../../AppStyles";
import { AsyncStorage } from "react-native";
import { Configuration } from "../../Configuration";

import MainIcon from "../../../assets/icons/regisEnvelope.svg";
import SettingBackIcon from "../../../assets/icons/settingBackButton.svg";
import BigWave from "../../../assets/icons/welcomeBigWave.png";
import SmallWave from "../../../assets/icons/welcomeSmallWave.png";


class SettingsEmail extends React.Component {
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
                        <Text style={styles.titleText}>Change E-mail {"\n"} Address</Text>
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
                            placeholder="NEW EMAIL"
                            onChangeText={text => this.setState({ username: text })}
                            value={this.state.username}
                            placeholderTextColor="#A09E9E"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>

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
        flex: 7
    },
    titleContainer: {
        flex: 15,
        alignItems: "center",
    },
    iconContainer: {
        flex: 28,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        flex: 7,
        alignItems: "center",
    },
    buttonContainer: {
        flex: 63,
        alignItems: "center",
        width: "100%",
    },

    titleText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 24,
        color: AppStyles.color.text,
        textAlign: "center"
    },


    inputBox: {
        justifyContent: "center",
        backgroundColor: AppStyles.color.greyfill,
        width: "79%",
        borderRadius: 10,
        height: 47,
    },
    placeholder: {
        fontFamily: AppStyles.fontName.main,
        fontSize: 14,
        paddingHorizontal: 20,
        color: AppStyles.color.text,
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

export default SettingsEmail;
