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

class StoriesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.storiesContainer}>
                <FlatList
                    data={this.props.users}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <StoriesItem username={item.username} profilePicURL={item.profilePicURL}/>
                    )}
                />
            </View>
        );
    }
}


class StoriesItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.storiesItem}>
                <TouchableOpacity>
                    <View style={styles.storiesItemContainer}>
                        <Image source={this.props.profilePicURL} style={styles.storiesItemUserPhoto}/>
                        <Text style={styles.storiesItemUsername}>{this.props.username}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    storiesContainer: {
        padding: 10
    },
    storiesItemContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5
    },
    storiesItemUserPhoto: {
        width: 64,
        height: 64,
        resizeMode: "cover",
        borderRadius: 64 / 2,
        borderWidth: 3,
        borderColor: AppStyles.color.pink
    },
    storiesItemUsername: {
        paddingTop: 5,
        fontFamily: AppStyles.fontName.main,
        color: AppStyles.color.title,
        fontSize: 10,
   }
});

export default StoriesContainer
