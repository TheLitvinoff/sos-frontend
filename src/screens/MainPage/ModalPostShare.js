import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import Modal from 'react-native-modal';

import { AppStyles, AppIcon } from "../../AppStyles";

import PostShareItem from "./ModalPostShareItem";

import ShareSearchIcon from "../../../assets/icons/shareItemSearch.svg"

class ModalPostShare extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: "Andrew Poletaev", profilePicURL: AppIcon.images.andrewUser, selected: false },
                { name: "Viacheslav Litvinov", profilePicURL: AppIcon.images.slavaUser, selected: false },
                { name: "Zalina Barakhoeva", profilePicURL: AppIcon.images.zalinaUser, selected: false },
            ],
            anySelected: false
        };
    }

    checkAllSelected = () => {
        this.setState({
            ...this.state,
            anySelected: this.state.users.some((user) => { return user.selected === true } )
        })
    }

    toggleSelected = (index) => {
        oldState = this.state
        oldState["users"][index].selected = !oldState["users"][index].selected
        this.setState(oldState)
        this.checkAllSelected()
    };


    render() {
        return (
            <Modal isVisible={this.props.isModalVisible} style={styles.mainModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.shareItemsContainer}>
                        <View style={styles.searchItemContainer}>
                            <View style={styles.searchItemInputContainer}>
                                <View style={styles.searchItemIconContainer}>
                                    <ShareSearchIcon />
                                </View>
                                <View style={styles.searchItemTextContainer}></View>
                            </View>
                        </View>

                        <View style={styles.shareItemListContainer}>
                            <ScrollView>
                                <FlatList
                                    data={this.state.users}
                                    renderItem={({ index, item }) => (
                                        <PostShareItem name={item.name} profilePicURL={item.profilePicURL} isSelected={item.selected} index={index} toggleHandler={this.toggleSelected}/>
                                    )}
                                />
                            </ScrollView>
                        </View>
                    </View>

                    <TouchableOpacity onPress={this.props.toggleModalHandler} style={this.state.anySelected ? styles.cancelContainerSelected : styles.cancelContainer}>
                        <Text style={this.state.anySelected ? styles.cancelTextSelected : styles.cancelText}>Send</Text>
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
        height: "70%",
        width: "100%",
    },
    shareItemsContainer: {
        backgroundColor: AppStyles.color.white,
        flex: 90,
        marginBottom: 10,
        borderRadius: 16
    },
    cancelContainer: {
        backgroundColor: AppStyles.color.white,
        flex: 10,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    cancelContainerSelected: {
        backgroundColor: AppStyles.color.pink,
        flex: 10,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },


    searchItemContainer: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    shareItemListContainer: {
    },

    searchItemInputContainer: {
        backgroundColor: AppStyles.color.greyfill,
        flexDirection: "row",
        borderRadius: 5,
        width: "90%",
        height: 32,
    },
    searchItemIconContainer: {
        flex: 15,
        justifyContent: "center",
        alignItems: "center",

    },
    searchItemTextContainer: {
        flex: 85
    },

    cancelText: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 16,
        color: AppStyles.color.text,
    },
    cancelTextSelected: {
        fontFamily: AppStyles.fontName.bold,
        fontSize: 16,
        color: AppStyles.color.white,
    }
});

export default ModalPostShare;