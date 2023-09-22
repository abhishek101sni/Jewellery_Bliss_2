import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList, Modal, ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
import SimpleModal from '../SimpleModal';

const PlainJwellery = ({ navigation }) => {

  // Plain Jewellery Content
  const PlainJewellery = [
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("SetsPJ");
      },
      title: "Sets"

    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("MangalSutrapj");
      },
      title: "Mangal Sutra",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("TopsPJ");
      },
      title: "Tops",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("HandmadeLadiesRing");
      },
      title: "Handmade Ladies Rings",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("HandmadeGentsRing");
      },
      title: "Handmade Gents Rings",
    },
    {
      img: require('../../assets/MoodShots/38.jpg'),
      onPress: () => {
        navigation.navigate("Bracelets");
      },
      title: "Bracelets",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("UvShapedBaliPJ");
      },
      title: "Uv Shaped Bali",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("BaliPJ");
      },
      title: "Bali",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("LongSets");
      },
      title: "Long Sets",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("ChokerSets");
      },
      title: "Choker Sets",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("Bangels");
      },
      title: "Bangels",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("Kade");
      },
      title: "Kade",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("GoldPendent");
      },
      title: "Gold Pendents",
    },
  ]

  // WhatsApp
  const [isModalVisible, setisModalVisible] = useState(false)
  const [chooseData, setChooseData] = useState();

  const changeModalVisible = (bool) => {
    setisModalVisible(bool)
  }


  const setData = (data) => {
    setChooseData(data)
  }
  // WhatsApp

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#1A2228", flex: 1 }}>
        <View>
          <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
        </View>


        {/* FlatList */}
        <ScrollView>
          <View style={{ marginBottom: moderateScaleVertical(50) }}>
            <FlatList contentContainerStyle={{ alignItems: "center" }}
              data={PlainJewellery}
              numColumns={2}
              renderItem={({ item, index }) =>
                <View key={index} style={styles.alignment}>
                  <View style={styles.View2}>
                    <TouchableOpacity activeOpacity={.6} onPress={item.onPress}>
                      <Image style={styles.ImageView} source={item.img} />
                      <ImageBackground imageStyle={{ borderBottomLeftRadius: 19, borderBottomRightRadius: 19 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                        <Text style={{ color: "black", fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13) }}>{item.title}</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              }
            />
          </View>
        </ScrollView>
        {/* Whatsapp Help Button*/}

        <View View style={{ bottom: -40, position: "absolute", right: 5 }}>
          <TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment} >
            <View style={styles.icontextAlignment}>
              <Image source={require("../../assets/whatsapp-white.png")} style={styles.whatsappIcon} />
              <Text style={styles.helpText}>Help</Text>
            </View>
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}
          >
            <SimpleModal changeModalVisible={changeModalVisible}
              setData={setData}
            />
          </Modal>
        </View>


        {/* BottomTabNavigator */}
        <ImageBackground source={require('../../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) }}>
          <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

            <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
              <Image source={require('../../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
              <Image source={require('../../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default PlainJwellery

const styles = StyleSheet.create({
  goldenStrip: {
    width: "100%",
    height: 3,
  },
  // flatlist Design
  alignment: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: moderateScale(20),
    marginVertical: moderateScaleVertical(20)
  },
  View2: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: moderateScale(153),
    height: moderateScaleVertical(200),
    // marginTop: moderateScaleVertical(40),
  },
  ImageView: {
    height: moderateScaleVertical(160),
    width: moderateScale(153),
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  View5: {
    alignItems: "center",
    height: moderateScaleVertical(40),
    width: moderateScale(153),
    justifyContent: "center",
    marginTop: moderateScaleVertical(160),
    position: "absolute"
  },
  // flatlist Design

  // Whatsapp style

  HelpButtonAlignment: {
    justifyContent: "center",
    backgroundColor: "#25D366",
    width: moderateScale(110),
    height: moderateScaleVertical(45),
    borderRadius: 40,
    marginBottom: moderateScaleVertical(100)
    // position: "fixed",
  },
  icontextAlignment: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: moderateScale(-30),
    marginHorizontal: moderateScale(25),
  },
  whatsappIcon: {
    width: moderateScale(20),
    height: moderateScaleVertical(20),
    // position:"fixed",
  },
  helpText: {
    color: 'white',
    fontSize: textScale(13),
    fontWeight: "bold",
  }
})