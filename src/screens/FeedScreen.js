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
import { Configuration } from "../Configuration";


import LogoIcon from "../../assets/icons/mainLogo.svg";
import Stories from "../../assets/icons/mainStories.svg";


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
          
          <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

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
      <ScrollView style={styles.container}>
        <Stories />


      </ScrollView>
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
  }
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(FeedScreen);
