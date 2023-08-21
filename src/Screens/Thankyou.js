import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import { moderateScale, moderateScaleVertical, height, textScale } from '../utils/responsive'

const Thankyou = ({ navigation }) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
      <View style={styles.alignment}>
        <Image source={require("../assets/green-tick.gif")} style={styles.imageSize} />
        <View style={styles.colomnAlignment}>
          <Text style={styles.ThankyouText}>Thank You!</Text>
          <Text style={styles.OrderConfirmendText}>Your order is confirmed</Text>

          <TouchableOpacity style={styles.logInButtonAlignment} onPress={() => navigation.navigate('Drawer')}>
            <ImageBackground source={require("../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
              <Text style={styles.logInButtonText}>DONE</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{}} style={{ height: moderateScaleVertical(60), width: "100%", alignSelf: "center", marginTop: 170, }}>
                        <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => { navigation.navigate("Drawer") }}>
                                <Image source={require("../assets/home.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { navigation.navigate("cart") }}>
                                <Image source={require("../assets/cart.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
    </ImageBackground>
  )
}

export default Thankyou;

const styles = StyleSheet.create({
  alignment: {
    marginTop: moderateScaleVertical(120),
    flexDirection: "colomn"
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
    marginTop: moderateScaleVertical(40),
    fontSize: textScale(25),
    fontWeight: "400",
  },
  OrderConfirmendText: {
    marginTop: moderateScaleVertical(5),
    fontSize: textScale(25),
    fontWeight: "700",
    color: "#353839"
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
    marginTop: moderateScaleVertical(40),
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