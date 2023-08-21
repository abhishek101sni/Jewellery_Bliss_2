import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const OTP = () => {
    return (
        <View>
            <ScrollView>
                <View style={styles.image}>
                    <Image style={styles.imageSize} source={require("../assets/logo.png")} />
                </View>


                <View style={styles.Alignment1}>

                    <Text style={styles.MobileNoTextAlignment}>Verify Mobile number</Text>

                    <Text style={styles.FourDigitCodeAlignment}>Enter 4 digit verification code sent to</Text>

                    <View style={styles.TouchableButton}>
                        <Text style={styles.MobileNoText}>85860449595</Text>
                        <TouchableOpacity >
                            <Text style={styles.MobileNoChangeText}> Change</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.OtpInput}>
                    <View style={styles.TextInputView}>
                        <TextInput keyboardType="number-pad" maxLength={1} style={{ color: 'red' }} />
                    </View>
                    <View style={styles.TextInputView}>
                        <TextInput keyboardType="number-pad" maxLength={1} />
                    </View>
                    <View style={styles.TextInputView}>
                        <TextInput />
                    </View>
                    <View style={styles.TextInputView}>
                        <TextInput keyboardType="number-pad" maxLength={1} />
                    </View>
                </View>
                <View style={styles.ResendOTP} >
                    <Text style={styles.ResendOTPText}>Didn't receive the otp</Text>
                    <Text style={styles.ResendOTPButton}>RESEND OTP <Text style={{ color: "grey" }}>in 15 sec</Text></Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <View style={styles.signInbutton}>
                            <Text style={styles.signInText}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default OTP;

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        alignSelf: 'center'
    },
    imageSize: {
        width: 350,
        height: 350,
        resizeMode: "cover",
    },
    Alignment1: {

    },
    MobileNoTextAlignment: {
        textAlign: 'center',
        color: "black",
        marginBottom: 50,
        fontSize: 19
    },
    FourDigitCodeAlignment: {
        textAlign: 'center',
        color: "grey",
        marginBottom: 10,
        marginTop: -40
    },
    TouchableButton: {
        flexDirection: "row",
        justifyContent: "center"
    },
    MobileNoText: {
        textAlign: 'center',
        color: "grey",
    },
    MobileNoChangeText: {
        color: "#eec06b"
    },
    OtpInput: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 70,
    },
    TextInputView: {
        borderBottomWidth: 1,
        width: 50,
        borderColor: "#eec06b",
    },
    ResendOTP: {
        flexDirection: "column"
    },
    ResendOTPText: {
        textAlign: 'center',
        color: "grey",
        marginBottom: 0,
        marginTop: 140
    },
    ResendOTPButton: {
        textAlign: 'center',
        color: "#eec06b",
        marginBottom: 20
    },
    signInbutton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 60,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    signInText: {
        fontSize: 20,
        color: "black",
    },
})