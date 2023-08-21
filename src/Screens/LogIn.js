import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from "react-native";
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
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <ScrollView>

                <View style={styles.logoAlignment}>
                    <Image source={require("../assets/logo.png")} style={styles.logoSize} />
                </View>

                <View style={styles.LogInTitle}>
                    <Text style={styles.LogInText}>Login</Text>
                </View>

                <TextInput
                    style={styles.MobileNoInput}
                    autoCapitalize
                    keyboardType = 'numeric'
                    autoCorrect={false}
                    placeholder="Mobile No."
                    placeholderTextColor="#C7C7CD"
                    onChangeText={(text) => setMobile(text)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TextInput
                        style={styles.PasswordInput}
                        // autoCapitalize
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder="Password"
                        placeholderTextColor="#C7C7CD"
                        // secureTextEntry={seePassword}
                        secureTextEntry
                        // value="password"
                        onChangeText={(text) => setPassword(text)}
                    />
                    {/* <TouchableOpacity onPress={() => setseePassword(!seePassword)}>
                            <Image
                                style={{ height: 20, width: 20, marginTop: 50 }}
                                source={
                                    seePassword
                                        ? require('../assets/eye-open.png')
                                        : require('../assets/eye-close.png')
                                }
                            />
                        </TouchableOpacity> */}
                </View>

                <View>
                    <TouchableOpacity onPress={checkLogin} style={styles.logInButtonAlignment}>
                        <ImageBackground source={require("../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                            <Text style={styles.logInButtonText}>LOGIN</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity>
                    <Text style={styles.ForgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity> */}

                <View style={styles.line}></View>

                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ textAlign: "center", paddingTop: 6, fontWeight: 'bold', fontFamily: "Poppins-Medium", color: "#404040", }}>You are not a registered user Click </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                        <Text style={{ fontWeight: 'bold', textAlign: "center", fontFamily: "Poppins-Medium", paddingTop: 6, color: "#404040", textDecorationLine: 'underline', }}> here </Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
            <View style={{ top: height - 7, }}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={{
                    borderWidth: 3,
                    width: 431,
                    // borderColor: 'gold',
                    // marginBottom:200
                }} />
            </View>
        </ImageBackground>
    );
};

export default LogIn;

const styles = StyleSheet.create({
    logoAlignment: {
        // marginTop: moderateScaleVertical(-10),
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
        fontSize: textScale(18),
        alignSelf: 'center',
        marginTop: moderateScaleVertical(20)
    },
    LogInText: {
        fontSize: textScale(23),
        marginTop: moderateScaleVertical(10),
        marginBottom: moderateScaleVertical(20),
        textAlign: "center",
        color: "black",
        fontFamily: "Poppins-Medium"

    },
    MobileNoInput: {
        alignSelf: 'center',
        fontSize: textScale(13),
        color: "black",
        width: "80%",
        marginTop: moderateScaleVertical(30),
        marginBottom: moderateScaleVertical(5),
        borderBottomWidth: moderateScale(1.5),
        borderBottomColor: "#bc9954",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
        // fontFamily: "Poppins-Medium"
    },
    PasswordInput: {
        alignSelf: 'center',
        fontSize: textScale(13),
        color: "black",
        width: '80%',
        marginTop: moderateScaleVertical(50),
        marginBottom: moderateScaleVertical(5),
        borderBottomWidth: moderateScale(1.5),
        borderBottomColor: "#bc9954",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
        // fontFamily: "Poppins-Medium"
    },
    logInButtonAlignment: {
        alignItems: "center",
        fontFamily: "Poppins-Medium",
        marginBottom: moderateScaleVertical(10),
    },
    logInButtonText: {
        fontSize: textScale(23),
        color: "black",
        marginLeft: moderateScale(0),
        borderRadius: 40,
        paddingTop: moderateScaleVertical(5),
        fontFamily: "Poppins-Medium"

    },
    ImageBackgroundStyle: {
        alignItems: "center",
        padding: moderateScale(9),
        width: moderateScale(200),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        marginTop: moderateScaleVertical(40),
        fontFamily: "Poppins-Medium"
    },
    ForgotPasswordText: {
        fontSize: textScale(14),
        color: "#a4a4a4",
        marginBottom: moderateScaleVertical(20),
        textAlign: "center",
        marginTop: moderateScaleVertical(20),
        fontFamily: "Poppins-Medium"
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
