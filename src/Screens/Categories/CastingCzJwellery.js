import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Modal, ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
import axios from 'axios';
import SimpleModal from '../SimpleModal';

const CastingCzJwellery = ({ navigation }) => {

  // CastingCz Jwellery Content

  const CastingCzData = [
    {
      img: require('../../assets/MoodShots/10.jpg'),
      onPress: () => {
        navigation.navigate("NeckLaceSets");
      },
      title: "Necklace Sets"

    },
    {
      img: require('../../assets/MoodShots/14.jpg'),
      onPress: () => {
        navigation.navigate('MangalSutraCZ');
      },
      title: "Mangal Sutra",
    },
    {
      img: require('../../assets/MoodShots/6.jpg'),
      onPress: () => {
        navigation.navigate("LadiesRings");
      },
      title: "Ladies Rings",
    },
    {
      img: require('../../assets/MoodShots/11.jpg'),
      onPress: () => {
        navigation.navigate("CockTailRings");
      },
      title: "Cocktail Rings",
    },
    {
      img: require('../../assets/MoodShots/2.jpg'),
      onPress: () => {
        navigation.navigate("LadiesSolitaireRings");
      },
      title: "Ladies Solitaire Rings",
    },
    {
      img: require('../../assets/MoodShots/1.jpg'),
      onPress: () => {
        navigation.navigate("GentsRingsCZ");
      },
      title: "Gents Rings",
    },
    {
      img: require('../../assets/MoodShots/3.jpg'),
      onPress: () => {
        navigation.navigate("GentsSolitairRings");
      },
      title: "Gents Solitaire Rings",
    },
    {
      img: require('../../assets/MoodShots/8.jpg'),
      onPress: () => {
        navigation.navigate("TopsCZ");
      },
      title: "Tops",
    },
    {
      img: require('../../assets/MoodShots/7.jpg'),
      onPress: () => {
        navigation.navigate("SolitaireTopsCZ");
      },
      title: "Solitaire Tops",
    },
    {
      img: require('../../assets/MoodShots/12.jpg'),
      onPress: () => {
        navigation.navigate("PendentSetsCZ");
      },
      title: "Pendent Sets",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("SolitairePendentSetsCZ");
      },
      title: "Solitaire Pendents Sets",
    },
    {
      img: require('../../assets/charms.jpg'),
      onPress: () => {
        navigation.navigate("Charms");
      },
      title: "Charms",
    },
    {
      img: require('../../assets/MoodShots/13.jpg'),
      onPress: () => {
        navigation.navigate("GoldPendentscz");
      },
      title: "God Pendents",
    },
    {
      img: require('../../assets/coming_soon.png'),
      onPress: () => {
        navigation.navigate("BraceLets");
      },
      title: "Bracelets",
    },
    {
      img: require('../../assets/MoodShots/16.jpg'),
      onPress: () => {
        navigation.navigate("Bali");
      },
      title: "Bali",
    },

  ];
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

  const [category, setcategory] = useState([]);
  const [products, setProducts] = useState([]);

  // const getCategory = async () => {
  //   const url = "http://localhost:5009/api/products?category=chains"
  //   let result = await fetch(url);
  //   result = await result.json();
  //   setcategory(result);
  // }
  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://bliss-app-backend-production.up.railway.app/api/products', {
        params: { category: 'chains' },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#1A2228", flex: 1 }}>
        <View>
          <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
        </View>
        <ScrollView>
          <View style={{ marginBottom: moderateScaleVertical(50) }}>
            {/* FlatList */}

            <FlatList contentContainerStyle={{ alignItems: "center" }}
              data={CastingCzData}
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

export default CastingCzJwellery

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
