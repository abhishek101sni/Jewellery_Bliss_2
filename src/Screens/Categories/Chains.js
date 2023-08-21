import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Modal, ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
import axios from 'axios';
import SimpleModal from '../SimpleModal';

const Chains = ({ navigation }) => {

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
    <>
      {/* <FlatList
        data={products}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <FlatList contentContainerStyle={{ alignItems: "center" }}
        data={category}
        numColumns={2}
        renderItem={({ item, index }) => <View key={index} style={styles.View1}>

          <View style={styles.View2}>
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={{ uri: item.images[0] }} />
                <Text style={styles.View5}>{item?.name}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>}
    */}
      <View style={{ backgroundColor: "#181818", flex: 1 }}>
        <ScrollView>
          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('MachineChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>MACHINE CHAINS</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('SilkyRope') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>SILKY ROPE</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>SILKY ROPE</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('HandMade') }} >
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>HAND MADE</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>HAND MADE</Text>
                  </ImageBackground>

                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('HollowFancy') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>HOLLOW FANCY</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>HOLLOW FANCY</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('HollowNawabi') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>HOLLOW NAWABI</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>HOLLOW NAWABI</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('SumoChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>SUMO CHAINS</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>SUMO CHAINS</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('IndoChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>INDO CHAINS</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>INDO CHAINS</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('ChocoChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>CHOCO CHAINS</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>CHOCO CHAINS</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('IndoChocoChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>INDO CHOCO CHAINS</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>INDO CHOCO CHAINS</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.View2}>
                <TouchableOpacity onPress={() => { navigation.navigate('SolidNawabi') }}>
                  <View style={styles.View3}>
                    <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                    {/* <Text style={styles.View5}>SOLID NAWABI</Text> */}
                    <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                      <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>SOLID NAWABI</Text>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('MadrasiChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>MADRASI CHAINS</Text> */}
                  <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>MADRASI CHAINS</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity> */}
              {/* <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('SolidNawabi') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  {/* <Text style={styles.View5}>MADRASI CHAINS</Text> */}
                  {/* <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}> */}
                    {/* <Text style={{ color: "black", fontWeight: "600", fontSize: textScale(11) }}>SOLID NAWABI</Text> */}
                  {/* </ImageBackground> */}
                {/* </View> */}
              {/* </TouchableOpacity> */}
            {/* </View>  */}
            {/* </TouchableOpacity> */}
          </View>

        </ScrollView>
      </View>
    </>
  )
}

export default Chains

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