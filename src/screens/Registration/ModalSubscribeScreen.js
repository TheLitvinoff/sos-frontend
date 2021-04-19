import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';

import { AppStyles, AppIcon } from "../../AppStyles";

import CloseIcon from "../../../assets/icons/regisCloseModal.svg"
import ListIcon from "../../../assets/icons/regisListModal.svg"

class ModalSubscribe extends React.Component {
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
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Busy Mode</Text>
                        <View style={styles.closeButtonContainer}>
                            <TouchableOpacity onPress={this.props.toggleModalHandler}>
                                <CloseIcon />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.contentContainer}>
                        <View style={styles.emptyTopContainer}></View>
                        <View style={styles.listContainer}>
                            <View style={styles.listItemContainer}>
                                <View style={styles.listItemIconContainer}>
                                    <ListIcon />
                                </View>
                                <View style={styles.listItemTextContainer}>
                                    <Text style={styles.listItemText}>Always “Invisible” offline</Text>
                                </View>
                            </View>

                            <View style={styles.listItemContainer}>
                                <View style={styles.listItemIconContainer}>
                                    <ListIcon />
                                </View>
                                <View style={styles.listItemTextContainer}>
                                    <Text style={styles.listItemText}>Fast call-reply</Text>
                                </View>

                            </View>

                            <View style={styles.listItemContainer}>
                                <View style={styles.listItemIconContainer}>
                                    <ListIcon />
                                </View>
                                <View style={styles.listItemTextContainer}>
                                    <Text style={styles.listItemText}>Secure your activity {"\n"} (by invitation only)</Text>
                                </View>

                            </View>
                        </View>


                        <View style={styles.priceContainer}>
                            <View style={styles.priceContentContainer}>
                                <View style={styles.priceTextTitleContainer}>
                                    <Text style={styles.listItemText}>Price Per-Month:</Text>
                                </View>
                                <View style={styles.priceTextPriceContainer}>
                                    <Text style={styles.priceText}>$9.99</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.toggleModalHandler();
                                    this.props.setTypeHandler();
                                }}>
                                <View style={styles.buttonSubscribe}>
                                    <Text style={styles.buttonSubscribeText}>Subscribe</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    mainModal: {
        justifyContent: "center",
        alignItems: "center"
    },
    modalContainer: {
        backgroundColor: AppStyles.color.white,
        height: "47%",
        width: "90%",
        borderRadius: 16
    },
    headerContainer: {
        flex: 18,
        backgroundColor: AppStyles.color.pink,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {
        flex: 82,
    },
    closeButtonContainer: {
        position: "absolute",
        top: "39%",
        right: 30
    },
    headerText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 18,
        color: AppStyles.color.white,
    },

    emptyTopContainer: {
        flex: 7
    },
    listContainer: {
        flex: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    priceContainer: {
        flex: 21,
        justifyContent: "center",
        alignItems: "center"

    },
    buttonContainer: {
        flex: 27,
    },

    listItemContainer: {
        flex: 1,
        width: "75%",
        alignItems: "center",
        flexDirection: "row"
    },
    listItemIconContainer: {
        flex: 10
    },
    listItemTextContainer: {
        flex: 90
    },
    listItemText: {
        fontFamily: AppStyles.fontName.main,
        fontSize: 12,
        color: AppStyles.color.text,
    },

    priceContentContainer: {
        flex: 1,
        width: "75%",
        alignItems: "center",
        flexDirection: "row"
    },
    priceTextTitleContainer: {
        flex: 45,
    },
    priceTextPriceContainer: {
        flex: 55
    },
    priceText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 16,
        color: AppStyles.color.mainpurple,
    },
    buttonSubscribe: {
        height: 51,
        width: "75%",
        backgroundColor: AppStyles.color.pink,
        alignSelf: "center",
        justifyContent: 'center',
        borderRadius: 50
    },
    buttonSubscribeText: {
        fontFamily: AppStyles.fontName.main,
        fontSize: 18,
        color: AppStyles.color.white,
        textAlign: "center"
    }

});

export default ModalSubscribe;