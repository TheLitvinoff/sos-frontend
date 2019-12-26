import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar, 
  SafeAreaView,
  Image, 
  View
} from "react-native";

import FastImage from "react-native-fast-image";
import { connect } from "react-redux";
import {
  AppIcon,
  AppStyles,
} from "../AppStyles";
import { Configuration } from "../Configuration";

class HomeScreen extends React.Component {

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
          
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Registration")}
            style = {{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
          ><Image source={AppIcon.images.topbarMessages} style={styles.messagesButton}/>
        </TouchableOpacity>
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
  

  editProfile = () => {

  }

  render() {
    let firstName = this.props.user.first_name || "Firstname"
    let surName = this.props.user.second_name || "Surname"
    let visibilityPhoto = !this.props.user.visible ? AppIcon.images.homepageVisibilityOff : AppIcon.images.homepageVisibilityOn
    let marriage = this.props.user.marriage_status || "Marriage Status"
    let location = this.props.user.location || "Location"

    return (
      <ScrollView style={styles.container}>
        <View style={styles.profileNameContainer}>
          <Text style={styles.title}>{firstName} {surName}</Text>
          <Image source={visibilityPhoto} style={styles.visibiliyIcon} />
          <View style={styles.profileEditContainer}>
            <TouchableOpacity
              onPress={() => this.editProfile()}
            >
              <Image source={AppIcon.images.homepageEdit} style={styles.editIcon}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profileStatusContainer}>
            <TouchableOpacity
              onPress={() => this.editProfile()}
              style = {{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
            ><Image source={AppIcon.images.homepageUserPhotoDefault} style={styles.userPhoto}/>
            </TouchableOpacity>
            <View style={styles.profileStatusInfoContainer}>
              <View style={styles.profileStatusInfoMarriageContainer}>
                <Image source={AppIcon.images.homepageMarriage} style={styles.marriageIcon}/>
                <Text >{marriage}</Text>
              </View>
              <View style={styles.profileStatusInfoLocationContainer}>
                <Image source={AppIcon.images.homepageLocation} style={styles.marriageIcon}/>
                <Text >{location}</Text>
              </View>
            </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
              onPress={() => this.editProfile()}
              style = {{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: AppStyles.color.lightgrey}}
            ><Image source={AppIcon.images.homepagePlayActive} style={styles.tabButton}/>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => this.editProfile()}
              style = {{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: AppStyles.color.lightgrey}}
            ><Image source={AppIcon.images.homepagePlusInactive} style={styles.tabButton}/>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => this.editProfile()}
              style = {{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
            ><Image source={AppIcon.images.homepageHeartInactive} style={styles.tabButton}/>
          </TouchableOpacity>
        </View>

        <View style={styles.profileFeedContainer}>
          <View style={styles.profileFeedItem}>
            <View style={styles.profileFeedItemTitle}>
              <TouchableOpacity
                  onPress={() => this.editProfile()}
                  style = {{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10}}
                >
                  <Image source={AppIcon.images.defaultUser} style={styles.profileFeedItemUserPhoto}/>
                  <Text style={styles.profileFeedItemName}>Firstname Surname</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.profileFeedItemObject}>

            </View>

          </View>

          <View style={styles.profileFeedItem}>
            <View style={styles.profileFeedItemTitle}>
              <TouchableOpacity
                  onPress={() => this.editProfile()}
                  style = {{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10}}
                >
                  <Image source={AppIcon.images.defaultUser} style={styles.profileFeedItemUserPhoto}/>
                  <Text style={styles.profileFeedItemName}>Firstname Surname</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.profileFeedItemObject}>

            </View>

          </View>

          <View style={styles.profileFeedItem}>
            <View style={styles.profileFeedItemTitle}>
              <TouchableOpacity
                  onPress={() => this.editProfile()}
                  style = {{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10}}
                >
                  <Image source={AppIcon.images.defaultUser} style={styles.profileFeedItemUserPhoto}/>
                  <Text style={styles.profileFeedItemName}>Firstname Surname</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.profileFeedItemObject}>

            </View>

          </View>

          <View style={styles.profileFeedItem}>
            <View style={styles.profileFeedItemTitle}>
              <TouchableOpacity
                  onPress={() => this.editProfile()}
                  style = {{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10}}
                >
                  <Image source={AppIcon.images.defaultUser} style={styles.profileFeedItemUserPhoto}/>
                  <Text style={styles.profileFeedItemName}>Firstname Surname</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.profileFeedItemObject}>

            </View>

          </View>
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
    padding: Configuration.home.listing_item.offset
  },
  profileNameContainer: {
    flexDirection: "row",
    marginBottom: 0
  },
  profileStatusContainer: {
    marginTop: 20,
    marginLeft: 0,
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems: "flex-start"
  },
  profileStatusInfoContainer: {
    flex: 3,
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  profileStatusInfoMarriageContainer: {
    flex: 1, 
    flexDirection: "row"
  },
  profileStatusInfoLocationContainer: {
    flex: 1,
    flexDirection: "row"
  },
  profileFeedContainer: {
    flexDirection: "column"
  },
  profileFeedItem: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "column"
  },
  profileFeedItemTitle: {
    flex: 1,
    flexDirection: "row"
  }, 
  profileFeedItemUserPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5
  },
  profileFeedItemName: {
    marginLeft: 10,
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold",
    color: AppStyles.color.title,
    fontSize: 14
  },
  profileFeedItemObject: {
    height: 300,
    backgroundColor: AppStyles.color.lightgrey
  },
  profileEditContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  editIcon: {
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold",
    color: AppStyles.color.title,
    fontSize: 22
  },
  visibiliyIcon: {
    height: 30,
    marginLeft: 3,
    resizeMode: 'contain',
  },
  userPhoto: {
    height: 90,
    resizeMode: 'contain',
  },
  marriageIcon: {
    height: 20,
    resizeMode: 'contain',
  }, 
  tabContainer: {
    borderWidth: 1,
    borderLeftWidth: 0, 
    borderRightWidth: 0, 
    borderColor: AppStyles.color.lightgrey,
    marginTop: 20,
    flexDirection: "row",
  }, 
  tabButton: {
    height: 20,
    marginVertical: 10,
    resizeMode: 'contain',
  }, 
  messagesButton: {
    height: 30,
    marginVertical: 10,
    resizeMode: 'contain',
  }
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(HomeScreen);
