import React, { useState } from "react";
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, Modal , SafeAreaView } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

function LogInSignUp({ navigation }) {
    const OpenSignup = () => {
        setShowModal(true);
    }
    const [showModal, setShowModal] = useState(false);
    return (
        <SafeAreaView style={{flex:1}}>
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={{ flex: 1 }} >



                <View style={{ flex: 1, alignItems: "center"}}>

                    <View style={styles.logoAlignment}>
                        <Image style={styles.logoSize} source={require('../assets/logo.png')} />
                    </View>

                    <View style={{marginTop:moderateScaleVertical(140)}}>
                    <TouchableOpacity onPress={() => { navigation.navigate('login') }} style={styles.loginButtonAlignment}>
                        <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                            <Text style={styles.loginButtonText}>LOGIN</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                        <View style={styles.signupButton}>
                            <Text style={styles.signupText}>SIGNUP</Text>
                        </View>
                    </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={{ marginTop: moderateScaleVertical(400) }}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStripBottom} />
            </View>

            {/* modal--------------------- */}


            <Modal Modal visible={showModal} animationType="slide" onRequestClose={() => setShowModal(false)} >
                <View style={styles.modalAlignMent}>
                    <View style={styles.modalStyle}>
                        <Text style={styles.modalSignUpText} >SIGN UP AS</Text>

                        <View style={styles.line}></View>

                        <TouchableOpacity style={styles.ModalLogInButtonAlignment} onPress={() => navigation.navigate('signup')}>
                            <View style={styles.Modalloginbutton}>
                                <Text style={styles.Modallogintext}>DEALER</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ModalSignUpButtonAlignment} onPress={() => navigation.navigate('signup')}>
                            <View style={styles.Modalsignupbutton}>
                                <Text style={styles.Modalsignuptext}>CUSTOMER</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </ImageBackground>
        </SafeAreaView>
    );
}

export default LogInSignUp;


const styles = StyleSheet.create({
    goldenStripBottom: {
        width: "100%",
        height: 6,
    },
    logoAlignment: {
        flex: 0.3,
        alignSelf: "center",
        alignItems: "center",
        padding: moderateScale(130),
        justifyContent: "center",
        marginTop:moderateScaleVertical(80)
        // backgroundColor:"red"
    },
    logoSize: {
        width: moderateScale(350),
        height: moderateScaleVertical(350),
        alignItems: "center"
    },
    loginButtonAlignment: {
        alignItems: "center",
        marginBottom: moderateScaleVertical(10)
    },
    loginButtonText: {
        fontSize: textScale(20),
        color: "black",
        marginLeft: moderateScale(0),
        borderRadius: 40,
        padding: moderateScale(5),
        // fontFamily: "Poppins-Medium"
        fontFamily: "HurmeGeometricSans1",    },
    ImageBackgroundStyle: {
        alignItems: "center",
        padding: moderateScale(7),
        width: moderateScale(200),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        marginTop: moderateScaleVertical(40),
        fontFamily: "Poppins-Medium"
    },
    signupButton: {
        alignItems: "center",
        backgroundColor: "black",
        padding: moderateScale(15),
        borderRadius: 80,
        width: moderateScale(200),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        fontSize: textScale(20),
        color: "#eec06b",
        padding: moderateScale(-1),
        fontFamily: "HurmeGeometricSans1",
    },
    // MODAL

    modalAlignMent: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalStyle: {
        backgroundColor: "#eec06b",
        padding: 50,
        borderRadius: 50,
        width: 350
    },

    modalSignUpText: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000',
        marginTop: -25,
    },
    ModalLogInButtonAlignment: {
        alignItems: 'center',
        marginTop: 20
    },

    Modalloginbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 30,
        borderRadius: 80,
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Modallogintext: {
        fontSize: 20,
        color: "#eec06b",
    },

    ModalSignUpButtonAlignment: {
        alignItems: 'center'
    },

    Modalsignupbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 30,
        borderRadius: 80,
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Modalsignuptext: {
        fontSize: 20,
        color: "#eec06b",
    },
    signupbutton2: {
        alignItems: "center",
        padding: 15,
        width: 240,
        height: 70,
        justifyContent: 'center',
        marginTop: 40,
        fontFamily: "Poppins-Medium"
    },

    signuptext2: {
        fontSize: 23,
        color: "black",
        marginLeft: 0,
        borderRadius: 40,
        padding: 5,
        fontFamily: "Poppins-Medium"
    },
});
