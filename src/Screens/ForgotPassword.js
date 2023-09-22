import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import axios from 'axios';


const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [isTimerActive, setTimerActive] = useState(false);
    const [remainingTime, setRemainingTime] = useState(30);

    const handleForgotPassword = async () => {
        if (isTimerActive) {
            return; // Return early if the timer is active
        }
        try {
            const response = await axios.post(
                'https://bliss-app-backend-production.up.railway.app/api/auth/forgotpassword',
                {
                    email: `${email}`,
                }
            );
            // Start the timer
            setTimerActive(true);
            // alert("Password Change Request has been sent to your Registered email")
            console.log(email)
            console.log('Success', response.data);
            // navigation.navigate("resetPass")
        } catch (error) {
            alert("error")
            console.error('API call error:', error);
        }
    };
    useEffect(() => {
        if (isTimerActive && remainingTime > 0) {
            const timer = setTimeout(() => {
                setRemainingTime(remainingTime - 1);
            }, 1000); // 1 second in milliseconds

            return () => clearTimeout(timer);
        } else {
            setTimerActive(false);
            setRemainingTime(30);
        }
    }, [isTimerActive, remainingTime]);
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../assets/logo.png")} style={{ width: moderateScale(300), height: moderateScaleVertical(300) }} />
                    </View>
                    <View style={{ marginTop: moderateScaleVertical(40), alignItems: "center" }}>
                        <Text style={{ fontSize: textScale(23), marginBottom: moderateScaleVertical(15), color: "#bc9954", fontFamily: "HurmeGeometricSans1", }}>Forgot your Password?</Text>
                        <Text style={{ fontSize: textScale(15), fontFamily: "HurmeGeometricSans1", color: "#a4a4a4" }}>Enter your Email below to reset the Password</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TextInput
                            style={{ textAlign: "left", borderColor: "black", paddingLeft: 20, borderWidth: 2, width: moderateScale(350), borderRadius: 20, marginTop: moderateScaleVertical(30), alignItems: "center", fontFamily: "HurmeGeometricSans1", height:moderateScaleVertical(20)}}
                            autoCorrect={false}
                            placeholder="Enter your registered Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}

                        />

                        <TouchableOpacity onPress={handleForgotPassword} disabled={isTimerActive}>
                            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{ borderRadius: 80 }} style={{
                                alignItems: "center",
                                padding: moderateScale(9),
                                width: moderateScale(200),
                                height: moderateScaleVertical(60),
                                justifyContent: 'center',
                                marginTop: moderateScaleVertical(40),
                                // opacity code
                                // opacity: isTimerActive ? 0.5 : 1,
                            }}>
                                <Text style={{ fontFamily: "HurmeGeometricSans1", textAlign: "center", justifyContent: "center", fontSize: textScale(20), color: "black" }}>{isTimerActive && <Text>{`Please wait ${remainingTime} seconds before submitting again`}</Text>}Submit</Text>
                                {/* <Text style={{ fontFamily: "HurmeGeometricSans1", textAlign: "center", justifyContent: "center", fontSize: textScale(20), color: "black" }}>{isTimerActive && <Text>{`Please wait ${remainingTime} seconds before submitting again`}</Text>}</Text> */}
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    AboutUsContentAlignment2: {
        justifyContent: "flex-start",
        marginBottom: moderateScaleVertical(17),
        alignSelf: "center"
    },
    AboutUsContent: {
        marginTop: moderateScaleVertical(15),
        alignSelf: "center",
        color: "#181818",
        // fontFamily: "Poppins-Medium",
        marginHorizontal: moderateScaleVertical(15),
        fontSize: 30,
        textAlign: "justify"
    },
})

