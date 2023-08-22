import React, { useContext, useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground
} from "react-native";
import { AuthContext } from "./AuthContext";
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const SignUp = ({ navigation }) => {
  const { register } = useContext(AuthContext);
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [role, setRole] = useState("Dealer");
  const [email, setEmail] = useState(null);

  const handleRegister = () => {
    if (!name || !mobile || !email || !role || !password) {
      alert('Please fill in all the mandatory fields.');
      return;
    }
    register(name, email, password, mobile, role);
  };
  return (
    <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.logoAlignment}>
            <Image source={require("../assets/logo.png")} style={styles.logoSize} />
          </View>

          <View style={styles.SignUpTitle}>
            <Text style={styles.SignUpText}>Sign Up</Text>
          </View>
          <View style={{marginTop:moderateScaleVertical(-30)}}>
            {/* name */}
            <TextInput
              style={styles.NameInputbotton}
              autoCapitalize
              autoCorrect={false}
              placeholder="Name"
              onChangeText={setName}
              placeholderTextColor="#C7C7CD"
            />

            {/* Mobile No */}
            <TextInput
              style={styles.MobileNoInputbotton}
              autoCapitalize
              autoCorrect={false}
              placeholder="Mobile No."
              keyboardType='numeric'
              onChangeText={setMobile}
              placeholderTextColor="#C7C7CD"
            />

            {/* Email Id */}
            <TextInput
              style={styles.EmailIdInputbotton}
              autoCapitalize
              autoCorrect={false}
              placeholder="Email Id"
              onChangeText={setEmail}
              placeholderTextColor="#C7C7CD"
            />

            {/* password*/}
            <TextInput
              style={styles.PasswordInputbotton}
              autoCapitalize
              autoCorrect={false}
              placeholder="Password"
              // value={password}
              secureTextEntry
              placeholderTextColor="#C7C7CD"
            />

            {/* Confirm Password*/}
            <TextInput
              style={styles.ConfirmPasswordInputbotton}
              autoCapitalize
              autoCorrect={false}
              placeholder="Confirm password"
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#C7C7CD"
            />
          </View>

          <TouchableOpacity onPress={handleRegister} style={styles.logInButtonAlignment}>
            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
              <Text style={styles.logInButtonText}>SIGN UP</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.ForgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={{ flex: 1, marginTop: moderateScaleVertical(20) }}>
            <View style={styles.line}></View>
            <View style={styles.ExistingCustomer}>
              <Text style={styles.ExistingCustomerText}>Are you Existing customer Click </Text>
              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.ExistingCustomerHereText}> here </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
        {/* </View> */}

      </ScrollView>
      <View >
        <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStripBottom} />
      </View>


    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  goldenStripBottom: {
    width: "100%",
    height: 6,
  },
  logoAlignment: {
    alignSelf: 'center',
    margintop: moderateScaleVertical(0),

  },

  logoSize: {
    width: moderateScale(200),
    height: moderateScaleVertical(250),
  },
  SignUpTitle: {
    marginTop: moderateScaleVertical(5),
    fontSize: textScale(18),
    alignSelf: 'center'
  },
  SignUpText: {
    fontSize: textScale(23),
    marginTop: moderateScaleVertical(-30),
    textAlign: "center",
    color: "black",
    fontFamily: "Poppins-Medium"
  },

  // Input Buttons CSS

  //  Name Input Buttons
  NameInputbotton: {
    color: "black",
    marginBottom: moderateScaleVertical(5),
    width: "80%",
    marginTop: moderateScaleVertical(30),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "#bc9954",
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: 13,
  },

  //  Mobile No Input Buttons
  MobileNoInputbotton: {
    color: "black",
    marginBottom: moderateScaleVertical(5),
    width: "80%",
    marginTop: moderateScaleVertical(10),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "#bc9954",
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: 13,
  },

  //  Email Id Input Buttons
  EmailIdInputbotton: {
    color: "black",
    marginBottom: moderateScaleVertical(5),
    width: "80%",
    marginTop: moderateScaleVertical(10),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "#bc9954",
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: 13,
  },

  //  Password Input Buttons
  PasswordInputbotton: {
    color: "black",
    marginBottom: moderateScaleVertical(5),
    width: "80%",
    marginTop: moderateScaleVertical(10),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "#bc9954",
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: 13,
  },
  //  Confirm password Input Buttons
  ConfirmPasswordInputbotton: {
    color: "black",
    marginBottom: moderateScaleVertical(5),
    width: "80%",
    marginTop: moderateScaleVertical(10),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "#bc9954",
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: 13,
  },
  logInButtonAlignment: {
    alignItems: "center",
    fontFamily: "Poppins-Medium",
    marginBottom: moderateScaleVertical(-3),
  },
  logInButtonText: {
    fontSize: textScale(23),
    color: "black",
    marginLeft: moderateScale(0),
    borderRadius: 40,
    paddingTop: moderateScaleVertical(5),
    fontFamily: "Poppins-Medium",
  },
  ImageBackgroundStyle: {
    alignItems: "center",
    padding: moderateScale(7),
    width: moderateScale(200),
    height: moderateScaleVertical(60),
    justifyContent: 'center',
    marginTop: moderateScaleVertical(40),
    fontFamily: "Poppins-Medium"
  },
  ForgotPasswordText: {
    fontSize: textScale(14),
    color: "#a4a4a4",
    marginBottom: moderateScaleVertical(25),
    textAlign: "center",
    marginTop: moderateScaleVertical(20),
  },
  ExistingCustomer: {
    flexDirection: "row",
    justifyContent: "center",

  },
  ExistingCustomerText: {
    textAlign: "center",
    paddingTop: moderateScaleVertical(6),
    fontWeight: 'bold',
    color: "#404040",
  },
  ExistingCustomerHereText: {
    textAlign: "center",
    paddingTop: moderateScaleVertical(6),
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: "#404040",


  },
  line: {
    width: "80%",
    height: moderateScaleVertical(1.5),
    backgroundColor: "#a4a4a4",
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(10)
  },
});

