import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackgroundComponent, ImageBackground } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const ViewProfile = () => {

    const { userInfo } = useContext(AuthContext);
    const userDetails = useSelector((state) => state.userDetailsData);

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            {/* <View style={{ backgroundColor: "#eec06b" }}> */}
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../assets/dp2.jpg")} style={{ width: moderateScale(140), height: moderateScaleVertical(140), borderRadius: 100, marginTop: moderateScaleVertical(20) }} />
                    <Text style={{ fontSize: textScale(25), marginTop: moderateScaleVertical(20), fontWeight: "bold", color: "black" }}>{userInfo?.name}</Text>
                </View>

                {/* -------------- */}
                <View style={{ borderWidth: 2, backgroundColor: '#696969', borderRadius: 20, width: '99%', marginBottom: moderateScale(20), alignSelf: 'center', marginTop: moderateScaleVertical(15) }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        width: "50%",
                        padding: 10,
                        marginLeft: moderateScale(20),

                    }}>
                        <Text style={{ fontSize: textScale(15), color: "white", color: "#eec06b", fontSize: textScale(17), fontWeight: 600 }}>Personal Information</Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(10),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,

                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Name : {userInfo?.name}</Text>
                        <Text style={{ fontSize: textScale(15), }}></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>

                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Mobile No : {userInfo?.mobile}</Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        marginBottom: moderateScaleVertical(30),
                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Email : {userInfo?.email}</Text>
                        <Text style={{ fontSize: textScale(15) }}></Text>
                    </View>

                </View>

                <View style={{ borderWidth: 2, backgroundColor: '#696969', borderRadius: 20, width: '99%', marginBottom: moderateScaleVertical(20), alignSelf: 'center', marginTop: moderateScaleVertical(15) }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        width: "50%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        marginTop: moderateScaleVertical(20),
                        marginLeft: moderateScale(20),

                    }}>
                        <Text style={{ fontSize: textScale(20), color: "white", color: "#eec06b", fontWeight: 600 }}>Business Details</Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(10),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,

                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Brand name : {userDetails.brandName} </Text>
                        <Text style={{ fontSize: textScale(15), }}></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>

                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Address : {userDetails.address}</Text>
                        <Text style={{ fontSize: textScale(15), }}></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Pincode : {userDetails.pincode}</Text>
                        <Text style={{ fontSize: textScale(15) }}></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Locality : {userDetails.locality}</Text>
                        <Text style={{ fontSize: textScale(15) }}></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>City : {userDetails.city}</Text>
                        <Text style={{ fontSize: textScale(15), }}></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>State : {userDetails.state}</Text>
                        <Text style={{ fontSize: textScale(15), }}></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>GST No. : {userDetails.gstNo}</Text>
                        <Text style={{ fontSize: textScale(15) }}></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Store person name : {userDetails.storePersonName}</Text>
                        <Text style={{ fontSize: textScale(15) }}></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        paddingBottom: moderateScaleVertical(10),
                        shadowOpacity: 80,
                        elevation: 15,
                        marginTop: moderateScaleVertical(20),
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        marginBottom: 40
                    }}>
                        <Text style={{ fontSize: textScale(15), color: "black", fontWeight: "bold", textAlign: "left", justifyContent: "flex-start" }}>Store contact no : {userDetails.contactNo}</Text>
                        <Text style={{ fontSize: textScale(15), }}></Text>
                    </View>

                </View>

            </ScrollView>
            {/* </View> */}
        </ImageBackground>
    )
}

export default ViewProfile