import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const CustomTabNavigator = ({ navigation }) => {
    return (
        <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{}} style={{ position: "absolute", backgroundColor: "pink", height: moderateScaleVertical(60), width: "100%", alignSelf: "center", marginTop: 0, }}>
            <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity onPress={() => { navigation.navigate("Drawer") }}>
                    <Image source={require("../assets/home.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => { navigation.navigate("scrn2") }}>
                    <Image source={require("../assets/cart-filled.png")} style={{ width: 40, height: 40 }} />
                </TouchableOpacity> */}

                <TouchableOpacity onPress={() => { navigation.navigate("cart") }}>
                    <Image source={require("../assets/cart.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default CustomTabNavigator;