import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  Alert,
  SafeAreaView,
} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../utils/responsive';
import {SelectList} from 'react-native-dropdown-select-list';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const CustomiseOrder = ({navigation}) => {
  const [category, setCategory] = useState(null);
  const [subcategory, setSubCategory] = useState(null);
  const [purity, setPurity] = useState(null);
  const [weight, setWeight] = useState(null);
  const [length, setLength] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

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
        selectedImage,
      };
      // console.log(`dataaaaaaaaaaaaaaaaaaaaaaa`,data);
      const response = await axios.post(
        'https://jewellery-bliss.onrender.com/api/customorders/add',
        data,
      );

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // hehehe÷
  const checkFormValidity = () => {
    if (purity && weight && length && size && quantity) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Call checkFormValidity when any of the input fields change
  useEffect(() => {
    checkFormValidity();
  }, [purity, weight, length, size, quantity]);

  const selectImageFromGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 1, // Image quality (0 to 1)
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Image selection canceled');
      } else if (response.error) {
        console.error('ImagePicker Error:', response.error);
      } else {
        // Use the selected image (response.uri) in your component
        const selectedImage = response.assets[0].uri;
        setSelectedImage(selectedImage); // Save the selected image URI in state
        console.log('image selecxsdddcoahcisadhcoshcojsdochsdoted', response);
      }
    });
  };

  const Parentcategory = [
    {key: 'Chains', value: 'Chains'},
    {key: 'PlainJewellery', value: 'Plain Jewellery'},
    {key: 'CastingJewellery', value: 'Casting Jewellery'},
    {key: 'castingCZJewellery', value: 'Casting CZ Jwellery'},
  ];
  const Childcategory = {
    Chains: [
      {key: 'Silky chains', value: 'Silky chains'},
      {key: 'Indo chains', value: 'Indo chains'},
      {key: 'Rodium chains', value: 'Rodium chains'},
      {key: 'Kaju Katli chains', value: 'Kaju Katli chains'},
      {key: 'Machine Chains', value: 'Machine Chains'},
      {key: 'Solid Nawabi chains', value: 'Solid Nawabi chains'},
      {key: 'Hollow Nawabi chains', value: 'Hollow Nawabi chains'},
      {key: 'Madrasi chains', value: 'Madrasi chains'},
      {key: 'Handmade chains', value: 'Handmade chains'},
      {key: 'Hollow chains', value: 'Hollow chains'},
      {key: 'Choco chains', value: 'Choco chains'},
      {key: 'Indo Choco chains', value: 'Indo Choco chains'},
    ],
    PlainJewellery: [
      {key: 'Sets', value: 'Sets'},
      {key: 'Mangal Sutra', value: 'Mangal Sutra'},
      {key: 'Tops', value: 'Tops'},
      {key: 'Handmade Ladies Rings', value: 'Handmade Ladies Rings'},
      {key: 'Handmade Gents Rings', value: 'Handmade Gents Rings'},
      {key: 'Bracelets', value: 'Bracelets'},
      {key: 'UV Shaped Bali', value: 'UV Shaped Bali'},
      {key: 'Rajkot Items', value: 'Rajkot Items'},
      {key: 'Long Sets', value: 'Long Sets'},
      {key: 'Choker Sets', value: 'Choker Sets'},
      {key: 'Bangels', value: 'Bangels'},
      {key: 'Kade', value: 'Kade'},
      {key: 'Gold Pendents', value: 'Gold Pendents'},
    ],
    CastingJewellery: [
      {key: 'Ladies Rings', value: 'Ladies Rings'},
      {key: 'Gents Rings', value: 'Gents Rings'},
      {key: 'Pendents', value: 'Pendents'},
      {key: 'Tops', value: 'Tops'},
    ],
    castingCZJewellery: [
      {key: 'Necklace Sets', value: 'Necklace Sets'},
      {key: 'Mangal Sutra', value: 'Mangal Sutra'},
      {key: 'Ladies Rings', value: 'Ladies Rings'},
      {key: 'Cocktail Rings', value: 'Cocktail Rings'},
      {key: 'Ladies Solitaire Rings', value: 'Ladies Solitaire Rings'},
      {key: 'Gents Rings', value: 'Gents Rings'},
      {key: 'Gents Solitaire Rings', value: 'Gents Solitaire Rings'},
      {key: 'Tops Rings', value: 'Tops Rings'},
      {key: 'Solitaire Rops', value: 'Solitaire Rops'},
      {key: 'Pendent Sets', value: 'Pendent Sets'},
      {key: 'Solitaire Pendent Sets', value: 'Solitaire Pendent Sets'},
      {key: 'Charms', value: 'Charms'},
      {key: 'Gold Pendents', value: 'Gold Pendents'},
      {key: 'Bracelets', value: 'Bracelets'},
      {key: 'Bali', value: 'Bali'},
    ],
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/background-image2.png')}>
        <ScrollView>
          <View style={{flex: 1}}>
            <View style={styles.logoAlignment}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.logoSize}
              />
            </View>

            <View style={styles.LogInTitle}>
              <Text style={styles.LogInText}>Customise Your Order</Text>
            </View>
            <View>
              <View style={{marginBottom: moderateScaleVertical(-10)}}>
                <SelectList
                  data={Parentcategory}
                  setSelected={setCategory}
                  fontFamily="HurmeGeometricSans1"
                  boxStyles={{
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderRadius: 0,
                    alignSelf: 'center',
                    borderColor: '#bc9954',
                    borderBottomWidth: moderateScale(0),
                    width: '89%',
                  }}
                  badgeTextStyles={{
                    color: 'black',
                    fontSize: textScale(30),
                    paddingBottom: -25,
                    paddingLeft: 0,
                  }}
                  placeholder="Select category"
                  placeholderTextColor="black"
                  dropdownStyles={{
                    width: '80%',
                    alignSelf: 'center',
                    height: 150,
                    borderColor: '#bc9954',
                    borderRadius: 2,
                  }}
                  // search={false}
                  dropdownTextStyles={{
                    fontSize: textScale(13),
                    fontFamily: 'HurmeGeometricSans1SemiBold',
                    color: '#bc9954',
                  }}
                  inputStyles={{
                    padding: -10,
                    paddingLeft: -20,
                    marginTop: 6,
                    marginBottom: -11,
                    marginleft: -3,
                    width: '90%',
                  }}
                />
                <View style={styles.line}></View>
              </View>

              <SelectList
                data={Childcategory[category]}
                setSelected={setSubCategory}
                fontFamily="HurmeGeometricSans1"
                boxStyles={{
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderRadius: 0,

                  alignSelf: 'center',
                  borderColor: '#bc9954',
                  borderBottomWidth: moderateScale(0),
                  width: '89%',
                }}
                badgeTextStyles={{
                  color: 'black',
                  fontSize: textScale(30),
                  paddingBottom: -25,
                  paddingLeft: 0,
                }}
                placeholder="Select Subcategory"
                placeholderTextColor="black"
                dropdownStyles={{
                  width: '80%',
                  alignSelf: 'center',
                  height: 130,
                  borderColor: '#bc9954',
                  borderRadius: 1,
                }}
                // search={false}
                inputStyles={{
                  padding: -10,
                  paddingLeft: -20,
                  marginTop: 6,
                  marginBottom: -11,
                  marginleft: -3,
                  width: '90%',
                }}
              />
              <View style={styles.line}></View>
            </View>

            <View>
              <TextInput
                style={styles.Inputs}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Purity"
                placeholderTextColor="#C7C7CD"
                onChangeText={text => setPurity(text)}
              />
              <TextInput
                style={styles.Inputs}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Weight"
                placeholderTextColor="#C7C7CD"
                onChangeText={text => setWeight(text)}
              />
              <TextInput
                style={styles.Inputs}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Length"
                placeholderTextColor="#C7C7CD"
                onChangeText={text => setLength(text)}
              />
              <TextInput
                style={styles.Inputs}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                placeholder="Size"
                placeholderTextColor="#C7C7CD"
                onChangeText={text => setSize(text)}
              />
              <TextInput
                style={styles.Inputs}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                placeholder="Quantity"
                placeholderTextColor="#C7C7CD"
                onChangeText={text => setQuantity(text)}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginHorizontal: moderateScale(-23),
              }}>
              <View style={{marginTop: moderateScaleVertical(40)}}>
                <TouchableOpacity onPress={selectImageFromGallery}>
                  <View
                    style={{
                      backgroundColor: '#bc9954',
                      width: moderateScale(120),
                      height: moderateScaleVertical(30),
                      borderRadius: 10,
                      // padding:10
                    }}>
                    <Text style={{alignSelf: 'center', padding: 5}}>
                      Select Image
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: moderateScale(70),
                  height: moderateScaleVertical(70),
                }}>
                <View style={{marginTop: moderateScaleVertical(10)}}>
                  {selectedImage && (
                    <Image
                      source={{uri: selectedImage}}
                      style={{
                        width: moderateScale(70),
                        height: moderateScaleVertical(70),
                      }}
                    />
                  )}
                </View>
              </View>
            </View>

            <View style={styles.logInButtonAlignment}>
              {/* <TouchableOpacity onPress={handleSubmit}> */}
              {/* <TouchableOpacity ``
              onPress={() => {
                Alert.alert('Thank you');
                console.log('Data Submitted Succesfully');
              }}> */}
              {/* <TouchableOpacity
              onPress={() => {
               navigation.navigate("CustomiseThankyou")
              }}> */}
              <TouchableOpacity
                onPress={() => {
                  if (isFormValid) {
                    navigation.navigate('CustomiseThankyou');
                  } else {
                    Alert.alert('Please fill in all required fields.');
                  }
                }}
                disabled={!isFormValid}>
                <ImageBackground
                  source={require('../assets/CompressedTexture3.jpg')}
                  style={styles.ImageBackgroundStyle}
                  imageStyle={{borderRadius: 80}}>
                  <Text style={styles.logInButtonText}>SUBMIT</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* BottomTabNavigator */}
        <ImageBackground
          source={require('../assets/CompressedTexture3.jpg')}
          imageStyle={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            alignSelf: 'center',
          }}
          style={{
            height: moderateScaleVertical(50),
            width: moderateScale(370),
            alignSelf: 'center',
            marginBottom: moderateScale(4),
          }}>
          <View
            style={{
              marginTop: moderateScaleVertical(9),
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
            {/* BottomTabNavigator end */}
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CustomiseOrder;

const styles = StyleSheet.create({
  goldenStripBottom: {
    width: '100%',
    height: 6,
  },
  logoAlignment: {
    flex: 0.3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: 'HurmeGeometricSans1',
  },
  LogInText: {
    fontSize: textScale(20),
    marginTop: moderateScaleVertical(10),
    marginBottom: moderateScaleVertical(10),
    textAlign: 'center',
    color: 'black',
    fontFamily: 'HurmeGeometricSans1',
  },
  MobileNoInput: {
    alignSelf: 'center',
    fontSize: textScale(13),
    color: 'black',
    width: '80%',
    marginTop: moderateScaleVertical(30),
    marginBottom: moderateScaleVertical(5),
    borderBottomWidth: moderateScale(1.5),
    borderBottomColor: '#bc9954',
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontFamily: 'HurmeGeometricSans1',
  },
  line: {
    width: '80%',
    height: moderateScaleVertical(1.5),
    backgroundColor: '#bc9954',
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(7),
    marginTop: moderateScaleVertical(-1.5),
  },
  Inputs: {
    alignSelf: 'center',
    fontSize: textScale(13),
    color: 'black',
    width: '80%',
    marginTop: moderateScaleVertical(9),
    marginBottom: moderateScaleVertical(5),
    borderBottomWidth: moderateScale(1.5),
    borderBottomColor: '#bc9954',
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
    fontFamily: 'HurmeGeometricSans1',
    marginBottom: moderateScaleVertical(5),
  },
  logInButtonAlignment: {
    alignItems: 'center',
    marginRight: 10,
  },
  logInButtonText: {
    fontSize: textScale(20),
    color: 'black',
    marginLeft: moderateScale(0),
    borderRadius: 40,
    // paddingTop: moderateScaleVertical(3),
    fontFamily: 'HurmeGeometricSans1',
  },
  ImageBackgroundStyle: {
    alignItems: 'center',
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
