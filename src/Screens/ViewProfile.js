import { View, Text, StyleSheet, ScrollView, Image, ImageBackground , SafeAreaView} from 'react-native';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const ViewProfile = () => {

    const { userInfo } = useContext(AuthContext);
    const userDetails = useSelector((state) => state.userDetailsData);

    return (
        <SafeAreaView style={{flex:1}}>
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <ScrollView>
                <View style={{ alignItems: "center", flexDirection: "column" }}>
                    <Image source={require("../assets/dp2.jpg")} style={{ width: moderateScale(140), height: moderateScaleVertical(140), borderRadius: 100, marginTop: moderateScaleVertical(20) }} />
                    <Text style={{ fontSize: textScale(25), marginTop: moderateScaleVertical(20), color: "black", fontFamily: "HurmeGeometricSans1SemiBold" }}>{userInfo?.name}</Text>
                </View>

                <View style={{ borderWidth: 2, backgroundColor: '#696969', borderRadius: 20, width: '99%', marginBottom: moderateScale(20), alignSelf: 'center', marginTop: moderateScaleVertical(15) }}>
                    <View style={{
                        marginTop: moderateScaleVertical(10),
                        marginLeft: moderateScale(23)
                    }}>
                        <Text style={{ fontSize: textScale(15), color: "white", color: "#eec06b", fontSize: textScale(17), fontFamily: "HurmeGeometricSans1SemiBold" }}>Personal Information</Text>
                    </View>

                    <View style={{ marginBottom: moderateScale(20), alignItems: "center" }}>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>Name : {userInfo?.name} </Text>
                        </View>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>Phone No : {userInfo?.mobile} </Text>
                        </View>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>Email : {userInfo?.email}</Text>
                        </View>

                    </View>
                </View>

                <View style={{ borderWidth: 2, backgroundColor: '#696969', borderRadius: 20, width: '99%', marginBottom: moderateScaleVertical(20), alignSelf: 'center', marginTop: moderateScaleVertical(15) }}>
                    <View style={{
                        marginTop: moderateScaleVertical(10),
                        marginLeft: moderateScale(23),

                    }}>
                        <Text style={{ fontSize: textScale(15), color: "white", color: "#eec06b", fontSize: textScale(17), fontFamily: "HurmeGeometricSans1SemiBold" }}>Business Details</Text>
                    </View>
                    <View style={{ marginBottom: moderateScale(20), alignItems: "center" }}>
                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>Brand name : {userDetails.brandName} </Text>
                        </View>

                        <View style={styles.Inputs}>

                            <Text style={styles.inputsInside}>Address : {userDetails.address}</Text>
                        </View>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>Pincode : {userDetails.pincode}</Text>
                        </View>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>Locality : {userDetails.locality}</Text>
                        </View>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>City : {userDetails.city}</Text>
                        </View>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>State : {userDetails.state}</Text>
                        </View>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>GST No. : {userDetails.gstNo}</Text>
                        </View>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>Store person name : {userDetails.storePersonName}</Text>
                        </View>

                        <View style={styles.Inputs}>
                            <Text style={styles.inputsInside}>Store contact no : {userDetails.contactNo}</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default ViewProfile;

const styles = StyleSheet.create({
    Inputs: {
        flexDirection: "row",
        marginHorizontal: moderateScale(10),
        backgroundColor: "white",
        width: "90%",
        padding: 10,
        marginTop: moderateScaleVertical(20),
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
    },
    inputsInside: {
        fontSize: textScale(15),
        color: "black",
        textAlign: "left",
        justifyContent: "flex-start",
        fontFamily:"HurmeGeometricSans1SemiBold"
    },
})