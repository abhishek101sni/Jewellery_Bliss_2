import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

import Carousel, { Pagination } from "react-native-snap-carousel"
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const data = [
    {
        id: 1,
        name1: "BTB E- Commerce Store",
        name2: "Buy Attractive jewellery for Store",
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

        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={{ flex: 1 }}>

                <View style={{ flex: 0.3, alignItems: "center", padding: 30, justifyContent: "center", }}>
                    <Image source={require("../assets/logo.png")} style={{ height: moderateScaleVertical(250), width: moderateScale(250), alignSelf: 'center' }} />
                </View>

                <View style={{ flex: 1}}>
                    <View style={{alignItems:"center" , flex:0.9}}>
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
                                width: 10,
                                height: 10,
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

                <View style={{ flex: 0.5}}>

                    <TouchableOpacity onPress={() => { navigation.navigate('loginsignup') }} style={{ alignItems: "center" }}>
                        <ImageBackground source={require("../assets/texture.png")} style={styles.GetStartedButton} imageStyle={{ borderRadius: 80 }}>
                            <Text style={styles.signuptext2}>Get Started</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={{ position: "absolute", top: height - 7, }}>
                    <Image source={require("../assets/GOLDEN-STRIP.png")} style={{
                        borderWidth: 3,
                        width: 431,
                        // borderColor: 'gold',
                        // marginBottom:200
                    }} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    SnapCarousel: {
        padding: moderateScale(20),
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
        justifyContent: "cnter"

    },
    SnapCarouselText1: {
        marginVertical: moderateScaleVertical(10),
        fontSize: textScale(20),
        fontWeight: "400",
        color: "#eec06b",
        fontFamily: "Poppins-Medium"
    },
    SnapCarouselText2: {
        marginVertical: moderateScaleVertical(10),
        fontSize: textScale(20),
        fontWeight: "600",
        fontSize: textScale(14),
        color: "black"
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
        fontSize: textScale(23),
        color: "black",
        marginLeft: moderateScale(0),
        borderRadius: 40,
        fontFamily: "Poppins-Medium",
    },
    goldenStripAlignment: {
        flex: 0.001,
        justifyContent: "flex-end"
    }
})











