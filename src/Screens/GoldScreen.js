import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, ScrollView, TouchableOpacity, Modal, } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import SimpleModal from './SimpleModal'

const GoldScreen = ({ navigation }) => {
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
            <ScrollView>

                <View>
                    <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-around", marginHorizontal: 30 }}>
                        <Image source={require("../assets/gold-bars.png")} style={{ width: moderateScale(250), height: moderateScaleVertical(250), borderRadius: 30 }} />
                    </View>
                </View>

                <View style={styles.container}>
                    <DataTable>
                        {/* <DataTable.Header style={{ backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(390), alignSelf: "center" }} > */}
                        <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, height: moderateScaleVertical(90) }} style={{ width: moderateScale(390), alignSelf: "center" }}>
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >GOLD COINS</DataTable.Title>
                        </ImageBackground>
                        {/* </DataTable.Header> */}

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Weight</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Gold Price</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Making</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Gst</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Net Amt</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), justifyContent: "space-evenly", alignSelf: "center" }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>1 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 5,840</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>116.8</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>175.2</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 6,132</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>2 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 11680</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>233.6</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>350.4</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 12,264</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), alignSelf: "center" }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>5 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 29,200</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>584</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>876</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 30,660</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>10 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 58,400</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>1168</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>1752</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 61,320</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), alignSelf: "center" }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>20 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 1,16,800</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>2336</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>3504</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 1,22,640</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>50 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 2,92,000</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>5,840</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>8,760</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 3,06,600</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), alignSelf: "center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>100 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 5,84,000</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>11,680</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>17,520</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 612,200.</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </View>
            </ScrollView>
            {/* Whatsapp */}
            <View style={{ bottom: -40, position: "absolute", right: 5 }}>
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
            {/* Whatsapp */}
            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{}} style={{ position: "absolute", backgroundColor: "pink", height: moderateScaleVertical(60), width: "100%", alignSelf: "center", marginTop: moderateScaleVertical(748), }}>
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

export default GoldScreen;

const styles = StyleSheet.create({
    goldenStrip: {
        width: "100%",
        height: 3,
    },
    container: {
        // padding: 15,
        // fontSize: textScale(30),
        alignItems: "center",
        alignSelf: "center"
    },
    tableHeader: {
        borderColor: 'black',
    },
    GoldCoinsText: {
        justifyContent: "center",
        fontSize: textScale(45),
        color: "black",
        fontWeight: "600",
    },
    flex: {
        marginTop: moderateScaleVertical(30),
        backgroundColor: "#eec06b",
        borderRadius: 20,
        width: "98%",
        alignContent: "center",
        marginLeft: moderateScale(4.5),

    },
    line: {
        width: "95%",
        height: moderateScaleVertical(1.5),
        // backgroundColor: "#a4a4a4",
        backgroundColor: "black",
        alignSelf: 'center',
        marginBottom: moderateScaleVertical(15),
    },
    container: {
        paddingTop: 20,
        paddingHorizontal: 30,
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
    // Whatsapp

});