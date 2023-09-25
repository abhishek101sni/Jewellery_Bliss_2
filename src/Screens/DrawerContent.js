import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native'
import { AuthContext } from '../Screens/AuthContext';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import Icon from "react-native-vector-icons/FontAwesome"

const DrawerContent = (props) => {
    const { logout, userInfo } = useContext(AuthContext);
    return (
        <ImageBackground style={styles.BackgroundImage} source={require("../assets/CompressedTexture3.jpg")}>
            {/* //  <View style={{ flex: 1, backgroundColor: "#eec06b",}}>  */}
            <ScrollView>
                <View style={{}}>
                    <View style={styles.ViewProfileAlignment} >
                        <Image style={styles.ViewProfileDp} source={require("../assets/dp2.jpg")} />
                        <TouchableOpacity style={styles.ViewProfileDpTouch} onPress={() => { props.navigation.navigate("viewprofile") }}>
                            <Text style={styles.ViewProfileText}>View Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("our") }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(10) }}>
                            <Image source={require("../assets/drawerIcons/ourProducts.png")} style={styles.OurProductIcon} />
                            <Text style={styles.DrawerContentTitle}>Our Products</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("Manage") }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(10) }}>
                            <Image source={require("../assets/drawerIcons/manageOrders.png")} style={styles.ManageOrderIcon} />
                            <Text style={styles.DrawerContentTitle}>Manage Order</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("pricelist") }} >
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(10), }}>
                            <Image source={require("../assets/drawerIcons/coins.png")} style={styles.WastageChartIcon} />
                            <Text style={styles.DrawerContentTitle}>Wastage Chart</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("GoldSilverPrice") }} >
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(10), }}>
                            <Image source={require("../assets/drawerIcons/rupee.png")} style={styles.WastageChartIcon} />
                            <Text style={styles.DrawerContentTitle}>Live Price</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("ServiceAvailable") }} >
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(10), }}>
                            <Image source={require("../assets/drawerIcons/serviceAvailable.png")} style={styles.ServAvailIcon} />
                            <Text style={styles.DrawerContentTitle}>Service Available</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("about") }} >
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(10), }}>
                            {/* <Image source={require("../assets/drawerIcons/aboutus.png")} style={styles.AboutUsIcon} /> */}
                            <Text style={styles.DrawerContentTitle}>About Us</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("privacypolicy") }} >
                        <Image source={require("../assets/drawerIcons/privacypolicy.png")} style={styles.PrivacyPolicyIcon} />
                        <Text style={styles.DrawerContentTitle}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("tnc") }} >
                        <Image source={require("../assets/drawerIcons/termsandconditions.png")} style={styles.TermsAndCondIcon} />
                        <Text style={styles.DrawerContentTitle}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.line}></View>
                <View style={{ marginTop: moderateScaleVertical(10), flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(50) }}>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL("https://www.facebook.com/jewellerybliss2023?mibextid=ZbWKwL");
                    }}>
                        <Image source={require("../assets/SocialMediaIcons/facebookColored.png")} style={{ width: moderateScale(33.5), marginTop: moderateScaleVertical(3), height: moderateScaleVertical(34) }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                        Linking.openURL("https://www.instagram.com/");
                    }}>
                        <Image source={require("../assets/SocialMediaIcons/instagramColored.png")} style={{ width: moderateScale(33.5), marginTop: moderateScaleVertical(3), height: moderateScaleVertical(34) }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { Linking.openURL('whatsapp://send?text=Hii Jwellery Bliss&phone=9654511612') }}>
                        <Image source={require("../assets/SocialMediaIcons/whatsappColored.png")} style={{ width: moderateScale(33.5), height: moderateScaleVertical(34), marginTop: moderateScaleVertical(2) }} />
                    </TouchableOpacity>
                </View>



                <View style={{ marginTop: moderateScaleVertical(60), marginBottom: moderateScaleVertical(60) }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(90) }} onPress={logout}>
                        <Image source={require("../assets/logoutIcon.png")} style={{ width: moderateScale(22), height: moderateScaleVertical(24), }} />
                        <Text style={{ fontSize: textScale(16), color: "#181818", fontFamily: "HurmeGeometricSans1Bold" }}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            {/* </View> */}
        </ImageBackground>
    )
}

export default DrawerContent;


