
import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'
import { setActiveItem } from '../../../../redux/action';
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../../../utils/responsive'


const BraceletsPJ = ({ navigation }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getAPIDATA = async () => {
    const url = "https://bliss-app-backend-production.up.railway.app/api/products/?search=Bracelets";

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

      <FlatList contentContainerStyle={{ alignItems: "center" }}
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => <View key={index} style={styles.View1}>

          <View style={styles.View2}>
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={{ uri: item.images[0] }} />
                <ImageBackground style={styles.View5} imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} source={require("../../../../assets/CompressedTexture3.jpg")}>
                  <Text style={{ color: "black", fontWeight: "600", }}>{item?.name}</Text>
                </ImageBackground>

              </View>
            </TouchableOpacity>
          </View>

        </View>}
      />
    </ImageBackground>

  )
}

export default BraceletsPJ

const styles = StyleSheet.create({
  View1: {
    margin: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: moderateScale(20)
  },

  View2: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    // marginRight: moderateScale(10),
    marginTop: moderateScaleVertical(15),
    marginBottom: moderateScaleVertical(15),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: moderateScale(150),
    height: moderateScaleVertical(180),
    justifyContent: "space-around",
    marginHorizontal: moderateScale(-5)
  },

  View3: {
    backgroundColor: 'white',
    borderRadius: 35
  },

  ImageView: {
    height: moderateScaleVertical(155),
    width: moderateScale(150),
    alignSelf: 'center',
    borderRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  View5: {
    alignItems: "center",
    height: moderateScaleVertical(40),
    width: moderateScale(153),
    textAlign: 'center',
    alignSelf: "center",
    fontWeight: "900",
    fontSize: textScale(10),
    justifyContent: "center",
  },
})