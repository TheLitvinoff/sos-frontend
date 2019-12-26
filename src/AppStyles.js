import { Platform, StyleSheet, Dimensions } from "react-native";
import { Configuration } from "./Configuration";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const AppStyles = {
  color: {
    main: "#5ea23a",
    text: "#696969",
    title: "#464646",
    subtitle: "#545454",
    lightgrey: "#e6e6e6",
    categoryTitle: "#161616",
    tint: "#7e4796",
    description: "#bbbbbb",
    filterTitle: "#8a8a8a",
    starRating: "#2bdf85",
    location: "#a9a9a9",
    white: "white",
    facebook: "#4267b2",
    grey: "grey",
    greenBlue: "#00aea8",
    placeholder: "#a0a0a0",
    background: "#f2f2f2",
    blue: "#3293fe"
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16
  },
  buttonWidth: {
    main: "70%"
  },
  textInputWidth: {
    main: "80%"
  },
  fontName: {
    main: "System",
    bold: "System"
  },
  borderRadius: {
    main: 25,
    small: 5
  }
};

export const AppIcon = {
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginRight: 10
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25
  },
  images: {
    authorizationSingUp: require("../assets/icons/1.png"),
    authorizationSingIn: require("../assets/icons/2.png"),
    logo: require("../assets/icons/logo.png"),

    loginEmail: require("../assets/icons/loginEmail.png"),
    loginFinger: require("../assets/icons/loginFinger.png"),
    
    regisEmail: require("../assets/icons/regisEmail.png"),
    regisDots: require("../assets/icons/regisDots.png"),
    regisFinger: require("../assets/icons/regisFinger.png"),
    regisTypePrivateActive: require("../assets/icons/regisTypePrivateActive.png"),
    regisTypePrivateInactive: require("../assets/icons/regisTypePrivateInactive.png"),
    regisTypeBusinessActive: require("../assets/icons/regisTypeBusinessActive.png"),
    regisTypeBusinessInactive: require("../assets/icons/regisTypeBusinessInactive.png"),
    regisDotsFinger: require("../assets/icons/regisDotsFinger.png"),
    regisTypeDots: require("../assets/icons/regisTypeDots.png"),
    regisTypeUser: require("../assets/icons/regisTypeUser.png"),

    tabbarProfileActive: require("../assets/icons/tabbarProfileActive.png"),
    tabbarProfileInactive: require("../assets/icons/tabbarProfileInactive.png"),
    tabbarContactsActive: require("../assets/icons/tabbarContactsActive.png"),
    tabbarContactsInactive: require("../assets/icons/tabbarContactsInactive.png"),
    tabbarFeedInactive: require("../assets/icons/tabbarFeedInactive.png"),
    tabbarFeedActive: require("../assets/icons/tabbarFeedActive.png"),
    tabbarGlobalInactive: require("../assets/icons/tabbarGlobalInactive.png"),
    tabbarFeedbackActive: require("../assets/icons/tabbarFeedbackActive.png"),
    tabbarFeedbackInactive: require("../assets/icons/tabbarFeedbackInactive.png"),
    tabbarGlobalActive: require("../assets/icons/tabbarGlobalActive.png"),

    topbarMessages: require("../assets/icons/topbarMessages.png"),

    homepageVisibilityOn: require("../assets/icons/homepageVisibilityOn.png"),
    homepageVisibilityOff: require("../assets/icons/homepageVisibilityOff.png"),
    homepageEdit: require("../assets/icons/homepageEdit.png"),
    homepageUserPhotoDefault: require("../assets/icons/homepageUserPhotoDefault.png"),
    homepageMarriage: require("../assets/icons/homepageMarriage.png"),
    homepageLocation: require("../assets/icons/homepageLocation.png"),
    homepagePlusActive: require("../assets/icons/homepagePlusActive.png"),
    homepagePlusInactive: require("../assets/icons/homepagePlusInactive.png"),
    homepagePlayActive: require("../assets/icons/homepagePlayActive.png"),
    homepagePlayInactive: require("../assets/icons/homepagePlayInactive.png"),
    homepageHeartActive: require("../assets/icons/homepageHeartActive.png"),
    homepageHeartInactive: require("../assets/icons/homepageHeartInactive.png"),

    contactsGreenFull: require("../assets/icons/contactsGreenFull.png"),    
    contactsRedHead: require("../assets/icons/contactsRedHead.png"), 
    contactsPlusHead: require("../assets/icons/contactsPlusHead.png"),  
    contactsSearch: require("../assets/icons/contactsSearch.png"),  

    home: require("../assets/icons/home.png"),
    defaultUser: require("../assets/icons/default_user.jpg"),
    logout: require("../assets/icons/shutdown.png")
  }
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: "row"
  },
  container: {
    padding: 10
  },
  image: {
    justifyContent: "center",
    width: 35,
    height: 35,
    margin: 6
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: "normal",
    fontFamily: AppStyles.fontName.main
  }
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold"
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10
  },
  leftSubtitle: {
    flex: 2
  },
  avatarStyle: {
    height: 80,
    width: 80
  }
});
