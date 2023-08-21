import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image, Linking } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsive';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 160;


const SimpleModal = (props) => {

    const handleLinkPress = () => {
        const url = "https://wa.me/9818287083"; // Your link URL
        Linking.canOpenURL(url);
    };

    closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }
    return (
        <View disabled={true} style={styles.container}>
            {/* <ImageBackground style={styles.BackgroundImagemodal} imageStyle={{ borderRadius: 20 }} source={require("../assets/texture.png")}> */}
            <View style={styles.BackgroundColorModal}>
                <View style={{ flexDirection: "row", marginTop: moderateScaleVertical(10), marginHorizontal: moderateScale(-60), justifyContent: "space-around", paddingHorizontal: 30 }}>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { Linking.openURL('tel:1010101010'); }}>
                        <Image source={require("../assets/call.png")} style={styles.Callingicon} />
                        {/* <Text style={styles.icontext}>Call</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { Linking.openURL('whatsapp://send?text=Hii Jwellery Bliss&phone=9818287083') }}>
                        <Image source={require("../assets/modal_whatsapp.png")} style={styles.Whatsappicon} />
                        {/* <Text style={styles.icontext}>Whatsapp</Text> */}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.Touch} onPress={() => closeModal(false, "Cancel")}>
                    {/* <Image source={require("../assets/cancel.png")} style={styles.Cancelicon} /> */}
                    <Text style={styles.Cancelicontext}>CANCEL</Text>
                </TouchableOpacity>
            </View>
            {/* </ImageBackground> */}
        </View>
    )
}

export default SimpleModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    BackgroundImagemodal: {
        height: HEIGHT_MODAL,
        paddingTop: 10,
        borderRadius: 10,
        width: WIDTH - 80,
    },
    BackgroundColorModal: {
        height: HEIGHT_MODAL,
        paddingTop: 10,
        borderRadius: 10,
        width: WIDTH - 80,
        backgroundColor: "#FFF",
        borderRadius: 20,
        borderWidth: 2
    },
    Touch: {
        alignItems: "center",
        marginTop: 35,

    },
    Whatsappicon: {
        width: moderateScale(40),
        height: moderateScaleVertical(40),
        tintColor: "black"
    },
    Callingicon: {
        width: moderateScale(40),
        height: moderateScaleVertical(40),
        tintColor: "black"
    },
    icontext: {
        fontSize: textScale(15),
        color: "black"
    },
    Cancelicontext: {
        fontSize: textScale(15),
        color: "red",
        fontSize: 20,
        fontWeight: "500"
    },
    Canceltext: {
        fontSize: textScale(20),
    },
    Cancelicon: {
        width: moderateScale(20),
        height: moderateScaleVertical(20),
        marginBottom: moderateScaleVertical(5)

    }
})