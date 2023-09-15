import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import { moderateScale, moderateScaleVertical, height, textScale } from '../utils/responsive'

const AppointmentThankyou = ({ navigation }) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
      <ScrollView>
        <View style={styles.alignment}>
          {/* <Image source={require("../assets/green-tick.gif")} style={styles.imageSize} /> */}
          <View style={styles.colomnAlignment}>
            <Text style={styles.ThankyouText}>Thank You!</Text>
            {/* <Text style={styles.OrderConfirmendText}>Your order is confirmed</Text> */}
            <Text style={styles.OrderConfirmendText}>Appointment Booked</Text>

           
            <TouchableOpacity style={styles.logInButtonAlignment} onPress={() => navigation.navigate('Drawer')}>
              <ImageBackground source={require("../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                <Text style={styles.logInButtonText}>DONE</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default AppointmentThankyou;

const styles = StyleSheet.create({
  alignment: {
    marginTop: moderateScaleVertical(100),
    flexDirection: "colomn"
  },
  disclaimer: {
    alignSelf: "center",
    width: moderateScale(360),
    height: moderateScaleVertical(235),
    alignSelf: "center",
    marginTop: moderateScaleVertical(10),
    borderRadius: 15,

  },
  disclaimerText: {
    color: "black",
    fontSize: textScale(18),
    marginLeft: moderateScale(-2),
    fontSize: textScale(13),
    fontSize: textScale(14),
    color: "black",
    fontFamily: "HurmeGeometricSans1SemiBold"
  },
  disclaimerTextValue: {
    color: "black",
    fontSize: textScale(18),
    marginLeft: moderateScale(-2),
    fontSize: textScale(13),
    color: "black",
    fontFamily: "HurmeGeometricSans1"
  },
  imageSize: {
    height: moderateScaleVertical(150),
    width: moderateScale(150),
    alignSelf: "center",
    marginTop: moderateScaleVertical(100),
  },
  colomnAlignment: {
    alignItems: "center"
  },
  ThankyouText: {
    marginTop: moderateScaleVertical(0),
    fontSize: textScale(30),
    // fontWeight: "400",
    fontFamily: "HurmeGeometricSans1SemiBold",
    color: "black",
  },
  OrderConfirmendText: {
    marginTop: moderateScaleVertical(5),
    marginBottom: moderateScaleVertical(10),
    fontSize: textScale(20),
    color: "#353839",
    fontFamily: "HurmeGeometricSans1",
    textAlign: "center",
    // textAlign: "justify",
    // width: "60%",
    alignSelf: "center",
  },
  logInButtonAlignment: {
    alignItems: "center",
    // fontFamily: "Poppins-Medium",
    marginBottom: moderateScaleVertical(10),
    marginTop:moderateScaleVertical(400)
  },
  ImageBackgroundStyle: {
    alignItems: "center",
    padding: moderateScale(7),
    width: moderateScale(130),
    height: moderateScaleVertical(50),
    justifyContent: 'center',
    marginTop: moderateScaleVertical(20),
    fontFamily: "Poppins-Medium"
  },
  logInButtonText: {
    fontSize: textScale(15),
    color: "black",
    marginLeft: moderateScale(0),
    borderRadius: 40,
    paddingTop: moderateScaleVertical(1),
    // fontFamily: "Poppins-Medium"
  },
})