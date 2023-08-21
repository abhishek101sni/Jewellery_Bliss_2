import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Modal, ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
// import { Modal } from 'react-native-paper';
import SimpleModal from '../SimpleModal';

const CastingJwellery = ({ navigation }) => {
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
    <>
      <View style={{ backgroundColor: "#181818", flex: 1 }}>
        <ScrollView>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('LadiesRing') }} >
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>LADIES RING</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>LADIES RING</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('GentsRing') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>GENTS RING</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>GENTS RING</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('Pendents') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>PENDENTS</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>PENDENTS</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View2}>
              <View style={styles.View3}>
                <TouchableOpacity onPress={() => { navigation.navigate('Tops') }}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>TOPS</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>TOPS</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('GoldPendents') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>GOLD PENDENTS</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>GOLD PENDENTS</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.View2}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/GWT-610.jpg")} />
                <Text style={styles.View5}>BRACELETS</Text>
              </View>
            </View> */}
          </View>
        </ScrollView>
        {/* Whatsapp */}
        <View style={{ bottom: -90, position: "absolute", right: 20 }}>
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
        {/* Whatsapp */}
      </View>
    </>
  )
}

export default CastingJwellery

const styles = StyleSheet.create({
  alignment: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: moderateScale(12),
    justifyContent: "space-around",
    marginTop: moderateScaleVertical(25)
  },

  View2: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    marginRight: moderateScale(10),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: moderateScale(153),
    height: moderateScaleVertical(180)
  },
  View3: {
    backgroundColor: 'white',
    borderRadius: 35
  },
  ImageView: {
    height: moderateScaleVertical(140),
    width: moderateScale(120),
    alignSelf: 'center',
    borderRadius: 35,
  },
  View5: {
    alignItems: "center",
    height: moderateScaleVertical(40),
    width: moderateScale(153),
    color: 'black',
    // paddingTop: 13,
    backgroundColor: '#ECC440',
    textAlign: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontWeight: "900",
    fontSize: textScale(10),
    justifyContent: "center",
  },
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