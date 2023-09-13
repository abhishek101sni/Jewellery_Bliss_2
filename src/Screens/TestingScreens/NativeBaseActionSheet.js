

import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import { Actionsheet, useDisclose, Box } from "native-base";


const NativeBaseActionSheet = ({ navigation }) => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={styles.logoAlignment}>
                        <Image source={require("../assets/logo.png")} style={styles.logoSize} />
                    </View>

                    <View style={styles.LogInTitle}>
                        <Text style={styles.LogInText}>Customise Your Order</Text>
                    </View>

                    <View style={styles.ActionSheet1}>
                        <TouchableOpacity onPress={onOpen} >
                            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ActionSheet3} imageStyle={{ borderRadius: 20 }}>
                                <Text style={{sfontSize: textScale(19), color: "black", marginLeft: moderateScale(0), fontFamily: "HurmeGeometricSans1SemiBold",
                                }}>PRODUCTS</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>


                    <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
                        <Actionsheet.Content>
                            <Box w="115%" h={450} px={4}>
                                <ScrollView horizontal>
                                    <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
                                        <View style={styles.ActionSheet1}>
                                            <TouchableOpacity >
                                                <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ActionSheet3} imageStyle={{ borderRadius: 20 }}>
                                                    <Text style={styles.ActionSheet2}>Chains</Text>
                                                </ImageBackground>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.ActionSheet1}>
                                            <TouchableOpacity >
                                                <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ActionSheet3} imageStyle={{ borderRadius: 20 }}>
                                                    <Text style={styles.ActionSheet2}>Plain Jewellery</Text>
                                                </ImageBackground>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.ActionSheet1}>
                                            <TouchableOpacity >
                                                <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ActionSheet3} imageStyle={{ borderRadius: 20 }}>
                                                    <Text style={styles.ActionSheet2}>Casting Cz Jewellery</Text>
                                                </ImageBackground>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.ActionSheet1}>
                                            <TouchableOpacity >
                                                <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ActionSheet3} imageStyle={{ borderRadius: 20 }}>
                                                    <Text style={styles.ActionSheet2}>Casting jewellery</Text>
                                                </ImageBackground>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ScrollView>
                                <View>
                                    <Text>1</Text>
                                </View>
                            </Box>
                        </Actionsheet.Content>
                    </Actionsheet>

                    <View style={{ marginVertical: 2 }}>
                        <TextInput
                            style={styles.MobileNoInput}
                            autoCapitalize="words"
                            keyboardType='default'
                            autoCorrect={false}
                            placeholder="Product"
                            placeholderTextColor="#C7C7CD"

                        // onChangeText={(text) => setMobile(text)}
                        />
                        <TextInput
                            style={styles.Inputs}
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder="Purity"
                            placeholderTextColor="#C7C7CD"
                        // onChangeText={(text) => setPassword(text)}
                        />
                        <TextInput
                            style={styles.Inputs}
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder="Weight"
                            placeholderTextColor="#C7C7CD"
                        // onChangeText={(text) => setPassword(text)}
                        />
                        <TextInput
                            style={styles.Inputs}
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder="Length"
                            placeholderTextColor="#C7C7CD"
                        // onChangeText={(text) => setPassword(text)}
                        />
                        <TextInput
                            style={styles.Inputs}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='numeric'
                            placeholder="Size"
                            placeholderTextColor="#C7C7CD"
                        // onChangeText={(text) => setPassword(text)}
                        />
                        <TextInput
                            style={styles.Inputs}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='numeric'
                            placeholder="Quantity"
                            placeholderTextColor="#C7C7CD"
                        // onChangeText={(text) => setPassword(text)}
                        />
                    </View>

                    <View style={styles.logInButtonAlignment}>
                        <TouchableOpacity >
                            <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                                <Text style={styles.logInButtonText}>SUBMIT</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>



            {/* BottomTabNavigator */}
            <ImageBackground source={require('../assets/CompressedTexture3.jpg')} imageStyle={{}} style={{ backgroundColor: 'pink', height: moderateScaleVertical(60), width: '100%', alignSelf: 'center', marginTop: 800, position: "absolute" }}>
                <View
                    style={{
                        marginTop: moderateScaleVertical(15),
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Drawer');
                        }}>
                        <Image
                            source={require('../assets/home.png')}
                            style={{
                                width: moderateScale(35),
                                height: moderateScaleVertical(35),
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('cart');
                        }}>
                        <Image
                            source={require('../assets/cart.png')}
                            style={{
                                width: moderateScale(35),
                                height: moderateScaleVertical(35),
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default NativeBaseActionSheet;

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
        marginBottom: moderateScaleVertical(-55),
    },
    logoSize: {
        width: moderateScale(200),
        height: moderateScaleVertical(200),
    },
    LogInTitle: {
        flex: 0.5,
        fontSize: textScale(18),
        alignSelf: 'center',
        marginTop: moderateScaleVertical(0),
        marginBottom: moderateScaleVertical(10),
        fontFamily: "HurmeGeometricSans1",
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
        fontFamily: "HurmeGeometricSans1",

    },
    Inputs: {
        alignSelf: 'center',
        fontSize: textScale(13),
        color: "black",
        width: '80%',
        marginTop: moderateScaleVertical(10),
        marginBottom: moderateScaleVertical(5),
        borderBottomWidth: moderateScale(1.5),
        borderBottomColor: "#bc9954",
        paddingBottom: moderateScaleVertical(0),
        paddingLeft: moderateScale(0),
        fontFamily: "HurmeGeometricSans1",
        marginBottom: moderateScaleVertical(5)
    },
    logInButtonAlignment: {
        alignItems: "center",
        marginRight: 10,
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


    // ActionSheet
    ActionSheet1: {
        alignItems: "center",
        marginRight: 10,
    },
    ActionSheet2: {
        fontSize: textScale(13),
        color: "black",
        marginLeft: moderateScale(0),
        fontFamily: "HurmeGeometricSans1SemiBold",


    },
    ActionSheet3: {
        alignItems: "center",
        // padding: moderateScale(9),
        width: moderateScale(150),
        height: moderateScaleVertical(35),
        justifyContent: 'center',
        // marginTop: moderateScaleVertical(40),
    },



});

