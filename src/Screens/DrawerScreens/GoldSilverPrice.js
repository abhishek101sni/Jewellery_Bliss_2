import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, ImageBackground, ScrollView, TouchableOpacity, Modal, } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
import SimpleModal from '../SimpleModal'
import axios from 'axios';

const GoldScreen = ({ navigation }) => {

    // GoldPriceApi
    const [apiDATA, setAPIdata] = useState([]);
    const API_URL = 'https://rappid.in/apis/mcx.php?key=9015790532';
    const firstData = apiDATA.data && apiDATA.data[0];
    const secondData = apiDATA.data && apiDATA.data[2];

    const fetchAPIData = async () => {
        try {
            const response = await axios.get(API_URL);
            setAPIdata(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // fetchAPIData()
    useEffect(() => {
        fetchAPIData();
        const interval = setInterval(fetchAPIData, 10 * 60 * 1000);
        return () => {
            clearInterval(interval);
            console.log('APIcalled after every 10 mins');
        };
    }, []);
    // GoldPriceApi

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
        <ImageBackground style={{ flex: 1 }} source={require("../../assets/background-image2.png")}>
            <View style={{}}>
                <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>
            <View>
                <ScrollView>

                    {/* <View>
                        <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-around", marginHorizontal: 30 }}>
                            <Image source={require("../../assets/gold-bars.png")} style={{ width: moderateScale(150), height: moderateScaleVertical(150), borderRadius: 30 }} />
                        </View>
                    </View> */}

                    <View style={styles.container}>
                        {apiDATA.data && apiDATA.data.length > 0 ? (
                            <DataTable>
                                <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} imageStyle={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, height: moderateScaleVertical(90), width: moderateScale(390), alignSelf: "center" }} style={{ width: moderateScale(390), alignSelf: "center" }}>
                                    <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >GOLD PRICE</DataTable.Title>
                                </ImageBackground>

                                <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(17), fontFamily: "HurmeGeometricSans1Bold" }}>  BUY</DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(15), fontFamily: "HurmeGeometricSans1SemiBold" }}>₹ {firstData.BUY}</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), justifyContent: "space-evenly", alignSelf: "center" }} >
                                    <DataTable.Cell textStyle={{ fontSize: textScale(17), fontFamily: "HurmeGeometricSans1Bold" }}>  SELL</DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(15), fontFamily: "HurmeGeometricSans1SemiBold" }}>₹ {firstData.SELL}</DataTable.Cell>
                                </DataTable.Row>
                            </DataTable>
                        ) : (
                            <Text>Loading</Text>
                        )}
                    </View>


                    {/* <View>
                        <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-around", marginHorizontal: 30 }}>
                            <Image source={require("../../assets/silver-Bars.png")} style={{ width: moderateScale(150), height: moderateScaleVertical(150), borderRadius: 30 }} />
                        </View>
                    </View> */}


                    <View style={styles.container}>
                        {apiDATA.data && apiDATA.data.length > 0 ? (
                            <DataTable>
                                <ImageBackground source={require("../../assets/silverTexture.jpg")} imageStyle={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, height: moderateScaleVertical(90), width: moderateScale(390), alignSelf: "center" }} style={{ width: moderateScale(390), alignSelf: "center" }}>
                                    <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black", }} >SILVER PRICE</DataTable.Title>
                                </ImageBackground>

                                <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(17), fontFamily: "HurmeGeometricSans1Bold" }}>  BUY</DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(15), fontFamily: "HurmeGeometricSans1SemiBold" }}>₹ {secondData.BUY}</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), justifyContent: "space-evenly", alignSelf: "center" }} >
                                    <DataTable.Cell textStyle={{ fontSize: textScale(17), fontFamily: "HurmeGeometricSans1Bold" }}>  SELL</DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}></DataTable.Cell>
                                    <DataTable.Cell textStyle={{ fontSize: textScale(15), fontFamily: "HurmeGeometricSans1SemiBold" }}>₹ {secondData.SELL}</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>
                        ) : (
                            <Text>Loading</Text>
                        )}
                    </View>
                </ScrollView>
            </View>

            {/* Whatsapp */}
            <View style={{ bottom: -40, position: "absolute", right: 5 }}>
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
            <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} imageStyle={{}} style={{ position: "absolute", backgroundColor: "pink", height: moderateScaleVertical(60), width: "100%", alignSelf: "center", marginTop: moderateScaleVertical(748), }}>
                <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Drawer") }}>
                        <Image source={require("../../assets/home.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => { navigation.navigate("scrn2") }}>
                    <Image source={require("../assets/cart-filled.png")} style={{ width: 40, height: 40 }} />
                </TouchableOpacity> */}

                    <TouchableOpacity onPress={() => { navigation.navigate("cart") }}>
                        <Image source={require("../../assets/cart.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
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