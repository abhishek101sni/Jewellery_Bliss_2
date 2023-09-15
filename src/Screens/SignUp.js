import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  Linking,
} from 'react-native';
import {AuthContext} from './AuthContext';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../utils/responsive';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';

const SignUp = ({navigation}) => {
  const {register} = useContext(AuthContext);
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [role, setRole] = useState('Dealer');
  const [email, setEmail] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = () => {
    if (!name || !mobile || !email || !role || !password) {
      alert('Please fill in all the mandatory fields.');
      return;
    }
    register(name, email, password, mobile, role);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/background-image2.png')}>
        <ScrollView>
          <View style={{flex: 1}}>
            <View style={styles.logoAlignment}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.logoSize}
              />
            </View>

            <View style={styles.SignUpTitle}>
              <Text style={styles.SignUpText}>Sign Up</Text>
            </View>

            <View>
              {/* <View style={{marginTop: moderateScaleVertical(-30)}}> */}
                <TextInput
                  style={styles.NameInputbotton}
                  autoCapitalize
                  autoCorrect={false}
                  placeholder="Name"
                  onChangeText={setName}
                  placeholderTextColor="#C7C7CD"
                />

                <TextInput
                  style={styles.MobileNoInputbotton}
                  autoCapitalize
                  autoCorrect={false}
                  placeholder="Mobile No."
                  keyboardType="numeric"
                  onChangeText={setMobile}
                  placeholderTextColor="#C7C7CD"
                />

                <TextInput
                  style={styles.EmailIdInputbotton}
                  autoCapitalize
                  autoCorrect={false}
                  placeholder="Email Id"
                  onChangeText={setEmail}
                  placeholderTextColor="#C7C7CD"
                />

                <TextInput
                  style={styles.PasswordInputbotton}
                  autoCapitalize
                  autoCorrect={false}
                  placeholder="Password"
                  // value={password}
                  secureTextEntry
                  placeholderTextColor="#C7C7CD"
                />

                <TextInput
                  style={styles.ConfirmPasswordInputbotton}
                  autoCapitalize
                  autoCorrect={false}
                  placeholder="Confirm password"
                  onChangeText={setPassword}
                  secureTextEntry
                  placeholderTextColor="#C7C7CD"
                />
              {/* </View> */}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: 90,
                  marginLeft: moderateScaleVertical(41),
                  marginTop: moderateScaleVertical(10),
                }}>
                <Text
                  style={{
                    color: '#404040',
                    fontFamily: 'HurmeGeometricSans1SemiBold',
                    fontSize: textScale(12),
                  }}>
                  To know about Terms & Conditions Click
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'http://jewellerybliss.com/term-condition.html',
                    );
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#404040',
                      textDecorationLine: 'underline',
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      fontSize: textScale(12),
                    }}>
                    {' '}
                    here
                  </Text>
                </TouchableOpacity>
              </View>

              {/* CheckBox */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: moderateScale(2),
                }}>
                <CheckBox
                  value={isChecked}
                  onValueChange={setIsChecked}
                  style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>
                  I agree to the terms and conditions
                </Text>
              </View>
              {/* CheckBox */}
            </View>
            {/* </KeyboardAwareScrollView> */}

            <TouchableOpacity
              onPress={handleRegister}
              style={[
                styles.logInButtonAlignment,
                isChecked ? styles.activeButton : styles.disabledButton,
              ]}
              disabled={!isChecked}>
              <ImageBackground
                source={require('../assets/CompressedTexture3.jpg')}
                style={styles.ImageBackgroundStyle}
                imageStyle={{borderRadius: 80}}>
                <Text style={styles.logInButtonText}>SIGN UP</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('forgotPass');
              }}>
              <Text style={styles.ForgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                marginTop: moderateScaleVertical(20),
                marginBottom: moderateScaleVertical(20),
              }}>
              <View style={styles.line}></View>
              <View style={styles.ExistingCustomer}>
                <Text style={styles.ExistingCustomerText}>
                  Are you Existing customer Click{' '}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                  <Text style={styles.ExistingCustomerHereText}>here </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* </View> */}
        </ScrollView>

        {/* <View >
        <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStripBottom} />
      </View> */}
        {/* <View style={{ top: height - 890, }}>
        <Image source={require("../assets/GOLDEN-STRIP.png")} style={{  width: "100%", }} />
      </View> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  goldenStripBottom: {
    width: '100%',
    height: 6,
    position: 'static',
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
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(20),
  },
  SignUpText: {
    fontSize: textScale(23),
    marginTop: moderateScaleVertical(-30),
    textAlign: 'center',
    color: 'black',
    fontFamily: 'HurmeGeometricSans1',
  },

  // Input Buttons CSS

  //  Name Input Buttons
  NameInputbotton: {
    color: 'black',
    marginBottom: moderateScaleVertical(5),
    width: '80%',
    marginTop: moderateScaleVertical(30),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#bc9954',
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: textScale(13),
    fontFamily: 'HurmeGeometricSans1',
  },

  //  Mobile No Input Buttons
  MobileNoInputbotton: {
    color: 'black',
    marginBottom: moderateScaleVertical(5),
    width: '80%',
    marginTop: moderateScaleVertical(10),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#bc9954',
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: textScale(13),
    fontFamily: 'HurmeGeometricSans1',
  },

  //  Email Id Input Buttons
  EmailIdInputbotton: {
    color: 'black',
    marginBottom: moderateScaleVertical(5),
    width: '80%',
    marginTop: moderateScaleVertical(10),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#bc9954',
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: textScale(13),
    fontFamily: 'HurmeGeometricSans1',
  },

  //  Password Input Buttons
  PasswordInputbotton: {
    color: 'black',
    marginBottom: moderateScaleVertical(5),
    width: '80%',
    marginTop: moderateScaleVertical(10),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#bc9954',
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: textScale(13),
    fontFamily: 'HurmeGeometricSans1',
  },
  //  Confirm password Input Buttons
  ConfirmPasswordInputbotton: {
    color: 'black',
    marginBottom: moderateScaleVertical(5),
    width: '80%',
    marginTop: moderateScaleVertical(10),
    alignSelf: 'center',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#bc9954',
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontSize: textScale(13),
    fontFamily: 'HurmeGeometricSans1',
  },
  // CheckBox
  checkbox: {
    marginTop: moderateScaleVertical(10),
    marginLeft: moderateScale(24),
  },
  checkboxLabel: {
    color: 'black',
    // marginBottom: moderateScaleVertical(5),
    width: '80%',
    fontSize: textScale(13),
    fontFamily: 'HurmeGeometricSans1SemiBold',
    marginTop: moderateScaleVertical(15),
    color: '#404040',
  },
  logInButtonAlignment: {
    alignItems: 'center',
    marginBottom: moderateScaleVertical(-3),
  },
  logInButtonText: {
    fontSize: textScale(23),
    color: 'black',
    marginLeft: moderateScale(0),
    borderRadius: 40,
    fontFamily: 'HurmeGeometricSans1',
  },
  ImageBackgroundStyle: {
    alignItems: 'center',
    padding: moderateScale(7),
    width: moderateScale(200),
    height: moderateScaleVertical(60),
    justifyContent: 'center',
    marginTop: moderateScaleVertical(40),
    fontFamily: 'Poppins-Medium',
  },
  ForgotPasswordText: {
    fontSize: textScale(14),
    color: '#a4a4a4',
    marginBottom: moderateScaleVertical(15),
    textAlign: 'center',
    marginTop: moderateScaleVertical(20),
    fontFamily: 'HurmeGeometricSans1',
  },
  ExistingCustomer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ExistingCustomerText: {
    textAlign: 'center',
    paddingTop: moderateScaleVertical(6),
    color: '#404040',
    fontFamily: 'HurmeGeometricSans1SemiBold',
  },
  ExistingCustomerHereText: {
    textAlign: 'center',
    paddingTop: moderateScaleVertical(6),
    textDecorationLine: 'underline',
    color: '#404040',
    fontFamily: 'HurmeGeometricSans1SemiBold',
  },
  line: {
    width: '80%',
    height: moderateScaleVertical(1.5),
    backgroundColor: '#a4a4a4',
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(10),
  },
});
