import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image, Linking } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsive';

// const WIDTH = Dimensions.get('window').width;
// const HEIGHT_MODAL = 160;


const SimpleModal = (props) => {


    closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }
    return (
        <View disabled={true} style={styles.container}>
            <View style={styles.BackgroundColorModal1}>
                <ImageBackground style={styles.BackgroundImagemodal} imageStyle={{ borderRadius: 20 }} source={require("../assets/texture.png")}>
                    <View style={{ flexDirection: "row", marginTop: moderateScaleVertical(10), marginHorizontal: moderateScale(-60), justifyContent: "space-around", paddingHorizontal: 30 }}>
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { Linking.openURL('tel:9654511612'); }}>
                            <Image source={require("../assets/telephone.png")} style={styles.Callingicon} />
                            <Text style={styles.icontext}>Call</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { Linking.openURL('whatsapp://send?text=Hii Jwellery Bliss&phone=9654511612') }}>
                            <Image source={require("../assets/SocialMediaIcons/whatsappColored.png")} style={styles.Whatsappicon} />
                            <Text style={styles.icontext}>Whatsapp</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.Touch} onPress={() => closeModal(false, "Cancel")}>
                        {/* <Image source={require("../assets/cancel.png")} style={styles.Cancelicon} /> */}
                        <Text style={styles.Cancelicontext}>X</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
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
        width: moderateScale(310),
        height: moderateScaleVertical(170),
        paddingTop: 10,
        borderRadius: 10,
        marginTop: moderateScaleVertical(2.5)
    },
    BackgroundColorModal1: {
        // backgroundColor: "#25D366",
        width: moderateScale(315),
        height: moderateScaleVertical(155),
        borderRadius: 20,
        alignItems: "center",


    },
    BackgroundColorModal: {
        // height: HEIGHT_MODAL,
        paddingTop: 10,
        borderRadius: 10,
        // width: WIDTH - 80,
        // backgroundColor: "#FFF",
        borderRadius: 20,
        borderWidth: 2
    },
    Touch: {
        alignItems: "center",
        marginTop: 50,

    },
    Whatsappicon: {
        width: moderateScale(50),
        height: moderateScaleVertical(51),
        // tintColor: "black"
    },
    Callingicon: {
        width: moderateScale(50),
        height: moderateScaleVertical(51),
        // tintColor: "black"
    },
    icontext: {
        fontSize: textScale(13),
        color: "black",
        fontFamily:"HurmeGeometricSans1SemiBold",
        marginTop:moderateScaleVertical(2)
    },
    Cancelicontext: {
        fontSize: textScale(15),
        color: "black",
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