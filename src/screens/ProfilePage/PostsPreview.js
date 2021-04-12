import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { colors } from 'react-native-elements';
import {
    AppIcon,
    AppStyles,
} from "../../AppStyles";
import { Configuration } from "../../Configuration";

let randColors = ["#A24891", "#833F8B", "#C35399"];

class PostPreviewItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={{
                backgroundColor: randColors[~~(Math.random() * randColors.length)],
                height: 147,
                width: "33.33%",
            }} >
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    postPreviewItem: {
    }
});

export default PostPreviewItem