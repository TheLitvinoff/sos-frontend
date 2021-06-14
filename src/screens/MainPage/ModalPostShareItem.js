import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Modal from 'react-native-modal';

import { AppStyles, AppIcon } from "../../AppStyles";

import IconOn from "../../../assets/icons/settingsNotificationsOn.svg";
import IconOff from "../../../assets/icons/settingsNotificationsOff.svg";

class PostShareItem extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.shareItemContainer}>
                <View style={styles.picContainer}>
                    <Image source={this.props.profilePicURL} style={styles.userPhoto} />
                </View>

                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>{this.props.name}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => { this.props.toggleHandler(this.props.index) }}>
                        {this.props.isSelected ? <IconOn /> : <IconOff />}
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    shareItemContainer: {
        height: 60,
        flexDirection: "row"
    },
    picContainer: {
        flex: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    nameContainer: {
        flex: 60,
        justifyContent: "center"
    },
    buttonContainer: {
        flex: 20,
        justifyContent: "center",
        alignItems: "center"
    },


    userPhoto: {
        width: 40,
        height: 40,
        resizeMode: "cover",
        borderRadius: 40 / 2,
        borderColor: AppStyles.color.pink
    },

    nameText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 14,
        color: AppStyles.color.text,
    }
});

export default PostShareItem;