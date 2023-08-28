import { View, Text, ImageBackground, Modal, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateScaleVertical, height, textScale } from '../utils/responsive'
import SimpleModal from './SimpleModal'
import { getLeftStyles } from 'react-native-paper/lib/typescript/src/components/List/utils'
import { useSelector, useDispatch } from 'react-redux';

const ConfirmOrder = ({ navigation }) => {
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

    const [showModal, setShowModal] = useState(false);
    const { cart, cartDetails } = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
    const { total, grandTotal } = cartDetails;
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={{}}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>
            <ScrollView>
                <View style={{ backgroundColor: "#E8E8E8", alignSelf: "center", width: moderateScaleVertical(390), borderRadius: 20, marginTop: moderateScaleVertical(30) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: moderateScaleVertical(20) }}>
                        <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold" }}>Product Name</Text>
                        <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold" }}>Qty.</Text>
                        <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold" }}>Purity</Text>
                        <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold" }}>Weight</Text>
                        <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold" }}>Price</Text>
                    </View>

                    <View style={{ marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(-10) }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: moderateScaleVertical(20) }}>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(100) }} >{cartItem.name}</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40) }}>{cartItem.count}</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40) }}>{cartItem.purity}</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(60) }}>{cartItem.weight} gm</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(30) }}>200</Text>
                        </View>
                        <View style={styles.Productline}></View>
                    </View>
                    <View style={{ marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(-10) }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: moderateScaleVertical(20) }}>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(100) }} >Handmade & Hollow 8.300</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40) }}>  20</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40) }}>20 kt</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(60) }}>4000 gm</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(30) }}>200</Text>
                        </View>
                        <View style={styles.Productline}></View>
                    </View>
                    <View style={{ marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(-10) }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: moderateScaleVertical(20) }}>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(100) }} >Handmade & Hollow 8.300</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40) }}>  20</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40) }}>20 kt</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(60) }}>4000 gm</Text>
                            <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(30) }}>200</Text>
                        </View>
                        <View style={styles.Productline}></View>
                    </View>

                </View>

                <ImageBackground style={styles.disclaimer} imageStyle={{ borderRadius: 20 }} source={require("../assets/CompressedTexture3.jpg")} >
                    <View style={{ marginTop: moderateScaleVertical(5), marginLeft: moderateScale(20) }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: textScale(17), color: "black", fontFamily: "HurmeGeometricSans1SemiBold" }}>Bank Details</Text>
                            <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>To initiate the order processing, a payment of 15% on the bank details mentioned below</Text>
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
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>Adinath chain and jewellers{'\n'}e-comm LLP</Text>
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
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('thank')}>
                        <View style={styles.WastageChartButton}>
                            <Text style={styles.buttontext}>CONFIRM  ORDER</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Tab Navigator */}

            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{}} style={{ position: "absolute", backgroundColor: "pink", height: moderateScaleVertical(60), width: "100%", alignSelf: "center", marginTop: moderateScaleVertical(748), marginBottom: moderateScaleVertical(0) }}>
                <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Drawer") }}>
                        <Image source={require("../assets/home.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("cart") }}>
                        <Image source={require("../assets/cart.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {/* Tab Navigator */}

            {/* Whatsapp */}
            <View View style={{ bottom: -40, position: "absolute", right: 20 }}>
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
        </ImageBackground>
    )
}

export default ConfirmOrder;


const styles = StyleSheet.create({
    goldenStrip: {
        width: "100%",
        height: 3,
    },
    disclaimer: {
        alignSelf: "center",
        width: moderateScale(390),
        height: moderateScaleVertical(275),
        alignSelf: "center",
        marginTop: moderateScaleVertical(50),
        borderRadius: 15,

    },
    line: {
        marginTop: moderateScaleVertical(10),
        width: "105%",
        marginRight: moderateScale(20),
        height: moderateScaleVertical(1.5),
        backgroundColor: "#a4a4a4",
        backgroundColor: "black",
        alignSelf: 'center',
    },
    Productline: {
        marginTop: moderateScaleVertical(10),
        width: "90%",
        // marginRight: moderateScale(20),
        height: moderateScaleVertical(0.1),
        backgroundColor: "#a4a4a4",
        backgroundColor: "black",
        alignSelf: 'center',
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
    // disclaimerDummyText: {
    //     color: " opens everytimeblack",
    //     fontSize: textScale(18),
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginLeft: moderateScale(10),
    //     // marginTop: moderateScaleVertical(12),
    //     color: "black",
    //     fontWeight: "300"
    // },
    WastageChartButton: {
        marginTop: moderateScaleVertical(20),
        backgroundColor: "black",
        padding: 15,
        alignItems: "center",
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        width: moderateScale(160),
        justifyContent: "center",
        height: moderateScaleVertical(50),
        alignSelf: 'center',
        marginBottom: moderateScaleVertical(100)
    },
    buttontext: {
        fontSize: textScale(14),
        color: "#eec06b",
        fontWeight: "bold",
    },
    bankImage: {
        width: moderateScale(80),
        height: moderateScaleVertical(80),
        marginTop: moderateScaleVertical(25)
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

})