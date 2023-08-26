import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, FlatList, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'
import { setActiveItem } from '../../redux/action';
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
import SimpleModal from '../SimpleModal';


const TwentyKarat = ({ navigation }) => {
    // WhatsApp
    const [isModalVisible, setisModalVisible] = useState(false)
    const [chooseData, setChooseData] = useState();

    const changeModalVisible = (bool) => {
        setisModalVisible(bool)
    }


    const setData2 = (data) => {
        setChooseData(data)
    }
    // WhatsApp

    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getAPIDATA = async () => {
        const url = "https://bliss-app-backend-production.up.railway.app/api/products/?search=20";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getAPIDATA();
    }, []);

    const handlePress = (item) => {
        dispatch(setActiveItem(item));
        navigation.navigate('singleproduct');
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assets/background-image2.png")}>
            <View style={{}}>
                <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>
            <FlatList contentContainerStyle={{ alignItems: "center" }}
                data={data}
                numColumns={2}
                renderItem={({ item, index }) => <View key={index} style={styles.View1}>

                    <View style={styles.View2}>
                        <View style={styles.View3}>
                            <TouchableOpacity onPress={() => handlePress(item)}>
                                <Image style={styles.ImageView} source={{ uri: item.images[0] }} />
                                <ImageBackground style={styles.View5} imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} source={require("../../assets/CompressedTexture3.jpg")}>
                                    <Text style={{ color: "black", fontWeight: "600", }}>{item?.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>}
            />
            {/* Whatsapp */}
            <View style={{ bottom: -95, position: "absolute", right: 5 }}>
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
            {/* <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} imageStyle={{}} style={{ position: "absolute", backgroundColor: "pink", height: moderateScaleVertical(60), width: "100%", alignSelf: "center", marginTop: moderateScaleVertical(748), }}>
                <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-around" }}>
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

export default TwentyKarat

const styles = StyleSheet.create({
    goldenStrip: {
        width: "100%",
        height: 3,
    },
    View1: {
        margin: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: moderateScale(20)
    },

    View2: {
        backgroundColor: 'white',
        // justifyContent: 'space-evenly',
        // marginRight: moderateScale(10),
        marginTop: moderateScaleVertical(15),
        marginBottom: moderateScaleVertical(60),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: moderateScale(150),
        height: moderateScaleVertical(180),
        justifyContent: "space-around",
        marginHorizontal: moderateScale(-5)
    },

    View3: {
        backgroundColor: 'white',
        borderRadius: 35,


    },

    ImageView: {
        height: moderateScaleVertical(155),
        width: moderateScale(150),
        alignSelf: 'center',
        borderRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    View5: {
        height: moderateScaleVertical(40),
        width: moderateScale(150),
        color: 'black',
        paddingTop: 13,
        backgroundColor: '#ECC440',
        textAlign: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        fontWeight: "900",
        fontSize: textScale(10),
        justifyContent: "center",

    },
    View5: {
        alignItems: "center",
        height: moderateScaleVertical(40),
        width: moderateScale(153),
        textAlign: 'center',
        alignSelf: "center",
        fontWeight: "900",
        fontSize: textScale(10),
        justifyContent: "center",
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
})