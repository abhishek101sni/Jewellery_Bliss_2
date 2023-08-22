import { View, Text, ImageBackground, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateScaleVertical, height, textScale } from '../utils/responsive'
import SimpleModal from './SimpleModal'

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
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={{}}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>
            {/* <View style={styles.disclaimer}> */}
                <ImageBackground  style={styles.disclaimer} imageStyle={{borderRadius:20}} source={require("../assets/CompressedTexture3.jpg")} >
                    <View style={{ marginTop: moderateScaleVertical(20), marginLeft: moderateScale(20) }}>
                        <Text style={{ fontSize: textScale(17), marginleft: moderateScale(20), fontWeight: "500", color: "black" }}>Bank Details:</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={require("../assets/standard-chartered.png")} style={styles.bankImage} />
                            <View style={{ flexDirection: "column", marginTop: moderateScaleVertical(25), marginLeft: moderateScale(10) }}>
                                {/* <Text style={{ fontSize: textScale(18), fontWeight: "500", color: "black" }}>STANDARD CHARTED BANK</Text> */}
                                <Text style={{ fontSize: textScale(18), fontWeight: "500", color: "black" }}>STANDARD CHARTED BANK</Text>
                                <Text style={{ fontSize: textScale(15), fontWeight: "500", color: "black" }}>2366 3436 7368 6333</Text>

                            </View>
                        </View>
                        <View style={{ marginLeft:moderateScale(90), marginTop: moderateScaleVertical(15), flexDirection: "column", marginVertical: moderateScaleVertical(6) }}>
                            <Text style={{ fontSize: textScale(15), fontWeight: "500", color: "black" }}>IFSC CODE : AXISXXX400</Text>
                            <Text style={{ fontSize: textScale(12), fontWeight: "400", color: "black" }}>AXISXXX400</Text>
                            <Text style={{ fontSize: textScale(15), fontWeight: "500", color: "black" }}>ACCOUNT HOLDER NAME : NIKHIL</Text>
                            <Text style={{ fontSize: textScale(12), fontWeight: "400", color: "black" }}>NIKHIL</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.disclaimerText}>Disclaimer:</Text>
                            <Text style={styles.disclaimerDummyText}>This is dummy text opens everytime </Text>
                        </View>

                    </View>
                </ImageBackground>
            {/* </View> */}

            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('thank')}>
                    <View style={styles.WastageChartButton}>
                        <Text style={styles.buttontext}>CONFIRM  ORDER</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
        marginTop: moderateScaleVertical(0),
        width: moderateScale(390),
        height: moderateScaleVertical(300),
        alignSelf: "center",
        marginTop: moderateScaleVertical(250),
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
    disclaimerText: {
        color: "black",
        fontSize: textScale(18),
        justifyContent: "center",
        alignItems: "center",
        marginLeft: moderateScale(-2),
        marginTop: moderateScaleVertical(7)
    },
    disclaimerDummyText: {
        color: " opens everytimeblack",
        fontSize: textScale(13),
        justifyContent: "center",
        alignItems: "center",
        marginLeft: moderateScale(10),
        marginTop: moderateScaleVertical(12),
        color: "black",
        fontWeight: "400"
    },
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
        alignSelf: 'center'
    },
    buttontext: {
        fontSize: textScale(14),
        color: "#eec06b",
        fontWeight: "bold",
    },
    bankImage: {
        marginTop: moderateScaleVertical(10),
        width: moderateScale(80),
        height: moderateScaleVertical(80)
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