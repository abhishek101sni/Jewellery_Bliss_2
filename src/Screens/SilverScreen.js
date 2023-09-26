import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, ScrollView, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import SimpleModal from './SimpleModal'

const SilverScreen = ({ navigation }) => {
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
                <View style={{marginBottom:moderateScaleVertical(70)}}>

                    <View>
                        <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-around", marginHorizontal: 30 }}>
                            <Image source={require("../assets/silver-Bars.png")} style={{ width: moderateScale(150), height: moderateScaleVertical(150), borderRadius: 30 }} />
                        </View>
                    </View>

                    <View>
                            <ImageBackground source={require("../assets/silverTexture.jpg")} imageStyle={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: "center" , alignItems:'center'}} style={{ marginTop: moderateScaleVertical(10),width: moderateScale(370),height: moderateScaleVertical(50),alignSelf: 'center',}}>
                                <Text textStyle={{ fontSize: textScale(40), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" ,fontSize:textScale(30) ,fontFamily: "HurmeGeometricSans1SemiBold",color:"white" , alignSelf:"center" , height:"100%" , paddingTop:3}} >SILVER COINS</Text>
                            </ImageBackground>
                            
                            <DataTable>
                            <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(370), alignSelf: "center" }}>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Weight</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Silver Price</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Making</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Gst</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(12), fontFamily: "HurmeGeometricSans1SemiBold" }}>Net Amt</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={{ backgroundColor: "#f0f8ff", width: moderateScale(370), justifyContent: "space-evenly", alignSelf: "center" }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>2 Gram</DataTable.Cell>
                             <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 147</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>2.94</DataTable.Cell>
                                 <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>4.41</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 154.35</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(370), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>5 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 367.5</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>7.35</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>11.025</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 385.87</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={{ backgroundColor: "#f0f8ff", width: moderateScale(370), alignSelf: "center" }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>10 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 735</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>14.70</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>22.05</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 771.75</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(370), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>20 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 1,470</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>29.40</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>44.10</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 1543.50</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={{ backgroundColor: "#f0f8ff", width: moderateScale(370), alignSelf: "center" }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>50 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 3,675</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>73.50</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>110.25</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 3,858.75</DataTable.Cell>
                            </DataTable.Row>
    
                            <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(370), alignSelf: "center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1SemiBold" }}>100 Gram</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 7,350</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>147</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>220.5</DataTable.Cell>
                                <DataTable.Cell textStyle={{ fontSize: textScale(11), fontFamily: "HurmeGeometricSans1" }}>₹ 7707.5</DataTable.Cell>
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

export default SilverScreen;

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