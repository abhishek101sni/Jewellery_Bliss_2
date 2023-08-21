import { View, Text, Linking, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
const TnC = () => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require("../../assets/background-image2.png")}>
      <View>
        <TouchableOpacity onPress={() => { Linking.openURL('https://www.demo.janusalive.com/jewellery-bliss/about-us.html') }} style={styles.logInButtonAlignment}>
          <ImageBackground source={require("../../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
            <Text style={styles.logInButtonText}>Terms and Conditions</Text>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{ position: "absolute", top: height - 62, }}>
          <Image source={require("../../assets/GOLDEN-STRIP.png")} style={{
            borderWidth: 3,
            width: 431,
          }} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default TnC;

const styles = StyleSheet.create({
  logInButtonAlignment: {
    alignItems: "center",
    marginBottom: moderateScaleVertical(10),
    marginTop: 300,
  },
  logInButtonText: {
    fontSize: textScale(23),
    color: "black",
    marginLeft: moderateScale(0),
    paddingTop: moderateScaleVertical(5),
    fontFamily: "Poppins-Medium",

  },
  ImageBackgroundStyle: {
    alignItems: "center",
    padding: moderateScale(15),
    width: moderateScale(300),
    height: moderateScaleVertical(70),
    justifyContent: 'center',
    marginTop: moderateScaleVertical(40),
    fontFamily: "Poppins-Medium"
  },
})