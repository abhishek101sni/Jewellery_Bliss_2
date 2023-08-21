import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'

const CastingCzJwellery = ({ navigation }) => {

  return (

    <View style={{ backgroundColor: "#181818", flex: 1 }}>
      <ScrollView>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('NeckLaceSets') }} >
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                {/* <Text style={styles.View5}>NECKLACE SETS</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>NECKLACE SETS</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('MangalSutraCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                {/* <Text style={styles.View5}>MANGAL SUTRA</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>MANGAL SUTRA</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('LadiesRings') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_1.jpg")} />
                {/* <Text style={styles.View5}>LADIES RING</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>LADIES RING</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('CockTailRings') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_2.jpg")} />
                {/* <Text style={styles.View5}>COCKTAIL RINGS</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>COCKTAIL RINGS</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('LadiesSolitaireRings') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_3.jpg")} />
                {/* <Text style={styles.View5}>LADIES SOLITAIRE RING</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>LADIES SOLITAIRE RING</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('GentsRingsCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_4.jpg")} />
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
            <TouchableOpacity onPress={() => { navigation.navigate('GentsSolitairRings') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_5.jpg")} />
                {/* <Text style={styles.View5}>GENTS SOLITAIRE RING</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>GENTS SOLITAIRE RING</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('TopsCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/cz_tops.jpg")} />
                {/* <Text style={styles.View5}>TOPS</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>TOPS</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('SolitaireRopeCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                {/* <Text style={styles.View5}>SOLITAIRE ROPE</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>SOLITAIRE ROPE</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('Bali') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                {/* <Text style={styles.View5}>BALI</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>BALI</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('PendentSetsCZ') }} >
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/pendentCZ.jpg")} />
                {/* <Text style={styles.View5}>PENDENT SETS</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>PENDENT SETS</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('SolitairePendentSetsCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                {/* <Text style={styles.View5}>SOLITAIRE PENDENT SETS</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>SOLITAIRE PENDENT SETS</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('Charms') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/charms.jpg")} />
                {/* <Text style={styles.View5}>CHARMS</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>CHARMS</Text>
                  </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('GoldPendentscz') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                {/* <Text style={styles.View5}>GOLD PENDENTS</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>GOLD PENDENTS</Text>
                  </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('BraceLets') }} >
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                {/* <Text style={styles.View5}>BRACELETS</Text> */}
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>BRACELETS</Text>
                  </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity>
              <View style={styles.View2}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/GWT-270.jpg")} />
                  <Text style={styles.View5}>GOLD PENDENTS</Text>
                </View>
              </View>
            </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  )
}

export default CastingCzJwellery

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
    // backgroundColor: 'white',
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
  }
})