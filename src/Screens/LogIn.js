import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground ,SafeAreaView } from "react-native";
import { AuthContext } from "./AuthContext";
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const LogIn = ({ navigation,
    label,
    iconName,
    error,
    password,
    onFocus = () => { },
    ...props }) => {

    const { login } = useContext(AuthContext);
    const [mobile, setMobile] = useState(null);
    const [pasword, setPassword] = useState(null);
    const [seePassword, setseePassword] = useState(password)

    const checkLogin = () => {
        if (!mobile || !pasword) {
            alert('Please fill in all the mandatory fields.');
            return
        } login(mobile, pasword)
    }

    return (  
        <SafeAreaView style={{flex:1}}>
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={styles.logoAlignment}>
                        <Image source={require("../assets/logo.png")} style={styles.logoSize} />
                    </View>

                    <View style={styles.LogInTitle}>
                        <Text style={styles.LogInText}>Login</Text>
                    </View>
                <View style={{alignItems:"center"}}>
                    <TextInput
                        style={styles.MobileNoInput}
                        autoCapitalize
                        keyboardType='numeric'
                        autoCorrect={false}
                        placeholder="Mobile No."
                        placeholderTextColor="#C7C7CD"
                        onChangeText={(text) => setMobile(text)}
                    />
                        <TextInput
                            style={styles.PasswordInput}
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder="Password"
                            placeholderTextColor="#C7C7CD"
                            // secureTextEntry={seePassword}
                            secureTextEntry
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>

                    <View>
                        <TouchableOpacity onPress={checkLogin} style={styles.logInButtonAlignment}>
                            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                                <Text style={styles.logInButtonText}>LOGIN</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => { navigation.navigate('forgotPass') }}>
                        <Text style={styles.ForgotPasswordText}>Forgot password?</Text>
                    </TouchableOpacity>

                    <View style={styles.line}></View>

                    <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: moderateScaleVertical(20) }}>
                        <Text style={{ textAlign: "center", paddingTop: 6, fontFamily: "HurmeGeometricSans1SemiBold", color: "#404040", }}>You are not a registered user Click </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                            <Text style={{ textAlign: "center", paddingTop: 6, color: "#404040", textDecorationLine: 'underline', fontFamily: "HurmeGeometricSans1SemiBold", }}>here </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View >
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStripBottom} />
            </View>
        </ImageBackground>
        </SafeAreaView>
    );
};

export default LogIn;

const styles = StyleSheet.create({
    goldenStripBottom: {
        width: "100%",
        height: 6,
    },
    logoAlignment: {
        flex: 0.3,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: moderateScaleVertical(-35),
    },
    logoSize: {
        width: moderateScale(300),
        height: moderateScaleVertical(300),
    },
    LogInTitle: {
        flex: 0.5,
        fontSize: textScale(18),
        alignSelf: 'center',
        marginTop: moderateScaleVertical(40),
        marginBottom: moderateScaleVertical(10)
    },
    LogInText: {
        fontSize: textScale(20),
        marginTop: moderateScaleVertical(10),
        marginBottom: moderateScaleVertical(10),
        textAlign: "center",
        color: "black",
        fontFamily: "HurmeGeometricSans1",
    },
    MobileNoInput: {
        fontSize: textScale(13),
        color: "black",
        width: "80%",
        marginTop: moderateScaleVertical(30),
        marginBottom: moderateScaleVertical(5),
        borderBottomWidth: moderateScale(1.5),
        borderBottomColor: "#bc9954",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
        fontFamily: "HurmeGeometricSans1",
        paddingBottom:moderateScaleVertical(1)

    },
    PasswordInput: {
        fontSize: textScale(13),
        color: "black",
        width: '80%',
        marginTop: moderateScaleVertical(50),
        marginBottom: moderateScaleVertical(5),
        borderBottomWidth: moderateScale(1.5),
        borderBottomColor: "#bc9954",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
        fontFamily: "HurmeGeometricSans1",
        marginBottom: moderateScaleVertical(20),
        paddingBottom:moderateScaleVertical(1)
    },
    logInButtonAlignment: {
        alignItems: "center",
    },
    logInButtonText: {
        fontSize: textScale(20),
        color: "black",
        marginLeft: moderateScale(0),
        borderRadius: 40,
        // paddingTop: moderateScaleVertical(3),
        fontFamily: "HurmeGeometricSans1",

    },
    ImageBackgroundStyle: {
        alignItems: "center",
        padding: moderateScale(9),
        width: moderateScale(200),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        marginTop: moderateScaleVertical(40),
    },
    ForgotPasswordText: {
        fontSize: textScale(14),
        color: "#a4a4a4",
        marginBottom: moderateScaleVertical(20),
        textAlign: "center",
        marginTop: moderateScaleVertical(20),
        fontFamily: "HurmeGeometricSans1",
        marginBottom: moderateScaleVertical(20)
    },
    line: {
        width: "80%",
        height: moderateScaleVertical(1.5),
        backgroundColor: "#a4a4a4",
        alignSelf: 'center',
        marginBottom: moderateScaleVertical(15),
    },

    ClickableText: {
        textDecorationLine: 'underline',
    },
});
