import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { AuthContext } from '../Screens/AuthContext';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const TabContent = (props) => {
    const { logout, userInfo } = useContext(AuthContext);
    return (
        // <ImageBackground style={styles.BackgroundImage} source={require("../assets/CompressedTexture3.jpg")}>
        <View style={{ backgroundColor: "blue", height: 50, width: 90 }}></View>
        // </ImageBackground>
    )
}

export default TabContent;


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
        height: moderateScaleVertical(50)
    },
    ViewProfileAlignment: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: moderateScaleVertical(25)
    },
    ViewProfileDp: {
        width: moderateScale(170),
        height: moderateScaleVertical(170),
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
        fontWeight: "500",
        // color: "#F0F0F0",
        color: "#181818",
        textDecorationLine: 'underline'
    },

    DrawerContentTouch: {
        marginVertical: moderateScaleVertical(7),
        flexDirection: "row",
        marginLeft: moderateScale(1),
        // marginHorizontal: moderateScale(20),
        // justifyContent: "space-around"
    },
    OurProductIcon: {
        width: moderateScale(25),
        height: moderateScaleVertical(25),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(12)
    },
    ManageOrderIcon: {
        width: moderateScale(25),
        height: moderateScaleVertical(25),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(12)
    },
    WastageChartIcon: {
        width: moderateScale(25),
        height: moderateScaleVertical(25),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(17)
    },
    ServAvailIcon: {
        width: moderateScale(25),
        height: moderateScaleVertical(25),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(12)
    },
    AboutUsIcon: {
        width: moderateScale(25),
        height: moderateScaleVertical(25),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(15)
    },
    PrivacyPolicyIcon: {
        width: moderateScale(25),
        height: moderateScaleVertical(25),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(15)
    },
    TermsAndCondIcon: {
        width: moderateScale(25),
        height: moderateScaleVertical(25),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(15)
    },
    DrawerContentIcon: {
        width: moderateScale(25),
        height: moderateScaleVertical(25),
        tintColor: "#F0F0F0"
    },
    DrawerContentTitle: {
        textAlign: "center",
        justifyContent: "center",
        marginTop: moderateScaleVertical(4),
        // color: "#F0F0F0",
        color: "#181818",
        fontSize: textScale(15),
        marginLeft: moderateScale(20),
        fontWeight: "500"
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
    //     color: "black",
    //     padding: 5,
    //     borderRadius: 10
    // },
})
