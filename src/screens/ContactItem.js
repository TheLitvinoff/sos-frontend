import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import {
    AppIcon,
    AppStyles,
} from "../AppStyles";

class ContactItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <View style={styles.contactItemTitle}> 

                <TouchableOpacity
                    onPress={() => this.props.navigation.dispatch({ type: "Messages", opponent: this.props.title, user: this.props.user })}
                    style = {{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10}}>
                    <Image source={AppIcon.images.defaultUser} style={styles.contactItemUserPhoto}/>
                    <Text style={styles.contactItemName}>{this.props.title}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    contactItemTitle: {
        marginHorizontal: 20,
        borderWidth: 1,
        borderLeftWidth: 0, 
        borderRightWidth: 0, 
        borderTopWidth: 0,
        borderColor: AppStyles.color.lightgrey,
        flexDirection: "row"
    }, 
    contactItemUserPhoto: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 5
    },
    contactItemName: {
        marginLeft: 10,
        fontFamily: AppStyles.fontName.bold,
        fontWeight: "bold",
        color: AppStyles.color.title,
        fontSize: 14
    }
});


export default ContactItem