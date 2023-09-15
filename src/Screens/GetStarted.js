import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, ScrollView ,SafeAreaView } from 'react-native'
import React, { useState, useRef } from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

import Carousel, { Pagination } from "react-native-snap-carousel"
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const data = [
    {
        id: 1,
        name1: "BTB E- Commerce Store",
        name2: "Buy Attractive jewellery for store",
        img: require("../assets/banner-2.png"),
    },

    {
        id: 2,
        name1: "BTB E- Commerce Store",
        name2: "Buy Attractive jewellery for Store",
        img: require("../assets/banner-2.png"),
    },
    {
        id: 3,
        name1: "BTB E- Commerce Store",
        name2: "Buy Attractive jewellery for Store",
        img: require("../assets/banner-2.png"),
    },
]

const SnapCarousel = ({ item }) => {


    return (
        <View style={styles.SnapCarousel}>
            <Image source={item.img} style={styles.SnapCarouselImages} />
            <Text style={styles.SnapCarouselText1}>{item.name1}</Text>
            <Text style={styles.SnapCarouselText2}>{item.name2}</Text>
        </View>
    )
}

const GetStarted = ({ navigation }) => {

    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null)

    return (


        <SafeAreaView style={{flex:1}}>
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={{ flex: 1 }}>

                <View style={{ flex: 0.3, alignItems: "center", padding: 30, justifyContent: "center", }}>
                    <Image source={require("../assets/logo.png")} style={{ height: moderateScaleVertical(250), width: moderateScale(250), alignSelf: 'center' }} />
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ alignItems: "center", flex: 1 }}>
                        <Carousel
                            ref={isCarousel}
                            data={data}
                            renderItem={SnapCarousel}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            onSnapToItem={index => setIndex(index)}

                        />
                        <Pagination
                            dotsLength={data.length}
                            activeDotIndex={index}
                            carouselRef={isCarousel}
                            dotStyle={{
                                width: moderateScale(9),
                                height: moderateScaleVertical(9),
                                borderRadius: 10,
                                marginHorizontal: 0,
                                backgroundColor: "#eec06b",
                            }}
                            inactiveDotStyle={{
                                backgroundColor: "black"
                            }}
                            containerStyle={{ paddingVertical: 10 }}
                        />
                    </View>
                </View>

                <View style={{ flex: 0.5 }}>

                    <TouchableOpacity onPress={() => { navigation.navigate('loginsignup') }} style={{ alignItems: "center" }}>
                        <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.GetStartedButton} imageStyle={{ borderRadius: 80 }}>
                            <Text style={styles.signuptext2}>Get Started</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View >
                    <Image source={require("../assets/GOLDEN-STRIP.png")} style={{
                        width: "100%",
                        height: 6,
                    }} />
                </View>
            </View>
        </ImageBackground>
         </SafeAreaView>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    SnapCarousel: {
        // padding: moderateScale(20),
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center"
    },
    SnapCarouselImages: {
        width: moderateScale(300),
        height: moderateScaleVertical(200),
        borderRadius: 20,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"

    },
    SnapCarouselText1: {
        marginTop: moderateScaleVertical(70),
        marginVertical: moderateScaleVertical(10),
        fontSize: textScale(18),
        color: "#eec06b",
        fontFamily: "HurmeGeometricSans1SemiBold"
    },
    SnapCarouselText2: {
        marginVertical: moderateScaleVertical(10),
        fontSize: textScale(16),
        // fontSize: textScale(18),
        color: "black",
        fontFamily: "HurmeGeometricSans1"
    },
    GetStartedButton: {
        alignItems: "center",
        padding: moderateScale(11),
        width: moderateScale(200),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        marginTop: moderateScaleVertical(40),
        marginBottom: moderateScaleVertical(20)
    },

    signuptext2: {
        fontSize: textScale(20),
        color: "black",
        // marginLeft: moderateScale(0),
        // borderRadius: 40,
        fontFamily: "HurmeGeometricSans1",
    },
    goldenStripAlignment: {
        flex: 0.001,
        justifyContent: "flex-end"
    }
})











