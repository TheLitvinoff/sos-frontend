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
import RectangleActive from "../../../assets/icons/globalRectangleActive.svg"
import RectangleInactive from "../../../assets/icons/globalRectangleInactive.svg"


class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var handleToUpdate = this.props.activeChangeHandler;
        rectangleImage = this.props.isActive ? <RectangleActive /> : <RectangleInactive />

        return (
            <View style={styles.categoryItem}>
                <TouchableOpacity 
                    onPress={() => handleToUpdate(this.props.index, this.props.isActive)}>
                    <View style={this.props.isActive ? styles.categoryItemContainerActive : styles.categoryItemContainerInactive}>
                        <View style={styles.categoryItemRectangle}>
                            {rectangleImage}
                        </View>
                        <Text style={this.props.isActive ? styles.categoryItemTextActive : styles.categoryItemTextInactive}>{this.props.name}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    categoryItem: {
        
    },
    categoryItemContainerInactive: {
        borderRadius: 5,
        backgroundColor: AppStyles.color.greyfill,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    categoryItemContainerActive: {
        borderRadius: 5,
        backgroundColor: AppStyles.color.pink,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },

    categoryItemRectangle: {
        margin: 5
    },  
    categoryItemTextInactive: {
        fontFamily: AppStyles.fontName.main,
        fontWeight: "bold",
        color: "black",
        fontSize: 10,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5
    },
    categoryItemTextActive: {
        fontFamily: AppStyles.fontName.main,
        fontWeight: "bold",
        color: "white",
        fontSize: 10,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5
    }
});

export default CategoryItem
