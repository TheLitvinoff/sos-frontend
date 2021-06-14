import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import {
    AppIcon,
    AppStyles,
} from "../../AppStyles";
import { Configuration } from "../../Configuration";
import EyeIcon from "../../../assets/icons/postEye.svg";
import FavIcon from "../../../assets/icons/postFav.svg";
import ShareIcon from "../../../assets/icons/postShare.svg";

import ModalPostOptions from "./ModalPostOptions";
import ModalPostShare from "./ModalPostShare";

class PostsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.postsContainer}>
                <FlatList
                    data={this.props.posts}
                    renderItem={({ item }) => (
                        <PostsItem username={item.username} picURL={item.picURL} profilePicURL={item.profilePicURL} viewCount={item.viewCount} />
                    )}
                />
            </View>
        );
    }
}


class PostsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isOptionsModalVisible: false,
            type: "",
        };
    }

    toggleOptionsModal = () => {
        this.setState({
            ...this.state,
            isOptionsModalVisible: !this.state.isOptionsModalVisible
        })
    }


    toggleShareModal = () => {
        this.setState({
            ...this.state,
            isShareModalVisible: !this.state.isShareModalVisible
        })
    }


    render() {
        return (
            <View style={styles.postsItemContainer}>
                <View style={styles.postsItemUsernameOptionsContainer}>
                    <TouchableOpacity style={styles.postUsernameContainer}>
                        <Image source={this.props.profilePicURL} style={styles.postsItemUserPhoto} />
                        <Text style={styles.postsItemUsername}>{this.props.username}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.postsOptionsContainer} onPress={this.toggleOptionsModal}> 
                        <Image source={AppIcon.images.postOptions} style={styles.postsItemOptions} />
                    </TouchableOpacity>
                </View>
                <View style={styles.postsImageContainer}>
                    <View style={styles.postsImageItselfContainer}>
                        <Image source={this.props.picURL} style={styles.postsImage} />
                    </View>
                    <View style={styles.viewCountContainer}>
                        <EyeIcon style={styles.viewCountIcon} />
                        <Text style={styles.viewCountText}>{this.props.viewCount}</Text>
                    </View>
                    <View style={styles.favShareContainer}>
                        <View style={styles.favContainer}>
                            <TouchableOpacity>
                                <FavIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.shareContainer}>
                            <TouchableOpacity onPress={this.toggleShareModal}>
                                <ShareIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <ModalPostOptions toggleModalHandler={this.toggleOptionsModal} isModalVisible={this.state.isOptionsModalVisible} />
                <ModalPostShare toggleModalHandler={this.toggleShareModal} isModalVisible={this.state.isShareModalVisible} />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    postsContainer: {
    },
    postsItemContainer: {
        borderColor: AppStyles.color.grey,
        borderTopWidth: 1
    },
    postsItemUsernameOptionsContainer: {
        flexDirection: "row",
        height: 53,
    },
    postUsernameContainer: {
        paddingLeft: Configuration.home.listing_item.offset,
        flex: 90,
        height: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    postsItemUserPhoto: {
        width: 23,
        height: 23,
        resizeMode: "cover",
        borderRadius: 23 / 2,
        borderTopWidth: 1.5,
        borderColor: AppStyles.color.pink
    },
    postsItemUsername: {
        padding: Configuration.home.listing_item.offset - 5,
        fontFamily: AppStyles.fontName.bold,
        color: AppStyles.color.title,
        fontSize: 12,
    },
    postsOptionsContainer: {
        flex: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    postsItemOptions: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    postsImage: {
        flex: 1,
        width: "100%",
        height: 500,
        resizeMode: "cover",
    },
    postsImageItselfContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    postsImageContainer: {

        paddingBottom: Configuration.home.listing_item.offset,
    },
    viewCountContainer: {
        position: 'absolute',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        marginLeft: 20,
        bottom: 26
    },
    viewCountIcon: {
        height: "100%",
        width: "100%",
        marginRight: 5,
        flex: 2
    },
    viewCountText: {
        fontFamily: AppStyles.fontName.bold,
        fontWeight: "bold",
        color: AppStyles.color.white,
        fontSize: 18,
        flex: 3,
    },
    favShareContainer: {
        position: 'absolute',
        right: 0,
        bottom: 26,
        width: 80,
        height: 120,
    },
    favContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    shareContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default PostsContainer