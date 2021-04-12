import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar, 
  SafeAreaView,
  Image
} from "react-native";

import FastImage from "react-native-fast-image";
import { connect } from "react-redux";
import {
  AppIcon,
  AppStyles,
} from "../AppStyles";


import LogoIcon from "../../assets/icons/mainLogo.svg";
import Stories from "../../assets/icons/mainStories.svg";
import StoriesContainer from "./MainPage/Stories";
import PostsContainer from "./MainPage/Posts";

class FeedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      
    },
    headerTitle: () => {
      return(
        <SafeAreaView>
          
          <LogoIcon />
        </SafeAreaView>
      )
    },
    headerLeft: () => {
      return (
        <SafeAreaView>
          
          <StatusBar barStyle="dark-content"/>

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

  render() {
    return (
      testUsers = [
        { "username": "Your Story", "profilePicURL": AppIcon.images.slavaUser },
        { "username": "Andrew Poletaev", "profilePicURL": AppIcon.images.andrewUser },
        { "username": "Zalina", "profilePicURL": AppIcon.images.zalinaUser },
        { "username": "User 3", "profilePicURL": AppIcon.images.defaultUser },
        { "username": "User 2", "profilePicURL": AppIcon.images.defaultUser },
        { "username": "User Shmuser", "profilePicURL": AppIcon.images.defaultUser },
        { "username": "Test User", "profilePicURL": AppIcon.images.defaultUser },
        { "username": "LLL", "profilePicURL": AppIcon.images.defaultUser },
      ],

      testPosts = [
        { "username": "Zalina", "picURL": AppIcon.images.defaultPost, "profilePicURL": AppIcon.images.zalinaUser, "viewCount": 25 },
        { "username": "Andrew Poletaev", "picURL": AppIcon.images.andrewUser, "profilePicURL": AppIcon.images.andrewUser, "viewCount": 17 },
      ],

      <ScrollView style={styles.container}>
        <StoriesContainer users={testUsers} />

        <PostsContainer posts={testPosts} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
  }
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(FeedScreen);
