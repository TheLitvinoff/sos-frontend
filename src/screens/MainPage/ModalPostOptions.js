import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';

import { AppStyles, AppIcon } from "../../AppStyles";

import MoreIcon from "../../../assets/icons/mainPostOptionsMore.svg";
import LessIcon from "../../../assets/icons/mainPostOptionsLess.svg";
import CopyIcon from "../../../assets/icons/mainPostOptionsCopy.svg";
import ReportIcon from "../../../assets/icons/mainPostOptionsReport.svg";


class ModalPostOptions extends React.Component {
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
            <Modal isVisible={this.props.isModalVisible} style={styles.mainModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity onPress={this.props.toggleModalHandler} style={styles.optionItemContainer}>
                            <View style={styles.optionIconContainer}>
                                <MoreIcon />
                            </View>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>More Like This</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{borderBottomColor: AppStyles.color.grey, borderBottomWidth: 1 }} />

                        <TouchableOpacity onPress={this.props.toggleModalHandler} style={styles.optionItemContainer}>
                            <View style={styles.optionIconContainer}>
                                <LessIcon />
                            </View>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>Less Like This</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{borderBottomColor: AppStyles.color.grey, borderBottomWidth: 1 }} />

                        <TouchableOpacity onPress={this.props.toggleModalHandler} style={styles.optionItemContainer}>
                            <View style={styles.optionIconContainer}>
                                <CopyIcon />
                            </View>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>Copy Link</Text>
                            </View>

                        </TouchableOpacity>

                        <View style={{borderBottomColor: AppStyles.color.grey, borderBottomWidth: 1 }} />

                        <TouchableOpacity onPress={this.props.toggleModalHandler} style={styles.optionItemContainer}>
                            <View style={styles.optionIconContainer}>
                                <ReportIcon />
                            </View>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>Report</Text>
                            </View>

                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={this.props.toggleModalHandler} style={styles.cancelContainer}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    mainModal: {
        justifyContent: "flex-end",
        alignItems: "center"
    },
    modalContainer: {
        height: "40%",
        width: "100%",
    },
    optionsContainer: {
        backgroundColor: AppStyles.color.white,
        flex: 80,
        marginBottom: 10,
        borderRadius: 16
    },
    cancelContainer: {
        backgroundColor: AppStyles.color.white,
        flex: 20,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },

    optionItemContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
    },
    optionIconContainer: {
        flex: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    optionTextContainer: {
        flex: 80,
        justifyContent: "center",
    },
    optionText: {
        fontFamily: AppStyles.fontName.main,
        fontSize: 17,
        color: AppStyles.color.text,
    },

    cancelText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 16,
        color: AppStyles.color.text,
    }
});

export default ModalPostOptions;