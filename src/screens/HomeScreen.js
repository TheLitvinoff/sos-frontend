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
  FlatList
} from "react-native";

import FastImage from "react-native-fast-image";
import { connect } from "react-redux";
import {
  AppIcon,
  AppStyles,
} from "../AppStyles";
import { Configuration } from "../Configuration";

import PostPreviewItem from "./ProfilePage/PostsPreview";

import SettingsIcon from "../../assets/icons/profileSettings.svg";
import EditIcon from "../../assets/icons/profileEdit.svg";
import ContactsIcon from "../../assets/icons/profileContacts.svg";
import TabPostsActive from "../../assets/icons/profileTabPostsActive.svg";
import TabPostsInactive from "../../assets/icons/profileTabPostsInactive.svg";
import TabFavActive from "../../assets/icons/profileTabFavActive.svg";
import TabFavInactive from "../../assets/icons/profileTabFavInactive.svg";

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {

    },
    headerTitle: () => {
    },
    headerLeft: () => {
      return (
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
        </SafeAreaView>
      );
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      menuIcon: this.props.user.profileURL
    });
  }


  onPressedSettings = () => {
    this.props.navigation.dispatch({ type: "Settings", user: this.props.user });
  }

  editProfile = () => {

  }

  render() {
    let firstName = this.props.user.first_name || "Firstname"
    let surName = this.props.user.second_name || "Surname"
    let username = this.props.user.username || "username"
    let visibilityPhoto = !this.props.user.visible ? AppIcon.images.homepageVisibilityOff : AppIcon.images.homepageVisibilityOn
    let marriage = this.props.user.marriage_status || "Marriage Status"
    let location = this.props.user.location || "Location"
    let picURL = this.props.user.picURL || AppIcon.images.defaultUser
    let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
      <ScrollView style={styles.container}>

        <View style={styles.settingsContainer}>
          <TouchableOpacity onPress={this.onPressedSettings}>
            <View style={styles.settingsButtonContainer}>
              <SettingsIcon />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.picContainer}>
          <View style={styles.picUserContainer}>
            <Image source={picURL} style={styles.picUser} />
          </View>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{firstName} {surName}</Text>
        </View>

        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>@{username}</Text>
        </View>


        <View style={styles.actionButtonsContainer}>
          <View style={styles.actionButtonEditContainer}>
            <View style={styles.actionButtonEditIconContainer}>
              <TouchableOpacity>
                <EditIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.actionButtonContactsContainer}>
            <View style={styles.actionButtonContactsIconContainer}>
              <TouchableOpacity>
                <ContactsIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.tabsButtonsContainer}>
          <View style={styles.tabsButtonPostsContainer}>
            <View style={styles.tabsButtonPostsIconContainer}>
              <TouchableOpacity>
                <TabPostsActive />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tabsButtonFavContainer}>
            <View style={styles.tabsButtonFavIconContainer}>
              <TouchableOpacity>
                <TabFavInactive />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.tabsContentsContainer}>
          <FlatList
            data={posts}
            numColumns={3}
            renderItem={({ item }) => (
              <PostPreviewItem />
            )}
          />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
  },
  settingsContainer: {
    marginTop: 30,
    height: 48,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  picContainer: {
    height: 157,
    justifyContent: "center",
    alignItems: "center"
  },
  nameContainer: {
    height: 48,
    justifyContent: "center",
    alignItems: "center"
  },
  usernameContainer: {
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  actionButtonsContainer: {
    height: 100,
    flexDirection: "row"
  },
  tabsButtonsContainer: {
    height: 43,
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center"

  },
  tabsContentsContainer: {
    flex: 1,
  },

  settingsButtonContainer: {
    marginRight: 30
  },

  picUserContainer: {
    height: "100%",
    width: 157,
  },

  picUser: {
    borderRadius: 15,
    borderColor: AppStyles.color.pink,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },

  nameText: {
    fontFamily: AppStyles.fontName.bold,
    color: AppStyles.color.title,
    fontSize: 18
  },

  usernameText: {
    fontFamily: AppStyles.fontName.main,
    color: AppStyles.color.title,
    fontSize: 12
  },

  actionButtonEditContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 20
  },
  actionButtonContactsContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },

  tabsButtonPostsContainer: {
    borderWidth: 1,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: AppStyles.color.lightgrey,
    borderBottomColor: "black"
  },

  tabsButtonFavContainer: {
    borderWidth: 1,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: AppStyles.color.lightgrey
  },
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(HomeScreen);
