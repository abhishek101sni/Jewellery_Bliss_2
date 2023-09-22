import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, ScrollView, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
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
        <SafeAreaView style={{flex:1}}>
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>

            <ScrollView>
                <View>

                    <View>
                        <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-around", marginHorizontal: 30 }}>
                            <Image source={require("../assets/gold-bars.png")} style={{ width: moderateScale(230), height: moderateScaleVertical(230), borderRadius: 30 }} />
                        </View>
                    </View>

                    <View >
                        <DataTable>
                            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, height: moderateScaleVertical(90), width: moderateScale(390), alignSelf: "center" }} style={{ width: moderateScale(390), alignSelf: "center" }}>
                                <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >GOLD COINS</DataTable.Title>
                            </ImageBackground>

                            <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Weight</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Gold Price</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Making</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Gst</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Net Amt</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), justifyContent: "space-evenly", alignSelf: "center" }} >
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>1 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 5,840</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>116.8</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>175.2</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 6,132</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>2 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 11680</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>233.6</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>350.4</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 12,264</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), alignSelf: "center" }} >
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>5 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 29,200</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>584</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>876</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 30,660</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>10 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 58,400</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>1168</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>1752</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 61,320</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), alignSelf: "center" }} >
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>20 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 1,16,800</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>2336</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>3504</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 1,22,640</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>50 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 2,92,000</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>5,840</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>8,760</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 3,06,600</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), alignSelf: "center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} >
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>100 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 5,84,000</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>11,680</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>17,520</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 612,200</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </View>
                </View>
            </ScrollView>

            {/* Whatsapp */}
            <View style={{ bottom: -40, position: "absolute", right: 5 }}>
                <TouchableOpacity onPress={() => changealVisible(true)} style={styles.HelpButtonAlignment} >
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

            {/* Background */}
            <ImageBackground source={require('../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) }}>
        <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

          <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
            <Image source={require('../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
            <Image source={require('../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
          </TouchableOpacity>

        </View>
      </ImageBackground>
        </ImageBackground>
        </SafeAreaView>
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
        alignSelf: "center",
        // width:"80%"
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