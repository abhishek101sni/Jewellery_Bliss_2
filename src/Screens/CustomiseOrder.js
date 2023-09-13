import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import { SelectList } from "react-native-dropdown-select-list"
import axios from 'axios';

const CustomiseOrder = ({ navigation }) => {

  // const [category, setCategory] = useState("ch")
  // const [subcategory, setSubCategory] = useState([])
  const [category, setCategory] = useState(null)
  const [subcategory, setSubCategory] = useState(null)
  const [purity, setPurity] = useState(null)
  const [weight, setWeight] = useState(null)
  const [length, setLength] = useState(null)
  const [size, setSize] = useState(null)
  const [quantity, setQuantity] = useState(null)

  const handleSubmit = async () => {
    try {
      const data = {
        category,
        subcategory,
        purity: purity.toString(),
        weight: weight.toString(),
        length,
        size,
        quantity,
      };
      // console.log(`dataaaaaaaaaaaaaaaaaaaaaaa`,data);
      const response = await axios.post('https://jewellery-bliss.onrender.com/api/customorders/add', data);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };




  const Parentcategory = [
    { key: "ch", value: "Chains", },
    { key: "pj", value: "Plain Jewellery", },
    { key: "cj", value: "Casting Jewellery", },
    { key: "czj", value: "Casting CZ Jwellery", },
  ]
  const Childcategory = {
    'ch': [
      { key: "1", value: "Silky chains", },
      { key: "2", value: "Indo chains", },
      { key: "3", value: "Rodium chains", },
      { key: "4", value: "Kaju Katli chains", },
      { key: "5", value: "Machine Chains", },
      { key: "6", value: "Solid Nawabi chains", },
      { key: "7", value: "Hollow Nawabi chains", },
      { key: "8", value: "Madrasi chains", },
      { key: "9", value: "Handmade chains", },
      { key: "10", value: "Hollow chains", },
      { key: "11", value: "Choco chains", },
      { key: "12", value: "Indo Choco chains", },
    ],
    'pj': [
      { key: "13", value: "Silky chains", },
      { key: "14", value: "Indo chains", },
      { key: "15", value: "Rodum chains", },
      { key: "16", value: "Kaju Katli chains", },
      { key: "17", value: "Machine Chains", },
      { key: "18", value: "Solid Nawabi chains", },
      { key: "19", value: "Hollow Nawabi chains", },
      { key: "20", value: "Madrasi chains", },
      { key: "21", value: "Handmade chains", },
      { key: "22", value: "Hollow chains", },
      { key: "23", value: "Choco chains", },
      { key: "24", value: "Indo Choco chains", },
    ],
    'cj': [
      { key: "25", value: "Ladies Rings" },
      { key: "26", value: "Gents Rings" },
      { key: "27", value: "Pendents" },
      { key: "28", value: "Tops" },
    ],
    'czj': [
      { key: "29", value: "Necklace Sets" },
      { key: "30", value: "Mangal Sutra" },
      { key: "31", value: "Ladies Rings" },
      { key: "32", value: "Cocktail Rings" },
      { key: "33", value: "Ladies Solitaire Rings" },
      { key: "34", value: "Gents Rings" },
      { key: "35", value: "Gents Solitaire Rings" },
      { key: "36", value: "Tops Rings" },
      { key: "37", value: "Solitaire Rops" },
      { key: "38", value: "Pendent Sets" },
      { key: "39", value: "Solitaire Pendent Sets" },
      { key: "40", value: "Charms" },
      { key: "41", value: "Gold Pendents" },
      { key: "42", value: "Bracelets" },
      { key: "43", value: "Bali" },
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
          <View>
            <View style={{ marginBottom: moderateScaleVertical(10) }}>
              <SelectList
                data={Parentcategory}
                setSelected={setCategory}
                fontFamily='HurmeGeometricSans1'
                boxStyles={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderRadius: 0, width: "110%", alignSelf: 'center', borderColor: "#bc9954", borderBottomWidth: moderateScale(0), width: "89%" }}
                badgeTextStyles={{ color: "black", fontSize: textScale(30), paddingBottom: -25, paddingLeft: 0 }}
                placeholder="Select category"
                placeholderTextColor='#C7C7CD'
                dropdownStyles={{ width: "80%", alignSelf: "center", height: 150, borderColor: "#bc9954", borderRadius: 2 }}
                // search={false}
                dropdownTextStyles={{ fontSize: textScale(13), fontFamily: "HurmeGeometricSans1SemiBold", color: "#bc9954" }}
                inputStyles={{ padding: -10, paddingLeft: -20, marginTop: 6, marginBottom: -11, marginleft: -3, width: "90%" }}
              />
              <View style={styles.line}></View>
            </View>


            <SelectList
              data={Childcategory[category]}
              setSelected={setSubCategory}
              fontFamily='HurmeGeometricSans1'
              boxStyles={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderRadius: 0, width: "90%", alignSelf: 'center', borderColor: "#bc9954", borderBottomWidth: moderateScale(0), width: "89%" }}
              badgeTextStyles={{ color: "black", fontSize: textScale(30), paddingBottom: -25, paddingLeft: 0 }}
              placeholder="Select subCategory"
              dropdownStyles={{ width: "80%", alignSelf: "center", height: 130, borderColor: "#bc9954", borderRadius: 2 }}
              // search={false}
              inputStyles={{ padding: -10, paddingLeft: -20, marginTop: 6, marginBottom: -11, marginleft: -3, width: "90%" }}

            />
            <View style={styles.line}></View>

          </View>


          <View>
            <TextInput
              style={styles.Inputs}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder="Purity"
              placeholderTextColor="#C7C7CD"
              onChangeText={(text) => setPurity(text)}
            />
            <TextInput
              style={styles.Inputs}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder="Weight"
              placeholderTextColor="#C7C7CD"
              onChangeText={(text) => setWeight(text)}
            />
            <TextInput
              style={styles.Inputs}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder="Length"
              placeholderTextColor="#C7C7CD"
              onChangeText={(text) => setLength(text)}
            />
            <TextInput
              style={styles.Inputs}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='numeric'
              placeholder="Size"
              placeholderTextColor="#C7C7CD"
              onChangeText={(text) => setSize(text)}
            />
            <TextInput
              style={styles.Inputs}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='numeric'
              placeholder="Quantity"
              placeholderTextColor="#C7C7CD"
              onChangeText={(text) => setQuantity(text)}
            />
          </View>

          <View style={styles.logInButtonAlignment}>
            <TouchableOpacity onPress={handleSubmit}>
              <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                <Text style={styles.logInButtonText}>SUBMIT</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>




      {/* BottomTabNavigator */}
      <ImageBackground source={require('../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) }}>
        <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

          <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
            <Image source={require('../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
            <Image source={require('../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
          </TouchableOpacity>
          {/* BottomTabNavigator end */}

        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default CustomiseOrder;

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
    marginTop: moderateScaleVertical(20),
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
  line: {
    width: "80%",
    height: moderateScaleVertical(1.5),
    backgroundColor: "#bc9954",
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(7),
    marginTop: moderateScaleVertical(-1.5),
  },
  Inputs: {
    alignSelf: 'center',
    fontSize: textScale(13),
    color: "black",
    width: '80%',
    marginTop: moderateScaleVertical(9),
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


  // // ActionSheet
  // ActionSheet1: {
  //   alignItems: "center",
  //   marginRight: 10,
  // },
  // ActionSheet2: {
  //   fontSize: textScale(13),
  //   color: "black",
  //   marginLeft: moderateScale(0),
  //   fontFamily: "HurmeGeometricSans1SemiBold",


  // },
  // ActionSheet3: {
  //   alignItems: "center",
  //   // padding: moderateScale(9),
  //   width: moderateScale(150),
  //   height: moderateScaleVertical(35),
  //   justifyContent: 'center',
  //   // marginTop: moderateScaleVertical(40),
  // },



});


