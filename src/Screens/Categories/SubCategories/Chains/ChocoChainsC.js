
import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { setActiveItem } from '../../../../redux/action';
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../../../utils/responsive'
import SimpleModal from '../../../SimpleModal';



const ChocoChainsC = ({ navigation }) => {
  // WhatsApp
  const [isModalVisible, setisModalVisible] = useState(false)
  const [chooseData, setChooseData] = useState();

  const changeModalVisible = (bool) => {
    setisModalVisible(bool)
  }


  const setData2 = (data) => {
    setChooseData(data)
  }
  // WhatsApp
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getAPIDATA = async () => {
    // const url = "https://bliss-app-backend-production.up.railway.app/api/products/?search=18";
    const url = "https://bliss-app-backend-production.up.railway.app/api/products/?search=Choco%20chains";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  useEffect(() => {
    getAPIDATA();
  }, []);

  const handlePress = (item) => {
    dispatch(setActiveItem(item));
    navigation.navigate('singleproduct');
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={require("../../../../assets/background-image2.png")}>
      <Image source={require('../../../../assets/GOLDEN-STRIP.png')} style={{ width: '100%', height: 3 }} />
      
      <ScrollView>
        <View style={{ marginBottom: moderateScaleVertical(120) }}>
          {/* FlatList */}

          <FlatList contentContainerStyle={{ alignItems: "center" }}
            data={data}
            numColumns={2}
            renderItem={({ item, index }) =>
              <View key={index} style={styles.alignment}>
                <View style={styles.View2}>
                  <TouchableOpacity activeOpacity={.6} onPress={() => handlePress(item)}>
                    <Image style={styles.ImageView} source={{ uri: item.images[0] }} />
                    <ImageBackground imageStyle={{ borderBottomLeftRadius: 19, borderBottomRightRadius: 19 }} style={styles.View5} source={require("../../../../assets/CompressedTexture3.jpg")}>
                      <Text style={{ color: "black", fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13) }}>{item?.name}</Text>
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
            <Image source={require("../../../../assets/whatsapp-white.png")} style={styles.whatsappIcon} />
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
            setData={setData2}
          />
        </Modal>
      </View>

      {/* Bottom Tab Navigator */}

      <ImageBackground source={require("../../../../assets/CompressedTexture3.jpg")} imageStyle={{}} style={{ position: "absolute", backgroundColor: "pink", height: moderateScaleVertical(60), width: "100%", alignSelf: "center", marginTop: moderateScaleVertical(748), }}>
        <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => { navigation.navigate("Drawer") }}>
            <Image source={require("../../../../assets/home.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => { navigation.navigate("cart") }}>
            <Image source={require("../../../../assets/cart.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35) }} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  )
}

export default ChocoChainsC

const styles = StyleSheet.create({
  goldenStrip: {
    width: "100%",
    height: 3,
  },
  // flatlist Design
  alignment: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: moderateScale(20)
  },
  View2: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: moderateScale(153),
    height: moderateScaleVertical(200),
    marginTop: moderateScaleVertical(40),
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