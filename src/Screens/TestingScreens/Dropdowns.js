import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import { Actionsheet, useDisclose, Box } from "native-base";
import { MultipleSelectList } from "react-native-dropdown-select-list"
import { SelectList } from "react-native-dropdown-select-list"


const Dropdowns = ({ navigation }) => {

    const [selected, setSelected] = useState([])
    const [category, setCategory] = useState("ch")
    const [subcategory, setSubCategory] = useState([])
    // const [selected2, setSelected2] = useState("")

    const data = [
        { key: "1", value: "CHAINS", disabled: true },
        { key: "2", value: "Silky chains", },
        { key: "3", value: "Indo chains", },
        { key: "4", value: "Rodum chains", },
        { key: "5", value: "Kaju Katli chains", },
        { key: "6", value: "Machine Chains", },
        { key: "7", value: "Solid Nawabi chains", },
        { key: "8", value: "Hollow Nawabi chains", },
        { key: "9", value: "Madrasi chains", },
        { key: "10", value: "Handmade chains", },
        { key: "11", value: "Hollow chains", },
        { key: "12", value: "Choco chains", },
        { key: "13", value: "Indo Choco chains", },
        { key: "14", value: "PLAIN JEWELLERY", disabled: true },
        { key: "15", value: "Sets", },
        { key: "16", value: "Mangal Sutra", },
        { key: "17", value: "Tops", },
        { key: "18", value: "Handmade Ladies Rings", },
        { key: "19", value: "Handmade Gents Rings", },
        { key: "20", value: "Bracelets", },
        { key: "21", value: "Rajkot Items", },
        { key: "22", value: "Long Sets", },
        { key: "23", value: "Choker Sets", },
        { key: "24", value: "Bangels", },
        { key: "25", value: "Kade", },
        { key: "26", value: "Gold Pendents", },
        { key: "27", value: "CASTING JEWELLERY", disabled: true },
        { key: "28", value: "Ladies Rings" },
        { key: "29", value: "Gents Rings" },
        { key: "30", value: "Pendents" },
        { key: "31", value: "Tops" },
        { key: "32", value: "CASTING CZ JEWELLERY", disabled: true },
        { key: "33", value: "Necklace Sets" },
        { key: "34", value: "Mangal Sutra" },
        { key: "35", value: "Ladies Rings" },
        { key: "36", value: "Cocktail Rings" },
        { key: "37", value: "Ladies Solitaire Rings" },
        { key: "38", value: "Gents Rings" },
        { key: "39", value: "Gents Solitaire Rings" },
        { key: "40", value: "Tops Rings" },
        { key: "41", value: "Solitaire Rops" },
        { key: "42", value: "Pendent Sets" },
        { key: "43", value: "Solitaire Pendent Sets" },
        { key: "44", value: "Charms" },
        { key: "45", value: "Gold Pendents" },
        { key: "46", value: "Bracelets" },
        { key: "47", value: "Bali" },
    ]

    const Parentcategory = [
        { key: "ch", value: "Chains", },
        { key: "pj", value: "Plain Jewellery", },
        { key: "cj", value: "Casting Jewellery", },
        { key: "czj", value: "Casting CZ Category", },
    ]
    const Childcategory = {
        'ch': [
            { key: "1", value: "Chain 1" },
            { key: "2", value: "Chain 2" },
            { key: "3", value: "Chain 3", },
        ],
        'pj': [
            { key: "4", value: "plain Jwe 1" },
            { key: "5", value: "plain Jwe 2" },
            { key: "6", value: "plain Jwe 3", },
        ],
        'cj': [
            { key: "7", value: "casting Jwe 1" },
            { key: "8", value: "casting Jwe 2" },
            { key: "9", value: "casting Jwe 3", },
        ],
        'czj': [
            { key: "10", value: "casting cz Jwe 1" },
            { key: "11", value: "casting cz Jwe 2" },
            { key: "12", value: "casting cz Jwe 3", },
        ]
    }

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")} >
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={styles.logoAlignment}>
                        <Image source={require("../assets/logo.png")} style={styles.logoSize} />
                    </View>

                    <View style={styles.LogInTitle}>
                        <Text style={styles.LogInText}>Customise Your Order</Text>
                    </View>
                    <Text style={{ marginLeft: 40, marginTop: 20 }}>first dropdown</Text>
                    <View>
                        <SelectList
                            data={data}
                            fontFamily='HurmeGeometricSans1'
                            setSelected={setSelected}
                            boxStyles={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderRadius: 0, width: "90%", alignSelf: 'center', borderColor: "#bc9954", borderBottomWidth: moderateScale(1.5), width: "80%" }}
                            badgeTextStyles={{ color: "black", fontSize: textScale(30), paddingBottom: -25, paddingLeft: 0 }}
                            placeholder="Select product"
                            dropdownStyles={{ width: "80%", alignSelf: "center", height: 200, borderColor: "#bc9954", borderRadius: 2 }}
                            // search={false}
                            dropdownItemStyles={{ marginRight: 80 }}
                            dropdownTextStyles={{ fontSize: textScale(13) }}
                            disabledTextStyles={{ fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", color: "#bc9954" }}
                        />

                        <Text style={{ marginLeft: 40, marginTop: 20 }}>Second dropdown</Text>

                        <SelectList
                            data={Parentcategory}
                            setSelected={setCategory}
                            fontFamily='HurmeGeometricSans1'
                            boxStyles={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderRadius: 0, width: "90%", alignSelf: 'center', borderColor: "#bc9954", borderBottomWidth: moderateScale(1.5), width: "80%" }}
                            badgeTextStyles={{ color: "black", fontSize: textScale(30), paddingBottom: -25, paddingLeft: 0 }}
                            placeholder="Select category"
                            dropdownStyles={{ width: "80%", alignSelf: "center", height: 150, borderColor: "#bc9954", borderRadius: 2 }}
                            // search={false}
                            dropdownTextStyles={{ fontSize: textScale(13), fontFamily: "HurmeGeometricSans1SemiBold", color: "#bc9954" }}
                        />
                        <SelectList
                            data={Childcategory[category]}
                            setSelected={setSubCategory}
                            fontFamily='HurmeGeometricSans1'
                            boxStyles={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderRadius: 0, width: "90%", alignSelf: 'center', borderColor: "#bc9954", borderBottomWidth: moderateScale(1.5), width: "80%" }}
                            badgeTextStyles={{ color: "black", fontSize: textScale(30), paddingBottom: -25, paddingLeft: 0 }}
                            placeholder="Select subCategory"
                            dropdownStyles={{ width: "80%", alignSelf: "center", height: 130, borderColor: "#bc9954", borderRadius: 2 }}
                        // search={false}
                        />

                    </View>


                    <View>
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

export default Dropdowns;

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