const styles = StyleSheet.create({
    line: {
        marginTop: moderateScaleVertical(10),
        width: "100%",
        height: moderateScaleVertical(1.5),
        backgroundColor: "#d6ac60",
        alignSelf: 'center',
        marginBottom: moderateScaleVertical(10),
    },
    BackgroundImage: {
        flex: 1,
        // width: moderateScale(192),
        height: moderateScaleVertical(900)
    },
    ViewProfileAlignment: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: moderateScaleVertical(60),
        marginBottom: moderateScaleVertical(20)
    },
    ViewProfileDp: {
        width: moderateScale(120),
        height: moderateScaleVertical(120),
        borderRadius: 90
    },
    ViewProfileDpTouch: {
        marginTop: moderateScaleVertical(20),
        flexDirection: "row"
    },
    // ViewProfileTextIcon: {
    //     width: moderateScale(13),
    //     height: moderateScaleVertical(13),
    //     tintColor: "#F0F0F0"

    // },
    ViewProfileText: {
        fontSize: 14,
        // fontWeight: "700",
        // color: "#F0F0F0",
        color: "#181818",
        textDecorationLine: 'underline',
        fontFamily: "HurmeGeometricSans1SemiBold",
    },

    DrawerContentTouch: {
        marginVertical: moderateScaleVertical(3),
        flexDirection: "row",
        marginLeft: moderateScale(1),
        // marginHorizontal: moderateScale(20),
        // justifyContent: "space-around"
    },
    OurProductIcon: {
        width: moderateScale(42),
        height: moderateScaleVertical(42),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(10)
    },
    ManageOrderIcon: {
        width: moderateScale(40),
        height: moderateScaleVertical(41),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(13)
    },
    WastageChartIcon: {
        width: moderateScale(41),
        height: moderateScaleVertical(41),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(12)
    },
    ServAvailIcon: {
        width: moderateScale(40),
        height: moderateScaleVertical(41),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(12)
    },
    AboutUsIcon: {
        width: moderateScale(40),
        height: moderateScaleVertical(40),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(15)
    },
    PrivacyPolicyIcon: {
        width: moderateScale(40),
        height: moderateScaleVertical(40),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(23)
    },
    TermsAndCondIcon: {
        width: moderateScale(40),
        height: moderateScaleVertical(40),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(24)
    },
    DrawerContentIcon: {
        width: moderateScale(25),
        height: moderateScaleVertical(25),
        tintColor: "#F0F0F0"
    },
    DrawerContentTitle: {
        textAlign: "center",
        justifyContent: "center",
        marginTop: moderateScaleVertical(6),
        color: "#181818",
        fontSize: textScale(16.5),
        marginLeft: moderateScale(20),
        // fontWeight: "700",
        // fontFamily:"HurmeGeometricSans1"
        // fontFamily:"HurmeGeometricSans1Bold"
        fontFamily: "HurmeGeometricSans1SemiBold"
    }


    // drawerContent: {
    //     flex: 0,
    // },
    // userInfoSection: {
    //     paddingLeft: moderateScale(20),
    // },
    // ProfileSection: {
    //     alignItems: "center",
    //     marginTop: moderateScaleVertical(10),
    //     marginRight: moderateScale(27),
    // },
    // displayPicture: {
    //     width: moderateScale(150),
    //     height: moderateScaleVertical(150),
    //     borderRadius: 80
    // },
    // ProfileNameAlignment: {
    //     alignItems: "center",
    // },
    // ProfileNameText: {
    //     marginTop: moderateScaleVertical(1),
    //     fontWeight: "500",
    //     textAlign: "center",
    //     fontSize: textScale(20),
    //     fontFamily: "Poppins-Medium"
    // },
    // bottomDrawerSection: {
    //     marginTop: moderateScaleVertical(10),
    //     marginBottom: 15,
    // },
    // ViewProfile: {
    //     // fontSize: textScale(12),
    //     // textAlign: "center",
    //     marginTop: moderateScaleVertical(0),
    //     // backgroundColor: '#000000'
    // },

    // SocialMediaIconsAlignment: {
    //     flexDirection: "row",
    //     marginVertical: moderateScaleVertical(40),
    //     marginHorizontal: moderateScale(25),
    //     alignSelf: "center"
    // },
    // SocialMediaIconsSize: {
    //     width: moderateScale(40),
    //     height: moderateScaleVertical(40),
    //     resizeMode: "cover",
    //     borderRadius: 40,
    //     marginLeft: moderateScale(10),
    //     backgroundColor: "white",
    //     tintColor: '#eec06b'
    // },
    // LogoutStyle: {
    //     alignSelf: "center",
    //     marginBottom: moderateScaleVertical(20)
    // },
    // logoutText: {
    //     fontWeight: "bold",
    //     fontSize: textScale(20),
    //     padding: 5,
    //     borderRadius: 10
    // },
})
