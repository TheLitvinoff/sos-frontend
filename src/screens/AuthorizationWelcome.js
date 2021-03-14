import React from "react";
import Button from "react-native-button";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AppStyles, AppIcon } from "../AppStyles";
import { AsyncStorage, ActivityIndicator } from "react-native";
import { Configuration } from "../Configuration";

import Logosvg from "../../assets/icons/logo.svg";
import SignInIcon from "../../assets/icons/welcomeSignIn.svg";
import SignUpIcon from "../../assets/icons/welcomeSignUp.svg";
import BigWave from "../../assets/icons/welcomeBigWave.png";
import SmallWave from "../../assets/icons/welcomeSmallWave.png";


class AuthorizationWelcomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	async tryToLoginFirst() {
		const email = await AsyncStorage.getItem("@loggedInUserID:email");
		const password = await AsyncStorage.getItem("@loggedInUserID:password");
		if (email !== null && password !== null) {
			fetch('http://' + Configuration.backend.host + ":" + Configuration.backend.port + "/login", {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			})
				.then((response) => {
					if (response.status != 200) {
						alert("Invalid Email or Password");
					} else {
						this.props.navigation.dispatch({ type: "Login", user: { email: email } });
					}
				})
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		};
		this.tryToLoginFirst();
	}

	render() {
		if (this.state.isLoading == true) {
			return (
				<ActivityIndicator
					style={styles.spinner}
					size="large"
					color={AppStyles.color.tint}
				/>
			);
		}
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Logosvg
						width="30%"
					/>
				</View>

				<View style={styles.welcomeTextContainer}>
					<Text style={styles.welcomeText}>WELCOME</Text>
				</View>

				<View style={styles.normalTextContainer}>
					<Text style={styles.normalText}>Sign in to continue</Text>
				</View>

				<View style={styles.selectionContainer}>
					<View style={styles.signInContainer}>
						<TouchableOpacity
							onPress={() => { this.props.navigation.navigate("Login"); }}
							style={styles.signIn}>
							<SignInIcon
								
							/>
						</TouchableOpacity>
					</View>


					<View style={styles.signUpContainer}>
						<TouchableOpacity
							onPress={() => { this.props.navigation.navigate("Registration"); }}
							style={styles.signUp}>
							<SignUpIcon
								
							/>
						</TouchableOpacity>
					</View>


				</View>
				<Image source={SmallWave} style={styles.smallWave} />
				<Image source={BigWave} style={styles.bigWave} />

				<View style={styles.emptyFillContainer}>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: "center",
		alignItems: "center",
	},
	logoContainer: {
		flex: 50,
		alignSelf: "stretch",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	welcomeTextContainer: {
		flex: 15,
		justifyContent: "center",
	},
	normalTextContainer: {
		flex: 10,
		justifyContent: "flex-start",
	},
	welcomeText: {
		fontFamily: AppStyles.fontName.bold,
		color: AppStyles.color.text,
		fontSize: 24,
	},
	normalText: {
		color: AppStyles.color.text,
		fontFamily: AppStyles.fontName.main,
		fontSize: 14,
	},
	selectionContainer: {
		flex: 50,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: "stretch",
	},
	signInContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: '5%'
	},
	signUpContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	emptyFillContainer: {
		flex: 40
	},
	smallWave: {
		position: 'absolute',
		zIndex: 1,
		bottom: 0,
		width: '100%',
		height: '22%'
	},
	bigWave: {
		position: 'absolute',
		zIndex: 2,
		bottom: 0,
		width: '100%',
		height: '25%'
	}

});

export default AuthorizationWelcomeScreen;
