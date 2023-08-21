import { View, Text, ImageBackground, StyleSheet, Animated, SafeAreaView ,TouchableOpacity, Image , Modal } from 'react-native'
import React, { useState } from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
import SimpleModal from '../SimpleModal'

const ManageOrder = () => {
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


        <SafeAreaView style={styles.background} >

            <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), height: moderateScaleVertical(150), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                <Text style={{ color: "black", }}></Text>
                <View style={{ flexDirection: "row", marginHorizontal: moderateScale(-37), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>23 April 2023</Text>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(15), color: "black" }}>                       </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: -15, justifyContent: "space-around", marginTop: moderateScaleVertical(5) }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Order No :</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "black" }}>#321</Text>

                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Qty.</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "black" }}>1 pcs</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Price</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "black", textAlign: "right" }}>Rs. 400</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), height: moderateScaleVertical(150), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                <Text style={{ color: "black", }}></Text>
                <View style={{ flexDirection: "row", marginHorizontal: moderateScale(-37), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>15 June 2023</Text>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(15), color: "black" }}>                       </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: moderateScale(-15), justifyContent: "space-around", marginTop: moderateScaleVertical(5) }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Order No :</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "black" }}>#721</Text>

                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Qty.</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "black" }}>3 pcs</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Price</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "black", textAlign: "right" }}>Rs. 900</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), height: moderateScaleVertical(150), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                <Text style={{ color: "black", }}></Text>
                <View style={{ flexDirection: "row", marginHorizontal: moderateScale(-37), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>2 Feb 2023</Text>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(15), color: "black" }}>                         </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: -15, justifyContent: "space-around", marginTop: moderateScaleVertical(5) }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Order No :</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "black" }}>#481</Text>

                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Qty.</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "black" }}>1 pcs</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Price</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "black", textAlign: "right" }}>Rs. 300</Text>
                    </View>
                </View>
            </View>
            {/* Whatsapp */}
            <View style={{ bottom: -90, position: "absolute", right: 20 }}>
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
        </SafeAreaView>

    )
}

export default ManageOrder

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "black"
    },
    image: {
        width: moderateScale(450),
        height: moderateScaleVertical(450),
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
})