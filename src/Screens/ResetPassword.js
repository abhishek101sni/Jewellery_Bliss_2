import { View, ScrollView, TextInput, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const ResetPassword = () => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../assets/logo.png")} style={{ width: moderateScale(300), height: moderateScaleVertical(300) }} />
                    </View>
                    <View style={{ marginTop: moderateScaleVertical(40), alignItems: "center" }}>
                        <Text style={{ fontSize: textScale(23), marginBottom: moderateScaleVertical(15), color: "#bc9954" }}>Reset Password?</Text>
                        <Text style={{ fontSize: textScale(15), fontFamily: "HurmeGeometricSans1", color: "#a4a4a4" }}>Enter your new Password</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TextInput
                            style={{ textAlign: "left", borderColor: "black", borderWidth: 2, width: moderateScale(370), borderRadius: 20, marginTop: moderateScaleVertical(30), alignItems: "center" }}
                            autoCorrect={false}
                            placeholder="New Password"
                            placeholderTextColor="#C7C7CD"
                        />
                        <TextInput
                            style={{ textAlign: "left", borderColor: "black", borderWidth: 2, width: moderateScale(370), borderRadius: 20, marginTop: moderateScaleVertical(30), alignItems: "center" }}

                            autoCorrect={false}
                            placeholder="Confirm Reset Password"
                            placeholderTextColor="#C7C7CD"
                        />

                        <TouchableOpacity>
                            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{ borderRadius: 20 }} style={{ width: moderateScale(370), height: moderateScaleVertical(55), borderRadius: 20, marginTop: 20 }}>
                                <Text style={{ textAlign: "center", justifyContent: "center", fontSize: textScale(20), marginTop: moderateScaleVertical(10), color: "black" }}>Reset Password</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    AboutUsContentAlignment2: {
        justifyContent: "flex-start",
        marginBottom: moderateScaleVertical(17),
        alignSelf: "center"
    },
    AboutUsContent: {
        marginTop: moderateScaleVertical(15),
        alignSelf: "center",
        color: "#181818",
        // fontFamily: "Poppins-Medium",
        marginHorizontal: moderateScaleVertical(15),
        fontSize: 30,
        textAlign: "justify"
    },
})