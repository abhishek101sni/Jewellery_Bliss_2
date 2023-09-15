
   

    import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Button,
  Modal
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setActiveItem} from '../../../../redux/action';
import {StyleSheet} from 'react-native';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../../utils/responsive';
import SimpleModal from '../../../SimpleModal';


const KajuKatliChainsC = ({navigation}) => {

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

  // loadmore
  const [visibleData, setVisibleData] = useState([]);
  const [itemsToLoad, setItemsToLoad] = useState(10);

  const getAPIDATA = async () => {
    const url = "https://bliss-app-backend-production.up.railway.app/api/products/?search=Kaju%20Katli";

    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIDATA();
  }, []);

  const handlePress = item => {
    dispatch(setActiveItem(item));
    navigation.navigate('singleproduct');
  };

  useEffect(() => {
    // Update the visible data based on the number of items to load.
    setVisibleData(data.slice(0, itemsToLoad));
  }, [data, itemsToLoad]);

  const loadMoreItems = () => {
    // Increase the number of items to load.
    setItemsToLoad(itemsToLoad + 5); // You can adjust the increment as needed.
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../../../assets/background-image2.png')}>
        <Image
          source={require('../../../../assets/GOLDEN-STRIP.png')}
          style={{
            width: '100%',
            // marginBottom:10,
            height: 3,
          }}
        />

        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          data={visibleData} // Use the visibleData state to render items.
          numColumns={2}
          renderItem={({item, index}) => (
            // <View style={{marginBottom:moderateScaleVertical(10)}}>
            <View key={index} style={styles.View1}>
              <View style={styles.View2}>
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <View style={styles.View3}>
                    <Image
                      style={styles.ImageView}
                      source={{uri: item.images[0]}}
                    />
                    <ImageBackground
                      style={styles.View5}
                      imageStyle={{
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                      }}
                      source={require('../../../../assets/CompressedTexture3.jpg')}>
                      <Text style={{color: 'black', fontFamily:"HurmeGeometricSans1Bold" , fontSize:textScale(13)}}>
                        {item?.name}
                      </Text>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            // </View>
          )}
          ListFooterComponent={() => (
            <TouchableOpacity
              onPress={loadMoreItems}
              style={{alignItems: 'center'}}>
              <ImageBackground
                source={require('../../../../assets/CompressedTexture3.jpg')}
                imageStyle={{borderRadius: 20}}
                style={{
                  alignItems: 'center',
                  padding: moderateScale(9),
                  width: moderateScale(100),
                  height: moderateScaleVertical(40),
                  justifyContent: 'center',
                  marginTop: moderateScaleVertical(20),
                  marginBottom:moderateScaleVertical(5)
                }}>
                <Text
                  style={{
                    fontSize: textScale(13),
                    color: 'black',
                    marginLeft: moderateScale(0),
                    borderRadius: 40,
                    // paddingTop: moderateScaleVertical(3),
                    fontFamily: 'HurmeGeometricSans1',
                  }}>
                  Load more...
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
        
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
      </ImageBackground>

       {/* BottomTabNavigator */}
       <ImageBackground source={require('../../../../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) , marginTop:moderateScaleVertical(0) }}>
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
  );
};

export default KajuKatliChainsC;

const styles = StyleSheet.create({
  View1: {
    marginBottom: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: moderateScale(20),
    marginVertical:moderateScaleVertical(20)
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
    justifyContent: 'space-around',
    marginHorizontal: moderateScale(-5),
  },

  View3: {
    backgroundColor: 'white',
    borderRadius: 35,
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
    alignItems: 'center',
    height: moderateScaleVertical(40),
    width: moderateScale(153),
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: textScale(10),
    justifyContent: 'center',
  },
  // Whatsapp style

  HelpButtonAlignment: {
    justifyContent: "center",
    backgroundColor: "#25D366",
    width: moderateScale(110),
    height: moderateScaleVertical(45),
    borderRadius: 40,
    marginBottom: moderateScaleVertical(40)
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
});
