import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical, height, textScale } from '../utils/responsive'

const ConfirmOrder = ({ navigation }) => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={styles.disclaimer}>
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
                    <View style={{ marginTop: moderateScaleVertical(15), flexDirection: "column", marginVertical: moderateScaleVertical(6) }}>
                        <Text style={{ fontSize: textScale(15), fontWeight: "500", color: "black" }}>IFSC CODE :</Text>
                        <Text style={{ fontSize: textScale(12), fontWeight: "400", color: "black" }}>AXISXXX400</Text>
                        <Text style={{ fontSize: textScale(15), fontWeight: "500", color: "black" }}>ACCOUNT HOLDER NAME :</Text>
                        <Text style={{ fontSize: textScale(12), fontWeight: "400", color: "black" }}>NIKHIL</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.disclaimerText}>Disclaimer:</Text>
                        <Text style={styles.disclaimerDummyText}>This is dummy text opens everytime </Text>
                    </View>

                </View>
            </View>

            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('thank')}>
                    <View style={styles.WastageChartButton}>
                        <Text style={styles.buttontext}>CONFIRM  ORDER</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default ConfirmOrder;


const styles = StyleSheet.create({
    disclaimer: {
        borderColor: "black",
        borderWidth: 1.5,
        backgroundColor: "#F5FEFD",
        alignSelf: "center",
        marginTop: moderateScaleVertical(0),
        // width: moderateScale(390),
        width: moderateScale(365),
        height: moderateScaleVertical(300),
        alignSelf: "center",
        marginTop: moderateScaleVertical(250),
        borderRadius: 15,
    },
    line: {
        marginTop: moderateScaleVertical(10),
        width: "106%",
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
        padding:15,
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
    }
})