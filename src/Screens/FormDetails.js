import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from "react-native";
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import { AuthContext } from "./AuthContext";
import { fillDetails } from "../redux/Formdetails/formDetails.action-creator";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { getUserDetailsActionCreator } from '../redux/Formdetails/formDetails.action-creator';

const FormDetails = ({ navigation }) => {
    const { userToken } = useContext(AuthContext);
    const userDetails = useSelector((state) => state.userDetails);
    const dispatch = useDispatch();
    const { addUserDetails } = useContext(AuthContext);
    const [brandName, setBrandName] = useState(null);
    const [address, setAddress] = useState(null);
    const [pincode, setPincode] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [locality, setLocality] = useState(null);
    const [gstNo, setGstno] = useState(null);
    const [storePersonName, setstorePersonName] = useState(null);
    const [contactNo, setContactNo] = useState(null);
    const [gpsLocation, setGpsLocation] = useState({
        latitude: 37.779, longitude: -122.4194
    });

    // useEffect(() => {
    //     if (!userToken) {
    //         return;
    //     }
    //     if (userDetails) {
    //         console.log("hello");
    //         navigation.navigate('tabs');
    //         return;
    //     }
    // }, [userToken, userDetails]);

    const submitData = () => {
        const userDetails = {
            brandName,
            address,
            pincode,
            city,
            locality,
            state,
            gstNo,
            storePersonName,
            contactNo,
            gpsLocation,
        };
        dispatch(fillDetails(userToken, userDetails));
        navigation.navigate('Drawer');
    };
    useEffect(() => {
        if (userDetails && !userDetails.brandName) {
            dispatch(getUserDetailsActionCreator(userInfo._id, userToken));
            navigation.navigate('Drawer');
            console.log(userDetails);
        }
    }, []);

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <ScrollView>

                <TouchableOpacity style={styles.SkipButton} onPress={() => navigation.navigate('Drawer')}>
                    <Text style={styles.SkipButtonText}>Skip&nbsp;{">>"}</Text>
                </TouchableOpacity>

                <View style={styles.logoAlignment}>
                    <Image source={require("../assets/logo.png")} style={styles.logoSize} />
                </View>

                <View style={{ flex: 1, marginTop: 60 }}>

                    <View style={styles.BusinessDetailsTitle}>
                        <Text style={styles.BusinessDetailsText}>Business Details{userDetails?.brandName}</Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.Brandnameinputbottom}
                            autoCapitalize
                            autoCorrect={false}
                            placeholder="Brand name"
                            placeholderTextColor="#C7C7CD"
                            onChangeText={setBrandName}
                        />
                        <TextInput
                            style={styles.Addressinputbottom}
                            autoCapitalize
                            autoCorrect={false}
                            placeholder="Address"
                            placeholderTextColor="#C7C7CD"
                            onChangeText={setAddress}
                        />

                        <View style={styles.span}>
                            <TextInput
                                style={styles.Pincodeinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Pincode"
                                keyboardType='numeric'
                                placeholderTextColor="#C7C7CD"
                                onChangeText={setPincode}
                            />

                            <TextInput
                                style={styles.Localityinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Locality"
                                placeholderTextColor="#C7C7CD"
                                onChangeText={setLocality}
                            />
                        </View>

                        <View style={styles.span}>
                            <TextInput
                                style={styles.Cityinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="City"
                                placeholderTextColor="#C7C7CD"
                                onChangeText={setCity}
                            />


                            <TextInput
                                style={styles.Stateinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="State"
                                placeholderTextColor="#a4a4a4"
                                onChangeText={setState}
                            />
                        </View>

                        <TextInput
                            style={styles.GSTinputbottom}
                            autoCapitalize
                            autoCorrect={false}
                            placeholder="GST no."
                            keyboardType='numeric'
                            placeholderTextColor="#C7C7CD"
                            onChangeText={setGstno}
                        />

                        <View style={styles.span}>
                            <TextInput
                                style={styles.StorePersonNameinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Store Person Name"
                                placeholderTextColor="#C7C7CD"
                                onChangeText={setstorePersonName}
                            />

                            <TextInput
                                style={styles.contactnoinputbottom}
                                autoCapitalize
                                autoCorrect={false}
                                placeholder="Contact no."
                                keyboardType='numeric'
                                placeholderTextColor="#C7C7CD"
                                onChangeText={setContactNo}
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={submitData} style={styles.SubmitButtonAlignment}>
                        <ImageBackground source={require("../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                            <Text style={styles.SubmitButtonText}>SUBMIT</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <View style={{ position: "absolute", top: height - 6 }}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={{
                    borderWidth: 3,
                    width: 431,
                }} />
            </View>
        </ImageBackground>
    );
};

export default FormDetails;

const styles = StyleSheet.create({
    SkipButton: {
        alignItems: 'flex-end',
        marginTop: moderateScaleVertical(10),
        marginLeft: moderateScale(-20),
        width: '100%',
    },
    SkipButtonText: {
        color: "#bc9954",
        fontSize: textScale(15),
        fontWeight: 'bold',
    },
    logoAlignment: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: moderateScaleVertical(-35),
    },
    logoSize: {
        width: moderateScale(300),
        height: moderateScaleVertical(300),
    },
    BusinessDetailsTitle: {
        alignSelf: 'center'
    },
    BusinessDetailsText: {
        fontSize: 20,
        marginTop: moderateScaleVertical(-50),
        textAlign: "center",
        color: "black",
        fontFamily: "Poppins-Medium"
    },
    Brandnameinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        lineHeight: 15,
        marginTop: moderateScaleVertical(0),
        borderBottomWidth: moderateScaleVertical(1),
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "80%",
        paddingBottom: 0,
        paddingLeft: 0,
        alignSelf: 'center',
    },
    Addressinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        lineHeight: 25,
        marginTop: moderateScaleVertical(15),
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "80%",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
        alignSelf: 'center',
    },
    Pincodeinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        lineHeight: 25,
        marginTop: moderateScaleVertical(15),
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
    },
    Localityinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: moderateScaleVertical(15),
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
    },
    Cityinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: moderateScaleVertical(15),
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
    },
    Stateinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: moderateScaleVertical(15),
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
    },
    GSTinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: moderateScaleVertical(15),
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "80%",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
        alignSelf: 'center',
    },
    StorePersonNameinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: moderateScaleVertical(15),
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
    },
    contactnoinputbottom: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: moderateScaleVertical(15),
        lineHeight: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: "35%",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
    },
    SubmitButtonAlignment: {
        alignItems: "center",
        fontFamily: "Poppins-Medium",
        marginBottom: moderateScaleVertical(10),
    },
    SubmitButtonText: {
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

    span: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 0,
    },
});
