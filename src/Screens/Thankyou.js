import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import { moderateScale, moderateScaleVertical, height, textScale } from '../utils/responsive'

const Thankyou = ({ navigation }) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
      <ScrollView>
        <View style={styles.alignment}>
          {/* <Image source={require("../assets/green-tick.gif")} style={styles.imageSize} /> */}
          <View style={styles.colomnAlignment}>
            <Text style={styles.ThankyouText}>Thank You!</Text>
            {/* <Text style={styles.OrderConfirmendText}>Your order is confirmed</Text> */}
            <Text style={styles.OrderConfirmendText}>To initiate the order processing, a payment of 15% on the bank details mentioned below.</Text>

            <ImageBackground style={styles.disclaimer} imageStyle={{ borderRadius: 20 }} source={require("../assets/CompressedTexture3.jpg")} >
              <View style={{ marginTop: moderateScaleVertical(5), marginLeft: moderateScale(20) }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontSize: textScale(17), color: "black", fontFamily: "HurmeGeometricSans1SemiBold" }}>Bank Details</Text>
                  {/* <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>To initiate the order processing, a payment of 15% on the bank details mentioned below</Text> */}
                </View>
                <View style={{ flexDirection: "row", marginTop: moderateScaleVertical(3) }}>
                  <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>Bank Name</Text>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>A/C No.</Text>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>IFSC Code</Text>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>A/c holder name</Text>
                  </View>
                  <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                  </View>
                  <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>ICICI</Text>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>629205034031</Text>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>ICIC0006292</Text>
                    <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>Adinath Chain and Jewellers{'\n'}E-Comm LLP</Text>
                  </View>
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: "row", marginTop: moderateScaleVertical(5), marginBottom: moderateScaleVertical(10) }}>
                  <View></View>
                  <Text style={styles.disclaimerText}>Disclaimer : </Text>
                  <Text style={styles.disclaimerTextValue}>Order will Varied order processing due to{'\n'}product availability, customization, and {'\n'}volume ; thank you for your patience.</Text>
                </View>
              </View>
            </ImageBackground>

            <View>
              <Text style={{ fontSize: textScale(30), color: "black", alignSelf: "center", fontFamily: "HurmeGeometricSans1Bold", marginTop: moderateScaleVertical(10), marginBottom: moderateScaleVertical(10) }}>OR</Text>
            </View>

            <View>
              <Image style={{ alignSelf: "center", width: moderateScale(390), height: moderateScaleVertical(275), marginBottom: moderateScaleVertical(0) }} source={require("../assets/QRcode.jpeg")} />
            </View>

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

export default Thankyou;

const styles = StyleSheet.create({
  alignment: {
    marginTop: moderateScaleVertical(30),
    flexDirection: "colomn"
  },
  disclaimer: {
    alignSelf: "center",
    width: moderateScale(390),
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