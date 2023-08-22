import { View, Text, Linking, ImageBackground, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 1 }} source={require("../../assets/background-image2.png")}>
        <View style={{}}>
          <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
        </View>
        <View>
          <TouchableOpacity onPress={() => { Linking.openURL('https://www.demo.janusalive.com/jewellery-bliss/about-us.html') }} style={styles.logInButtonAlignment}>
            <ImageBackground source={require("../../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
              <Text style={styles.logInButtonText}>PRIVACY POLICY</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: moderateScaleVertical(400) }}>
          <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStripBottom} />
        </View>
      </ImageBackground>

    </SafeAreaView>
  )
}

export default PrivacyPolicy;

const styles = StyleSheet.create({
  goldenStrip: {
    width: "100%",
    height: 3,
  },
  goldenStripBottom: {
    width: "100%",
    height: 3,
  },
  logInButtonAlignment: {
    alignItems: "center",
    fontFamily: "Poppins-Medium",
    marginBottom: moderateScaleVertical(10),
    marginTop: 300,
  },
  logInButtonText: {
    fontSize: textScale(23),
    color: "black",
    marginLeft: moderateScale(0),
    borderRadius: 40,
    paddingTop: moderateScaleVertical(5),
    fontFamily: "Poppins-Medium"

  },
  ImageBackgroundStyle: {
    alignItems: "center",
    padding: moderateScale(15),
    width: moderateScale(240),
    height: moderateScaleVertical(70),
    justifyContent: 'center',
    marginTop: moderateScaleVertical(40),
    fontFamily: "Poppins-Medium"
  },
})