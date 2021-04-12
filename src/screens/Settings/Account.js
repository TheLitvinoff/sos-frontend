import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../../AppStyles";
import { AsyncStorage } from "react-native";
import { Configuration } from "../../Configuration";

import PersonalIcon from "../../../assets/icons/regisProfileTypeWhite.svg";
import BusinessIcon from "../../../assets/icons/regisProfileTypeBusiness.svg";
import SettingBackIcon from "../../../assets/icons/settingBackButton.svg";
import BigWave from "../../../assets/icons/welcomeBigWave.png";
import SmallWave from "../../../assets/icons/welcomeSmallWave.png";


class SettingsAccount extends React.Component {
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
                </View>

                <View style={styles.breadcrumbsContainer}>

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

export default SettingsAccount;
