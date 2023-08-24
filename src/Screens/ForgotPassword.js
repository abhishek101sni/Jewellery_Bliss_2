// import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
// import React from 'react'
// import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

// const ForgotPassword = ({ navigation }) => {
//     return (
//         <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
//             <ScrollView>
//                 <View style={{ alignItems: "center" }}>
//                     <View style={{ alignItems: "center" }}>
//                         <Image source={require("../assets/logo.png")} style={{ width: moderateScale(300), height: moderateScaleVertical(300) }} />
//                     </View>
//                     <View style={{ marginTop: moderateScaleVertical(40), alignItems: "center" }}>
//                         <Text style={{ fontSize: textScale(23), marginBottom: moderateScaleVertical(15), color: "#bc9954" }}>Forgot your Password?</Text>
//                         <Text style={{ fontSize: textScale(15), fontFamily: "HurmeGeometricSans1", color: "#a4a4a4" }}>Enter your Email below to reset the Password</Text>
//                     </View>
//                     <View style={{ alignItems: "center" }}>
//                         <TextInput
//                             style={{ textAlign: "left", borderColor: "black", borderWidth: 2, width: moderateScale(370), borderRadius: 20, marginTop: moderateScaleVertical(30), alignItems: "center" }}
//                             // autoCapitalize
//                             // keyboardType='numeric'
//                             autoCorrect={false}
//                             placeholder="Enter your registered Email"

//                         />

//                         <TouchableOpacity onPress={() => { navigation.navigate('resetPass') }}>
//                             <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{ borderRadius: 20 }} style={{ width: moderateScale(370), height: moderateScaleVertical(55), borderRadius: 20, marginTop: 20 }}>
//                                 <Text style={{ textAlign: "center", justifyContent: "center", fontSize: textScale(20), marginTop: moderateScaleVertical(10), color: "black" }}>Send Email</Text>
//                             </ImageBackground>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </ScrollView>
//         </ImageBackground>
//     )
// }

// export default ForgotPassword

import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import axios from 'axios';


const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        try {
            const response = await axios.post(
                // 'http://localhost:5009/api/auth/forgotpassword',
                'https://bliss-app-backend-production.up.railway.app/api/auth/forgotpassword',
                {
                    email: `${email}`,
                }
            );
            console.log(email)
            console.log('Success', response.data);
        } catch (error) {
            console.error('API call error:', error);
        }
    };
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../assets/logo.png")} style={{ width: moderateScale(300), height: moderateScaleVertical(300) }} />
                    </View>
                    <View style={{ marginTop: moderateScaleVertical(40), alignItems: "center" }}>
                        <Text style={{ fontSize: textScale(23), marginBottom: moderateScaleVertical(15), color: "#bc9954" }}>Forgot your Password?</Text>
                        <Text style={{ fontSize: textScale(15), fontFamily: "HurmeGeometricSans1", color: "#a4a4a4" }}>Enter your Email below to reset the Password</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TextInput
                            style={{ textAlign: "left", borderColor: "black",paddingLeft:20, borderWidth: 2, width: moderateScale(370), borderRadius: 20, marginTop: moderateScaleVertical(30), alignItems: "center" }}
                            autoCorrect={false}
                            placeholder="Enter your registered Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}

                        />

                        <TouchableOpacity onPress={handleForgotPassword} >
                            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} imageStyle={{ borderRadius: 20 }} style={{ width: moderateScale(200), height: moderateScaleVertical(55), borderRadius: 20, marginTop: 20 }}>
                                <Text style={{ textAlign: "center", justifyContent: "center", fontSize: textScale(20), marginTop: moderateScaleVertical(10), color: "black" }}>Send Email</Text>
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

