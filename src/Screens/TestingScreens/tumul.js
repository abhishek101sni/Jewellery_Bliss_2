import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsive';
import { Actionsheet, useDisclose, Box } from 'native-base';

const CustomiseOrder = ({ navigation }) => {
  const ParentCategoryData = [
    {
      onPress: () => {
        setCategoryText("Category 1");
        navigation.navigate('');
      },
      title: 'Chains',
    },
    {
      onPress: () => {
        setCategoryText("Category 2");
        navigation.navigate('');
      },
      title: 'Plain Jewellery',
    },
    {
      onPress: () => {
        navigation.navigate('');
      },
      title: 'Casting Jewellery',
    },
    {
      onPress: () => {
        navigation.navigate('');
      },
      title: 'Casting Cz Jewellery',
    },
  ];

  const {
    isOpen,
    onOpen,
    onClose,
  } = useDisclose();

  const [categoryText, setCategoryText] = useState('');

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../assets/background-image2.png')}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.logoAlignment}>
            <Image source={require('../assets/logo.png')} style={styles.logoSize} />
          </View>

          <View style={styles.LogInTitle}>
            <Text style={styles.LogInText}>Customise Your Order</Text>
          </View>

          <TouchableOpacity onPress={onOpen}>
            <View
              style={{
                backgroundColor: '#E8E8E8',
                width: 100,
                height: 40,
                borderRadius: 10,
                borderWidth: 3,
                borderColor: '#bc9954',
                alignSelf: 'center',
              }}>
              <Text>PRODUCT</Text>
            </View>
          </TouchableOpacity>

          <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
            <Actionsheet.Content>
              <Text
                style={{
                  marginTop: moderateScaleVertical(10),
                  marginBottom: moderateScaleVertical(20),
                  marginHorizontal: moderateScale(15),
                  fontSize: textScale(18),
                  color: '#797979',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Choose your Product
              </Text>
              <Box w="120%" h={398} px={4}>
                <ScrollView horizontal>
                  {/* FlatList */}
                  <FlatList
                    contentContainerStyle={{ flexDirection: 'row' }}
                    data={ParentCategoryData}
                    numColumns={3}
                    renderItem={({ item, index }) => (
                      <View key={index} style={{ flexDirection: 'row', marginHorizontal: moderateScale(25), width: '20%' }}>
                        <View style={styles.ActionSheet1}>
                          <TouchableOpacity onPress={item.onPress}>
                            <ImageBackground source={require('../assets/CompressedTexture3.jpg')} style={styles.ActionSheet3} imageStyle={{ borderRadius: 10 }}>
                              <Text style={styles.ActionSheet2}>{item.title}</Text>
                            </ImageBackground>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  />
                </ScrollView>
              </Box>
            </Actionsheet.Content>
          </Actionsheet>

          <View style={{ marginVertical: 2 }}>
            <TextInput
              style={styles.MobileNoInput}
              autoCapitalize="words"
              keyboardType="default"
              autoCorrect={false}
              placeholder="Product"
              placeholderTextColor="#C7C7CD"
            />
            <TextInput
              style={styles.Inputs}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Purity"
              placeholderTextColor="#C7C7CD"
            />
            <TextInput
              style={styles.Inputs}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Weight"
              placeholderTextColor="#C7C7CD"
            />
            <TextInput
              style={styles.Inputs}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Length"
              placeholderTextColor="#C7C7CD"
            />
            <TextInput
              style={styles.Inputs}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Size"
              placeholderTextColor="#C7C7CD"
            />
            <TextInput
              style={styles.Inputs}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Quantity"
              placeholderTextColor="#C7C7CD"
            />
          </View>

          <View style={styles.logInButtonAlignment}>
            <TouchableOpacity>
              <ImageBackground source={require('../assets/CompressedTexture3.jpg')} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                <Text style={styles.logInButtonText}>SUBMIT</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* BottomTabNavigator */}
      <ImageBackground source={require('../assets/CompressedTexture3.jpg')} imageStyle={{}} style={{ backgroundColor: 'pink', height: moderateScaleVertical(60), width: '100%', alignSelf: 'center', marginTop: 800, position: 'absolute' }}>
        <View style={{ marginTop: moderateScaleVertical(15), flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Drawer');
            }}>
            <Image source={require('../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('cart');
            }}>
            <Image source={require('../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default CustomiseOrder;

const styles = StyleSheet.create({
  // ...your existing styles...
});
