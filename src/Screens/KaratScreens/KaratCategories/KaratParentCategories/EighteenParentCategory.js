import React ,{useState} from 'react'
import {View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView ,FlatList, Modal, ImageBackground, StyleSheet} from 'react-native'
import { height, moderateScale, moderateScaleVertical, textScale } from "../../../../utils/responsive"
import SimpleModal from '../../../SimpleModal'

const EighteenParentCategory = ({navigation}) => {
  const ParentCategoryData = [
    {
        img: require('../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/Handmadeandhollow/handmadeandhollow.jpg'),
        onPress: () => {
            navigation.navigate("ChainsE");
        },
        title: "Chains"

    },
    {
        img: require('../../../../assets/PRODUCTS/CHAINS/Categories/plainjewellery/plain.jpg'),
        onPress: () => {
            navigation.navigate("PlainJewelleryE");
        },
        title: "Plain Jewellery",
    },
    {
        img: require('../../../../assets/PRODUCTS/CHAINS/Categories/castingJewellery/casting.jpg'),
        onPress: () => {
            navigation.navigate("CastingJewelleryE");
        },
        title: "Casting Jewellery",
    },
    {
        img: require('../../../../assets/czParent.jpg'),
        onPress: () => {
            navigation.navigate("CastingCZJewelleryE");
        },
        title: "Casting CZ Jewellery",
    },
];
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

  return (
    <SafeAreaView style={{  flex: 1 }}>
    <View >
        <Image source={require("../../../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
    </View>
    <ScrollView>

        {/* FlatList */}

        <FlatList contentContainerStyle={{ alignItems: "center" }}
            data={ParentCategoryData}
            numColumns={2}
            renderItem={({ item, index }) =>
                <View key={index} style={styles.alignment}>
                    <View style={styles.View2}>
                        <TouchableOpacity activeOpacity={.6} onPress={item.onPress}>
                            <Image style={styles.ImageView} source={item.img} />
                            <ImageBackground imageStyle={{ borderBottomLeftRadius: 19, borderBottomRightRadius: 19 }} style={styles.View5} source={require("../../../../assets/CompressedTexture3.jpg")}>
                                <Text style={{ color: "black", fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13) }}>{item.title}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        />
    </ScrollView>
    <View style={{ bottom: moderateScaleVertical(-35), position: 'absolute', right: moderateScale(5) }}>

<TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment}>
  <View style={styles.icontextAlignment}>
    <Image source={require('../../../../assets/whatsapp-white.png')} style={styles.whatsappIcon} />
    <Text style={styles.helpText}>Help</Text>
  </View>
</TouchableOpacity>

<Modal transparent={true} animationType="fade" visible={isModalVisible} nRequestClose={() => changeModalVisible(false)}>
  <SimpleModal changeModalVisible={changeModalVisible} setData={setData2} />
</Modal>

</View>
      {/* BottomTabNavigator */}
      <ImageBackground source={require('../../../../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) , borderColor:"black"}}>
                    <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

                        <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
                            <Image source={require('../../../../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
                            <Image source={require('../../../../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
    </SafeAreaView>
  )
}

export default EighteenParentCategory


const styles = StyleSheet.create({
  goldenStrip: {
      width: "100%",
      height: 3,
  },
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
      // marginHorizontal: moderateScale(2s0)
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
 

// Whatsapp style

HelpButtonAlignment: {
  justifyContent: 'center',
  backgroundColor: '#25D366',
  width: moderateScale(90),
  height: moderateScaleVertical(40),
  borderRadius: 40,
  marginBottom: moderateScaleVertical(125),
  // position: "fixed",
},
icontextAlignment: {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingHorizontal: moderateScale(-30),
  marginHorizontal: moderateScale(15),
},
whatsappIcon: {
  width: moderateScale(20),
  height: moderateScaleVertical(20),
  // position:"fixed",
},
helpText: {
  color: 'white',
  fontSize: textScale(13),
  fontWeight: 'bold',
},


})