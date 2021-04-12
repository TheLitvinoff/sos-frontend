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

import CategoryItem from "./GlobalPage/Categories";
import PostPreviewItem from "./GlobalPage/Posts"

class GlobalScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      categories: [
        { name: "Health", isActive: false },
        { name: "Networking", isActive: false },
        { name: "Design", isActive: false },
        { name: "Business", isActive: false },
        { name: "Cooking", isActive: false },
        { name: "Sport", isActive: false },
        { name: "Mindfulness", isActive: false },
      ]
    };
    this.activeChangeHandler = this.activeChangeHandler.bind(this)
  }

  activeChangeHandler(index, activeness) {
    tempCategories = this.state.categories
    tempCategories[index].isActive = !activeness
    this.setState({
      categories: tempCategories
    })
  }

  componentDidMount() {
    this.props.navigation.setParams({
      menuIcon: this.props.user.profileURL
    });

  }



  render() {

    let posts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

    return (
      <ScrollView style={styles.container}>

        <View style={styles.categoryContainer}>
          <FlatList
            data={this.state.categories}
            numColumns={4}
            renderItem={({ item, index }) => (
              <CategoryItem index={index} name={item.name} isActive={item.isActive} activeChangeHandler={this.activeChangeHandler} />
            )}
          />

        </View>

        <View style={styles.postsContainer}>
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

  },

  categoryContainer: {
    marginTop: 30,
    padding: Configuration.home.listing_item.offset
  },

  postsContainer: {

  }


});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(GlobalScreen);
