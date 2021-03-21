import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage } from "react-native";

import GoBackIcon from "../../assets/icons/regisGoBack.svg";
import GoNextIcon from "../../assets/icons/regisGoNext.svg";
import DotsIcon from "../../assets/icons/regisPersonalDots.svg";
import GenderMaleActive from "../../assets/icons/regisGenderMaleActive.png";
import GenderFemaleInactive from "../../assets/icons/regisGenderFemaleInactive.png";
import GenderTransformerInactive from "../../assets/icons/regisGenderTransformerInactive.png";
import GenderNoneInactive from "../../assets/icons/regisGenderNoneInactive.png";
import CakeIcon from "../../assets/icons/regisCake.svg";

class RegistrationPersonalInfo extends React.Component {
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
        this.props.navigation.navigate("RegistrationPhoto");

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
                        <Text style={styles.titleText}>Identify Yourself</Text>
                    </View>
                </View>

                <View style={styles.stepOneContainer}>
                    <View style={styles.stepTextContainer}>
                        <Text style={styles.stepText}>1 STEP</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.inputStackContainer}>
                            <View style={styles.inputBox}>
                                <TextInput
                                    style={styles.placeholder}
                                    placeholder="FIRST NAME"
                                    onChangeText={text => this.setState({ firstname: text })}
                                    value={this.state.firstname}
                                    placeholderTextColor="#A09E9E"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                        <View style={styles.inputStackContainer}>
                            <View style={styles.inputBox}>
                                <TextInput
                                    style={styles.placeholder}
                                    placeholder="LAST NAME"
                                    onChangeText={text => this.setState({ lastname: text })}
                                    value={this.state.lastname}
                                    placeholderTextColor={"#A09e9e"}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>

                        <View style={styles.inputStackContainerEmpty}></View>
                    </View>

                </View>

                <View style={styles.stepTwoContainer}>
                    <View style={styles.stepTextContainer}>
                        <Text style={styles.stepText}>2 STEP</Text>
                    </View>

                    <View style={styles.genderSelectionContainer}>
                        <TouchableOpacity
                            onPress={() => { }}>
                            <Image source={GenderMaleActive} style={styles.genderImage} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { }}>
                            <Image source={GenderFemaleInactive} style={styles.genderImage} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { }}>
                            <Image source={GenderTransformerInactive} style={styles.genderImage} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { }}>
                            <Image source={GenderNoneInactive} style={styles.genderImage} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.stepThreeContainer}>
                    <View style={styles.stepTextContainer}>
                        <Text style={styles.stepText}>3 STEP</Text>
                    </View>



                    <View style={styles.inputContainerBirdthay}>
                        <View style={styles.cakeContainer}>
                            <TouchableOpacity
                                onPress={() => { }}>
                                <CakeIcon />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputStackContainerBirthday}>
                            <View style={styles.inputBoxBirthdayDay}>
                                <TextInput
                                    style={styles.placeholder}
                                    placeholder="DD"
                                    onChangeText={text => this.setState({ birthdayDay: text })}
                                    value={this.state.birthdayDay}
                                    placeholderTextColor="#A09E9E"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                        <View style={styles.inputStackContainerBirthdayMonth}>
                            <View style={styles.inputBoxBirthdayMonth}>
                                <TextInput
                                    style={styles.placeholder}
                                    placeholder="MM"
                                    onChangeText={text => this.setState({ birthdayMonth: text })}
                                    value={this.state.birthdayMonth}
                                    placeholderTextColor={"#A09e9e"}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>

                        <View style={styles.inputStackContainerBirthdayYear}>
                            <View style={styles.inputBoxBirthdayYear}>
                                <TextInput
                                    style={styles.placeholder}
                                    placeholder="YYYY"
                                    onChangeText={text => this.setState({ birthdayYear: text })}
                                    value={this.state.birthdayYear}
                                    placeholderTextColor={"#A09e9e"}
                                    underlineColorAndroid="transparent"
                                />
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
        flex: 80,
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


    stepOneContainer: {
        flex: 100,
        alignItems: "center",
    },
    stepTwoContainer: {
        flex: 90,
        alignItems: "center",
    },
    stepThreeContainer: {
        flex: 80,
        alignItems: "center",
    },


    stepTextContainer: {
        width: "79%",
        flex: 40,
    },
    stepText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 18,
        color: AppStyles.color.mainpurple,
    },

    inputContainer: {
        flex: 150,
        width: "79%",
    },
    inputStackContainer: {
        flex: 60,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    inputBox: {
        justifyContent: "center",
        backgroundColor: AppStyles.color.greyfill,
        width: "100%",
        borderRadius: 10,
        height: 47,
    },
    inputStackContainerEmpty: {
        flex: 35
    },


    cakeContainer: {
        flex: 30,
        alignItems: "center"
    },
    inputBoxBirthdayDay: {
        justifyContent: "center",
        backgroundColor: AppStyles.color.greyfill,
        width: "80%",
        borderRadius: 10,
        height: 47,
    },
    inputBoxBirthdayMonth: {
        justifyContent: "center",
        backgroundColor: AppStyles.color.greyfill,
        width: "81%",
        borderRadius: 10,
        height: 47,
    },
    inputBoxBirthdayYear: {
        justifyContent: "center",
        backgroundColor: AppStyles.color.greyfill,
        width: "100%",
        borderRadius: 10,
        height: 47,
    },

    inputContainerBirdthay: {
        flex: 90,
        flexDirection: "row",
        width: "79%",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    inputStackContainerBirthday: {
        flex: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    inputStackContainerBirthdayMonth: {
        flex: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    inputStackContainerBirthdayYear: {
        flex: 35,
        justifyContent: "center",
        alignItems: "center",
    },

    genderImage: {

    },
    genderSelectionContainer: {
        flex: 100,
        width: "79%",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row"
    },


    navContainer: {
        flex: 45,
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

export default RegistrationPersonalInfo;
