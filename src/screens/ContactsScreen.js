import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar, 
  SafeAreaView,
  Image,
  View, 
  TextInput, 
  FlatList
} from "react-native";

import FastImage from "react-native-fast-image";
import { connect } from "react-redux";
import {
  AppIcon,
  AppStyles,
} from "../AppStyles";
import { Configuration } from "../Configuration";
import ContactItem from "./ContactItem";
import { thisExpression } from "@babel/types";

class ContactsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: AppStyles.color.tint,
    },
    headerTitle: () => {
      return(
        <Image
          source={AppIcon.images.logo}
          style={{
              width: 70,
              marginBottom: 10,
              resizeMode: 'contain',
          }}
        />
      )
    },
    headerLeft: () => {
      return (
        <SafeAreaView>
          
          <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        </SafeAreaView>
      );
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      menuIcon: this.props.user.profileURL
    });
    this.props.navigation.dispatch({ type: "Message", user: this.props.user});
    fetch('http://' + Configuration.backend.host + ":" + Configuration.backend.port + "/contacts/" + this.props.user.email, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((response) => {
      // let usersResp = response.toArray();
      this.setState({
        users: response
      })
      if ( response.status != 200 ) {
      } else {
      }
    })
    .catch((error) => {     
        const { code, message } = error;
        alert(message);
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
              onPress={() => 0}
              style = {{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: AppStyles.color.lightgrey}}
            ><Image source={AppIcon.images.contactsGreenFull} style={styles.tabButton}/>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => 0}
              style = {{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: AppStyles.color.lightgrey}}
            ><Image source={AppIcon.images.contactsRedHead} style={styles.tabButton}/>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => 0}
              style = {{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
            ><Image source={AppIcon.images.contactsPlusHead} style={styles.tabButton}/>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Image source={AppIcon.images.contactsSearch} style={styles.searchIcon}/>
          <TextInput
              onChangeText={text => 0}
              placeholder="Search..."
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
        </View>
        {/* <ContactItem title={this.state.users}/> */}
        <ScrollView>
          <FlatList
            data={this.state.users}
            renderItem={({ item }) => (
              <ContactItem title={item.email} navigation={navigation} user={this.props.user}/> 
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: Configuration.home.listing_item.offset
  },
  title: {
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold",
    color: AppStyles.color.title,
    fontSize: 25
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5
  },
  tabContainer: {
    borderWidth: 1,
    borderLeftWidth: 0, 
    borderRightWidth: 0, 
    borderTopWidth: 0,
    borderColor: AppStyles.color.lightgrey,
    flexDirection: "row",
  },
  tabButton: {
    height: 37,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  searchContainer: {
    borderWidth: 1,
    borderLeftWidth: 0, 
    borderRightWidth: 0, 
    borderTopWidth: 0,
    borderColor: AppStyles.color.lightgrey,
    flexDirection: "row",
  }, 
  searchIcon: {
    height: 30,
    marginVertical: 10,
    resizeMode: 'contain',
  }
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ContactsScreen);
