import React, { useState, useRef } from "react";
import { ScrollView, StyleSheet, Text, View, Modal, TouchableOpacity, ImageBackground, Image, Dimensions } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/action";
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import SimpleModal from "./SimpleModal";
import Carousel, { Pagination } from 'react-native-snap-carousel';

const CONTENT = [
    {
        title: 'Product Specification',
        title2: <Image source={require("../assets/drop-down.png")} style={{ width: moderateScale(15), height: moderateScaleVertical(15) }} />,
    },
];

const SELECTORS = [
    // { title: 'T&C', value: 0 },
    // { title: 'Privacy Policy', value: 1 },
    // { title: 'Return Policy', value: 2 },
    // { title: 'Reset all' },
];

const SingleProduct = ({ navigation }) => {

    const isCarousel = useRef(null);
    const { width } = Dimensions.get('screen');
    const [page, setPage] = useState(0);

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


    const dispatch = useDispatch();
    const { activeItem } = useSelector((state) => state.reducer);

    const handlePress = (activeItem) => {
        dispatch(addToCart(activeItem));
        navigation.navigate('cart');
    };
    console.log("active", activeItem)


    // Accordian
    const [activeSections, setActiveSections] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [multipleSelect, setMultipleSelect] = useState(false);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const setSections = (sections) => {
        setActiveSections(
            sections.includes(undefined) ? [] : sections
        );
    };

    const renderHeader = (section, _, isActive) => {
        return (
            <View style={styles.ProductSpecifictionBar}>
                <Text style={styles.headerText}>Product Specification</Text>
                <Image source={require("../assets/drop-down.png")} style={styles.dropDownIcon} />
            </View>
        );
    };

    const renderContent = (section, _, isActive) => {
        return (
            <View style={[styles.content, isActive ? styles.active : styles.inactive]}>
                <View style={{ marginVertical: moderateScaleVertical(-4), marginBottom: moderateScaleVertical(50) }}>
                    <Text style={{ fontSize: 15, color: "#757575", marginVertical: moderateScaleVertical(3), }}>Gross Weight</Text>
                    <Text style={{ fontSize: 15, color: "#757575", marginVertical: moderateScaleVertical(3), }}>Net Weight</Text>
                    <Text style={{ fontSize: 15, color: "#757575", marginVertical: moderateScaleVertical(3), }}>Tunch</Text>
                    <Text style={{ fontSize: 15, color: "#757575", marginVertical: moderateScaleVertical(3), }}>Was5ge</Text>
                    <Text style={{ fontSize: 15, color: "#757575", marginVertical: moderateScaleVertical(3), }}>Fine Weight</Text>
                </View>
                <View style={{ marginVertical: moderateScaleVertical(-4) }}>
                    <Text style={{ fontSize: 15, color: "black", marginVertical: moderateScaleVertical(3), }}>20.0 gm</Text>
                    <Text style={{ fontSize: 15, color: "black", marginVertical: moderateScaleVertical(3), }}>2.0 gm</Text>
                    <Text style={{ fontSize: 15, color: "black", marginVertical: moderateScaleVertical(3), }}>23.0 gm</Text>
                    <Text style={{ fontSize: 15, color: "black", marginVertical: moderateScaleVertical(3), }}>90.0 gm</Text>
                    <Text style={{ fontSize: 15, color: "black", marginVertical: moderateScaleVertical(3), }}>12.0 gm</Text>
                </View>
            </View>
        );
    };


    const renderItem = ({ item, index }) => {
        return (
            <Image
                source={{ uri: item }}
                style={{
                    height: moderateScaleVertical(350),
                    width: moderateScale(290),
                    marginTop: moderateScaleVertical(30),
                    borderRadius: 20,
                    marginBottom: moderateScaleVertical(10),
                    borderWidth: 0.5,
                    borderColor: "#eec06b",
                    // backgroundColor:"pink"
                }}
            />
        );
    };



    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={{}}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>
            <ScrollView>

                <Carousel
                    ref={isCarousel}
                    onSnapToItem={page => setPage(page)}
                    data={activeItem.images}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={300}
                    loop
                    firstItem={1}
                />
                <Pagination
                    activeDotIndex={page}
                    carouselRef={isCarousel}
                    tappableDots={true}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    dotsLength={activeItem.images.length}
                    dotStyle={{
                        width: moderateScale(9),
                        height: moderateScaleVertical(9),
                        borderRadius: 9,
                        backgroundColor: '#eec06b',
                        marginVertical: moderateScaleVertical(-4),
                    }}
                    inactiveDotStyle={{
                        backgroundColor: 'black',
                    }}
                />

                <View >
                    <ImageBackground style={styles.MainBackGroundImage} imageStyle={{ borderRadius: 20 }} source={require("../assets/texture.png")} >
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row", marginTop: moderateScaleVertical(3), marginLeft: moderateScale(20) }}>
                                <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
                                    <Text style={{ fontSize: textScale(18), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>Name</Text>
                                    <Text style={{ fontSize: textScale(18), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>Purity</Text>
                                    <Text style={{ fontSize: textScale(18), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>Weight</Text>
                                </View>
                                <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
                                    <Text style={{ fontSize: textScale(18), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                                    <Text style={{ fontSize: textScale(18), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                                    <Text style={{ fontSize: textScale(18), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                                </View>
                                <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
                                    <Text style={{ fontSize: textScale(18), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>{activeItem.name}</Text>
                                    <Text style={{ fontSize: textScale(18), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>{activeItem?.purity} KT</Text>
                                    <Text style={{ fontSize: textScale(18), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>{activeItem.weight} g</Text>
                                </View>
                            </View>
                        </View>

                    </ImageBackground>

                </View>


                <View>
                    <TouchableOpacity onPress={() => handlePress(activeItem)} style={styles.AddToCartButtonAlignment}>
                        <ImageBackground source={require("../assets/texture.png")} style={styles.AddToCartImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                            <Text style={styles.AddToCartButtonText}>ADD TO CART</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>


                <View style={styles.ProductLogoBackground}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={styles.ProductCodeAlignment}>
                            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                                <Text style={styles.ProductCodeTextStyle}>Product Code : </Text>
                                <Text style={styles.ProductCodeTextStyleCode}>{activeItem._id}</Text>
                            </View>
                        </View>
                        <View style={styles.ProductPageLogoAlignment}>
                            <View style={{ alignItems: "center" }}>
                                <Image source={require("../assets/certifiedJwellery.png")} style={styles.ProductPageLogoSize} />
                                <Text style={{ color: "black", fontSize: textScale(10) }}>Certified Jewellery</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Image source={require("../assets/returnPolicy.png")} style={styles.ProductPageLogoSize} />
                                <Text style={{ color: "black", fontSize: textScale(10) }}>Return Policy</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Image source={require("../assets/insuredShipping.png")} style={styles.ProductPageLogoSize} />
                                <Text style={{ color: "black", fontSize: textScale(10) }}>Insured Shipping</Text>
                            </View>

                        </View>
                    </View>
                </View>


                <View style={{ marginTop: moderateScaleVertical(10) }}>
                    <View style={{ borderBottomWidth: 1.5, borderBottomColor: "black", alignSelf: "center", width: moderateScale(260) }}>
                        <Text style={{ color: "black", alignSelf: "center", padding: 5, fontSize: textScale(18), fontWeight: "600" }}>Product Specification</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: "#fff", width: "100%", height: moderateScale(150), marginBottom: moderateScaleVertical(52) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: 0 }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }}>Gross Weight</Text>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }}>Net Weight</Text>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }}>Tunch</Text>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }}>Wastage</Text>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }}>Fine Weight</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }} >20.0 g</Text>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }}>2.0 g</Text>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }}>23.0 </Text>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }}>90.0 g</Text>
                            <Text style={{ fontSize: textScale(14), color: "black", marginVertical: moderateScaleVertical(3), }}>12.0 g</Text>
                        </View>
                    </View>
                </View>
                {/* </View> */}
            </ScrollView>

            {/* Whatsapp */}

            <View style={{ bottom: -40, position: "absolute", right: 7 }}>
                <TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment} >
                    <View style={styles.icontextAlignment}>
                        <Image source={require("../assets/whatsapp-white.png")} style={styles.whatsappIcon} />
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
            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{}} style={{ backgroundColor: "pink", height: moderateScaleVertical(60), width: "100%", alignSelf: "center", marginTop: 0, }}>
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
        </ImageBackground>
    )
}

