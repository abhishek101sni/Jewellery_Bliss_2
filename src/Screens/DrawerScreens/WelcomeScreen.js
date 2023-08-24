import React, { useContext, useEffect, useState } from 'react'
import SimpleModal from '../SimpleModal';
import MarqueeView from "react-native-marquee-view";
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity, Image, ImageBackground, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetailsActionCreator } from '../../redux/Formdetails/formDetails.action-creator';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'

const WelcomeScreen = () => {
    const [visible, setVisible] = useState(false)
    // WhatsApp
    const [isModalVisible, setisModalVisible] = useState(false)
    const [chooseData, setChooseData] = useState();

    const changeModalVisible = (bool) => {
        setisModalVisible(bool)
    }


    const setData = (data) => {
        setChooseData(data)
    }


    // WhatsApp

    const { logout, userToken, userInfo } = useContext(AuthContext);

    const { payload: user } = userInfo;
    const userDetails = useSelector((state) => state.userDetailsData);
    const dispatch = useDispatch();
    useEffect(() => {
        if (userDetails && !userDetails.brandName) {
            console.log('Welcome screen userinfo', userInfo);
            dispatch(getUserDetailsActionCreator(userInfo._id, userToken));
        }
    }, []);

    const { width } = Dimensions.get('screen');

    const entries = [
        {
            img: require('../../assets/banner.jpg'),
        },
        {
            img: require('../../assets/banner.jpg'),
        },
        {
            img: require('../../assets/banner.jpg'),
        },
        {
            img: require('../../assets/banner.jpg'),
        },
    ];
    const renderItem = ({ item, index }) => {
        return (
            <Image
                source={item.img}
                style={{
                    height: moderateScaleVertical(150),
                    width: moderateScale(280),
                    marginTop: moderateScaleVertical(30),
                    borderRadius: 20,
                    marginBottom: moderateScaleVertical(10),
                }}
            />
        );
    };

    // Products Carosuel
    const entries2 = [
        {
            img: require('../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/Handmadeandhollow/handmadeandhollow.jpg'),
            onPress: () => {
                navigation.navigate("chains");
            }
        },
        {
            img: require('../../assets/PRODUCTS/CHAINS/Categories/castingJewellery/casting.jpg'),
            onPress: () => {
                navigation.navigate("CastingJwellery");
            }
        },
        {
            img: require('../../assets/czParent.jpg'),
            onPress: () => {
                navigation.navigate("CastingCzJwellery");
            }
        },
        {
            img: require('../../assets/CZ_RING_4.jpg'),
            onPress: () => {
                navigation.navigate("PlainJwellery");
            }
        },
    ];

    // image Slider box
    const slides = [
        require('../../assets/CZ_RING_2.jpg'),
        require('../../assets/CZ_RING_2.jpg'),
        require('../../assets/CZ_RING_2.jpg'),
        require('../../assets/CZ_RING_2.jpg'),
    ]

    const renderItem2 = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={item.onPress}>
                <Image
                    source={item.img}
                    style={{
                        height: moderateScaleVertical(150),
                        width: moderateScale(280),
                        marginTop: moderateScaleVertical(30),
                        borderRadius: 20,
                        marginBottom: moderateScaleVertical(10),
                        // backgroundColor:"black"
                    }}
                />
            </TouchableOpacity>
        );
    };

    const navigation = useNavigation()

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assets/background-image2.png")}>
            <View >
                <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>
            <ScrollView>

                <View >
                    <ImageBackground style={styles.MainBackGroundImage} imageStyle={{ borderRadius: 40 }} source={require("../../assets/CompressedTexture3.jpg")} >

                        <View style={styles.GoldenBackGroundImage}>

                        </View>
                        <View style={{ marginLeft: moderateScale(30) }}>
                            <Text style={styles.WelcomeText}>Welcome,</Text>
                            <Text style={styles.UserName}>{userInfo?.name}</Text>
                            <Text style={styles.UserBrandName}>{userDetails?.brandName}</Text>
                            <View style={styles.userCountStyle}>
                                <Text style={styles.UserCount}>JB00{userInfo?.userCount}</Text>
                            </View>
                            <View style={{ marginTop: moderateScaleVertical(5) }}>
                                <Text style={styles.GoldenScreenBelowText}>Welcome to our app! We have thrilled to have you here.</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.GoldenScreenBelowText}>Enjoy Shopping! </Text>
                                    <Image source={require("../../assets/smiley-emoji.png")} style={styles.smileyEmoji} />
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.wholeAlignment}>
                    <View style={{ backgroundColor: "#F0F0F0", height: moderateScaleVertical(20), marginTop: moderateScaleVertical(10), alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { setVisible(true) }} >
                            <MarqueeView>
                                <View style={styles.MarqueeAlignment}>
                                    <Text style={{ color: "#404040" }}>
                                        Price 18K: | Fine rate: red | Gold MCX: Rs 50,000 995
                                        rate: Rs 45,000 | Fine rate: rs720000 | Gold MCX: Rs 50,000
                                    </Text>
                                </View>
                            </MarqueeView>
                        </TouchableOpacity>
                    </View>



                </View>

                <View style={styles.GoldenCategoriesButtonsAlignment}>

                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('eighteenkarat')}>
                            <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} style={styles.GoldenCategoriesButtonsStyle} imageStyle={{ borderRadius: 12 }}>
                                <Text style={styles.GoldenCategoriesButtonsText}>18KT</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('twentykarat')}>
                            <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} style={styles.GoldenCategoriesButtonsStyle} imageStyle={{ borderRadius: 12 }}>
                                <Text style={styles.GoldenCategoriesButtonsText}>20KT</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('twentytwokarat')}>
                            <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} style={styles.GoldenCategoriesButtonsStyle} imageStyle={{ borderRadius: 12 }}>
                                <Text style={styles.GoldenCategoriesButtonsText}>22KT</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    {/* <View>
                        <TouchableOpacity onPress={() => navigation.navigate('product')}>
                            <ImageBackground source={require("../../assets/texture.png")} style={styles.GoldenCategoriesButtonsStyle} imageStyle={{ borderRadius: 12 }}>
                                <Text style={styles.GoldenCategoriesButtonsText}>COINS</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View> */}

                    {/* <View>
                        <TouchableOpacity onPress={() => navigation.navigate('product')}>
                            <ImageBackground source={require("../../assets/texture.png")} style={styles.GoldenCategoriesButtonsStyle} imageStyle={{ borderRadius: 12 }}>
                                <Text style={styles.GoldenCategoriesButtonsText}>DIGITAL GOLD</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View> */}
                </View>

                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('pricelist')}>
                    <View style={styles.WastageChartButton}>
                        <Text style={styles.buttontext}>WASTAGE CHART</Text>
                    </View>
                </TouchableOpacity>


                {/* <SliderBox
                    images={slides}
                    dotColor="#eec06b"
                    inactiveDotColor="black"
                    circleLoop
                    paginationBoxVerticalPadding={20}
                    dotStyle={{
                        width: moderateScale(7),
                        // height: moderateScaleVertical(7),
                        borderRadius: 20,
                        marginHorizontal: moderateScale(-3),
                        padding: 0,
                        // margintTop: moderateScaleVertical(400)
                    }}
                    ImageComponentStyle={{ borderRadius: 30, width: '90%', marginTop: 15 }}
                /> */}

                {/* // Parallax */}

                <Carousel
                    data={entries2}
                    renderItem={renderItem2}
                    sliderWidth={width}
                    itemWidth={300}
                    loop
                    firstItem={1}
                />

                {/* Banner */}
                <Carousel
                    data={entries}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={300}
                    loop
                    firstItem={1}
                />


                {/* <View style={styles.line}></View> */}


                <View style={styles.logosAlignment}>
                    <Image source={require("../../assets/1.png")} style={styles.imgsize1} />
                    <Image source={require("../../assets/2.png")} style={styles.imgsize2} />
                    <Image source={require("../../assets/3.png")} style={styles.imgsize3} />
                    <Image source={require("../../assets/4.png")} style={styles.imgsize4} />
                    <Image source={require("../../assets/5.png")} style={styles.imgsize5} />
                    <Image source={require("../../assets/6.png")} style={styles.imgsize6} />
                </View>



            </ScrollView>

            {/* Whatsapp */}
            <View View style={{ bottom: moderateScaleVertical(-95), position: "absolute", right: moderateScale(5) }}>
                <TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment} >
                    <View style={styles.icontextAlignment}>
                        <Image source={require("../../assets/whatsapp-white.png")} style={styles.whatsappIcon} />
                        <Text style={styles.helpText}>Help</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isModalVisible}
                    nRequestClose={() => changeModalVisible(false)}
                >
                    <SimpleModal changeModalVisible={changeModalVisible}
                        setData={setData}
                    />
                </Modal>
            </View>
            {/* Whatsapp */}

            {/* <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} imageStyle={{}} style={{backgroundColor: "pink", height: moderateScaleVertical(60), width: "100%", alignSelf: "center", marginTop:0, }}>
                    <View style={{ marginTop: moderateScaleVertical(15), flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Drawer") }}>
                            <Image source={require("../../assets/home.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate("cart") }}>
                            <Image source={require("../../assets/cart.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground> */}

        </ImageBackground>
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    goldenStrip: {
        width: "100%",
        // marginBottom:10,
        height: 3,
    },
    MainBackGroundImage: {
        marginTop: moderateScaleVertical(10),
        width: moderateScale(355),
        height: moderateScaleVertical(170),
        alignSelf: "center",
        // flex:1,
    },
    GoldenBackGroundImage: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: moderateScale(-70),
        marginTop: moderateScaleVertical(10),
        fontSize: textScale(20)
    },
    WelcomeText: {
        color: "black",
        fontSize: textScale(20),
        fontWeight: "400",
        marginLeft: moderateScale(0),
        fontFamily: "HurmeGeometricSans1"
    },
    UserName: {
        color: "black",
        fontSize: textScale(23),
        fontWeight: "700",
        fontFamily: "HurmeGeometricSans1Bold"
    },
    UserBrandName: {
        color: "black",
        fontSize: textScale(14),
        fontWeight: "500",
        fontFamily: "HurmeGeometricSans1"
    },
    UserCount: {
        color: "black",
        fontSize: textScale(12),
        fontWeight: "500",
        marginLeft: moderateScale(2),
    },
    userCountStyle: {
        // backgroundColor: "black",
        // borderRadius: 9,
        // borderWidth: moderateScale(0.5),
        // width: moderateScale(80),
        // height: moderateScaleVertical(20),
        marginLeft: moderateScale(-2),
        // opacity: 0.1x`
        marginTop: moderateScaleVertical(5)
    },

    NotificationBell: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
    },
    GoldenScreenBelowText: {
        color: "black",
        fontSize: textScale(10),
        fontWeight: "600",
        fontFamily: "HurmeGeometricSans1"
    },
    smileyEmoji: {
        width: moderateScale(14),
        height: moderateScaleVertical(14),
    },
    MarqueeAlignment: {
        // marginTop: moderateScaleVertical(10),
        // color: "#fff"
    },
    GoldenCategoriesButtonsAlignment: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        paddingHorizontal: moderateScale(0),
        marginTop: moderateScaleVertical(10)
    },
    GoldenCategoriesButtonsStyle: {
        alignItems: "center",
        borderRadius: 23,
        justifyContent: "center",
        width: moderateScale(60),
        height: moderateScaleVertical(60),
        marginTop: moderateScaleVertical(10),
        alignSelf: 'center',
        // elevation:120,
    },
    GoldenCategoriesButtonsText: {
        fontSize: textScale(12),
        color: "black",
        fontWeight: "500",
        textAlign: "center"
    },
    WastageChartButton: {
        marginTop: moderateScaleVertical(20),
        backgroundColor: "black",
        padding: moderateScale(15),
        alignItems: "center",
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        width: moderateScale(160),
        justifyContent: "center",
        height: 50,
        alignSelf: 'center'
    },
    buttontext: {
        fontSize: textScale(14),
        color: "#eec06b",
        fontWeight: "bold",
        // fontWeight: 500,
    },
    line: {
        width: moderateScale("80%"),
        height: moderateScaleVertical(2),
        backgroundColor: "black",
        marginTop: moderateScaleVertical(10),
        marginBottom: 20,
        alignSelf: 'center'
    },
    logosAlignment: {
        marginTop: moderateScaleVertical(20),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginHorizontal: moderateScale(10),
        marginVertical: moderateScaleVertical(-5),
        marginBottom: moderateScaleVertical(50),
    },
    // logosAlignment2: {
    //     marginTop: moderateScaleVertical(25),
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "space-around",
    //     marginHorizontal: moderateScale(140),

    // },
    imgsize1: {
        width: moderateScale(52),
        height: moderateScaleVertical(32),
    },
    imgsize2: {
        width: moderateScale(52),
        height: moderateScaleVertical(32),
    },
    imgsize3: {
        width: moderateScale(69),
        height: moderateScaleVertical(35),
    },
    imgsize4: {
        width: moderateScale(64),
        height: moderateScaleVertical(28),
    },
    imgsize5: {
        width: moderateScale(50),
        height: moderateScaleVertical(35),
        // marginBottom: moderateScaleVertical(40)
    },
    imgsize6: {
        width: moderateScale(50),
        height: moderateScaleVertical(30),
        // marginBottom: moderateScaleVertical(40)
    },

    // Whatsapp style

    HelpButtonAlignment: {
        justifyContent: "center",
        backgroundColor: "#25D366",
        width: moderateScale(110),
        height: moderateScaleVertical(45),
        borderRadius: 40,
        marginBottom: moderateScaleVertical(100)
        // position: "fixed",
    },
    icontextAlignment: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: moderateScale(-30),
        marginHorizontal: moderateScale(25),
    },
    whatsappIcon: {
        width: moderateScale(20),
        height: moderateScaleVertical(20),
        // position:"fixed",
    },
    helpText: {
        color: 'white',
        fontSize: textScale(13),
        fontWeight: "bold",
    },

    // bottomSheet

    wholeAlignment: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
    buttonStyleText: {
        color: "white",
        alignSelf: "center",
        fontSize: textScale(30)
    },
    buttonStyle: {
        backgroundColor: "black",
        width: 120,
        height: 120,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 50,
        borderRadius: 40
    },
    Modalalignment: {
        width: "100%",
        marginLeft: 0,
        marginBottom: 0
    },
    modalaView: {
        position: "absolute",
        bottom: 0,
        height: 200,
        backgroundColor: "#fff",
        width: "100%",
        right: 0,
        left: 0
    }
});


// activeOpacity={0.5}