export default SingleProduct;

const styles = StyleSheet.create({
    goldenStrip: {
        width: "100%",
        height: 3,
    },
    singleProductImageAlignmnet: {
        alignItems: "center",
        marginTop: moderateScaleVertical(5),
        marginBottom: moderateScaleVertical(20),
        height: moderateScaleVertical(325),
        width: moderateScale(354),
    },
    singleProductImageStyle: {
        height: moderateScaleVertical(320),
        width: moderateScale(352),
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: moderateScaleVertical(3),
        marginTop: moderateScaleVertical(2.5)
    },
    MainBackGroundImage1: {
        marginTop: moderateScaleVertical(15),
        width: moderateScale(358),
        height: moderateScaleVertical(325),
        alignSelf: "center"
    },
    ProductLogoBackground: {
        backgroundColor: 'white',
        marginTop: moderateScaleVertical(40),
        width: "100%",
        height: moderateScaleVertical(110),
        alignSelf: "center",
    },
    ProductCodeAlignment: {
        marginTop: moderateScaleVertical(10),
        marginLeft: moderateScale(20)
    },
    ProductCodeTextStyle: {

        color: "#757575",
        fontSize: textScale(12),
    },
    ProductCodeTextStyleCode: {
        color: "black",
        fontSize: textScale(12),
    },

    MainBackGroundImage: {
        marginTop: moderateScaleVertical(15),
        width: moderateScale(350),
        height: moderateScaleVertical(120),
        alignSelf: "center"
    },
    ProductNamesStyle: {
        color: 'black',
        fontSize: textScale(17),
        marginTop: moderateScaleVertical(10),
        textAlign: "center",
        alignSelf: "center",
        fontFamily: "HurmeGeometricSans1SemiBold"
    },
    ProductNamesValueStyle: {
        color: 'black',
        textAlign: "center",
        fontSize: textScale(15),
        marginTop: moderateScaleVertical(10),
        textAlign: "left",
        fontFamily: "HurmeGeometricSans1SemiBold",
        paddingTop: 3
    },
    line: {
        width: "100%",
        height: moderateScaleVertical(1),
        backgroundColor: "black",
        alignSelf: 'center',
        // marginTop: moderateScaleVertical(60),
        // marginBottom: moderateScaleVertical(60),
    },
    ProductWeightStyle: {
        color: 'black',
        // fontWeight: "500",
        textAlign: "center",
        fontSize: textScale(17),
        paddingTop: moderateScaleVertical(15),
    },
    ProductPageLogoAlignment: {
        marginTop: moderateScaleVertical(20),
        flexDirection: "row",
        // marginHorizontal:20,
        paddingHorizontal: 20,
        justifyContent: "space-around",
        marginHorizontal: moderateScale(10),
    },
    ProductPageLogoSize: {
        height: moderateScaleVertical(35),
        width: moderateScale(35),
    },
    AddToCartButtonAlignment: {
        marginTop: moderateScaleVertical(20),
        alignItems: "center",
        fontFamily: "Poppins-Medium",
        marginBottom: moderateScaleVertical(-20),
    },
    AddToCartImageBackgroundStyle: {
        alignItems: "center",
        padding: moderateScale(9),
        width: moderateScale(200),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        marginTop: moderateScaleVertical(20),
        fontFamily: "Poppins-Medium"
    },
    AddToCartButtonText: {
        fontSize: textScale(17),
        fontWeight: "500",
        color: "black",
        marginLeft: moderateScale(0),
        borderRadius: 40,
        paddingTop: moderateScaleVertical(0),
        // fontFamily: "Poppins-Medium"
    },

    loginbutton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: moderateScaleVertical(100),
        borderRadius: 80,
        width: moderateScale(190),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        alignSelf: "center"
    },
    logintext: {
        fontSize: textScale(15),
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
    },


    View1: {
        height: moderateScaleVertical(300),
        // width: 200,
        marginTop: moderateScaleVertical(30),
        // justifyContent: 'center',
        // padding:0,
    },

    View22: {
        marginBottom: moderateScaleVertical(20),
    },
    alignmentMento: {
        alignSelf: "center",
        backgroundColor: '#eec06b',
        width: moderateScale(340),
        height: moderateScaleVertical(150),
        marginTop: moderateScaleVertical(-20),
        marginBottom: moderateScaleVertical(20),
        borderRadius: 10,
        justifyContent: "center"
    },


    View3: {
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: textScale(17),
        paddingBottom: moderateScaleVertical(20),
        marginTop: moderateScaleVertical(20)
    },

    View33: {

    },
    View4: {
        color: 'black',
        // backgroundColor: 'black',
        padding: 1,
        fontWeight: "bold",
    },
    View5: {
        marginTop: moderateScaleVertical(20),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        padding: 20,
        marginRight: moderateScale(20),
        marginLeft: moderateScale(20),
        borderRadius: 10,
    },
    View6: {
        color: 'black'
    },
    View60: {
        color: "#eec06b"
    },
    View7: {
        borderTopWidth: 1,
        borderTopColor: '#808080',
        marginTop: moderateScaleVertical(20),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginRight: moderateScale(20),
        marginLeft: moderateScale(20),
    },

    // Accordian

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: moderateScaleVertical(30),
    },
    title: {
        textAlign: 'center',
        fontSize: textScale(18),
        fontWeight: '300',
        marginBottom: moderateScaleVertical(20),
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 0,
    },
    headerText: {
        textAlign: 'center',
        fontSize: textScale(13),
        fontWeight: '500',
        padding: 4,
        color: "black",
    },
    content: {
        backgroundColor: "white",
        height: moderateScaleVertical(150),
        width: moderateScale(280),
        alignSelf: "center",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: moderateScale(-30),
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: 'green',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    ProductSpecifictionBar: {
        borderWidth: 1,
        borderTopColor: "black",
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "70%",
        alignSelf: "center",
        alignItems: "center",
        marginHorizontal: moderateScale(30),
        justifyContent: "space-around",
        marginTop: 20,
    },
    dropDownIcon: {
        alignSelf: "center",
        width: moderateScale(15),
        height: moderateScaleVertical(15)
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
    }
});



