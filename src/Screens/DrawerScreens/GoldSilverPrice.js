import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import {DataTable, Text} from 'react-native-paper';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../utils/responsive';
import SimpleModal from '../SimpleModal';
import axios from 'axios';

const GoldSilverPrice = ({navigation}) => {
  // API FOR PREMIUM PRICE

  const [premiumData, setPremiumData] = useState([]);
  const PREMIUM_API_URL = 'https://jewellery-bliss.onrender.com/api/premium';

  const fetchPremiumData = async () => {
    try {
      const response = await axios.get(PREMIUM_API_URL);
      setPremiumData(response.data);
      console.log('hellllllllkjhlloooooo', response.data);
    } catch (error) {
      console.error('Error fetching premium data:', error);
    }
  };

  useEffect(() => {
    fetchPremiumData();
  }, []);

  function gold995() {
    let goldprice = parseFloat(firstData?.SELL);
    // console.log("MCX Gold Buy price = ", firstData?.SELL)
    console.log('heloxow33333333333333333oxoo', goldprice);
    {
      /* console.log(typeof goldprice) */
    }

    let PremiumCharges = premiumData[0]?.premiumcharges;
    console.log('Premium Charges =', PremiumCharges);

    let totalOFGoldandPremium = goldprice + PremiumCharges;
    console.log(
      'MCX Gold Buy price + Premium Charges =',
      totalOFGoldandPremium,
    );

    let threePercentGstofTotal = (totalOFGoldandPremium * 3) / 100;
    console.log(
      '3 % GST Of ( MAX of Gold  + premium Charges) = ',
      threePercentGstofTotal,
    );

    let Gold995 = threePercentGstofTotal + totalOFGoldandPremium;
    console.log('Gold 995 price including 3 % GST =', Gold995);
    return Gold995;
  }

  // GoldPriceApi
  const [apiDATA, setAPIdata] = useState([]);
  const API_URL = 'https://rappid.in/apis/mcx.php?key=januskoncepts-9015790532';
  const firstData = apiDATA.data && apiDATA.data[0];
  console.log('FIRSTDATA', firstData?.BUY);
  const secondData = apiDATA.data && apiDATA.data[4];
  const Dollar = apiDATA.data && apiDATA.data[40];

  const SpotG = apiDATA.data && apiDATA.data[27];
  console.log('Spot Gollddddddd', SpotG);
  const SpotS = apiDATA.data && apiDATA.data[28];
  //   console.log("spot silverrrr" ,SpotS )

  const fetchAPIData = async () => {
    try {
      const response = await axios.get(API_URL);
      setAPIdata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // fetchAPIData()
  useEffect(() => {
    fetchAPIData();
    const interval = setInterval(fetchAPIData, 5 * 1000);
    return () => {
      clearInterval(interval);
      console.log('APIcalled after every 5 Seconds');
    };
  }, []);
  // GoldPriceApi

  // WhatsApp
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();

  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };

  const setData = data => {
    setChooseData(data);
  };
  // WhatsApp
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/background-image2.png')}>
        <View style={{}}>
          <Image
            source={require('../../assets/GOLDEN-STRIP.png')}
            style={styles.goldenStrip}
          />
        </View>
        <ScrollView>
          <View style={{marginBottom: moderateScaleVertical(40)}}>
            <View style={{marginBottom: moderateScaleVertical(5)}}>
              {apiDATA.data && apiDATA.data.length > 0 ? (
                <View style={{marginBottom: moderateScaleVertical(10)}}>
                  <View
                    style={{
                      marginTop: moderateScale(20),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '96%',
                        marginLeft: '1%',
                        marginRight: '1 %',
                      }}>
                      <ImageBackground
                        source={require('../../assets/CompressedTexture3.jpg')}
                        imageStyle={{borderRadius: 10, borderWidth: 2}}
                        style={{
                          height: moderateScale(80),
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: 'black',
                              width: moderateScale(60),
                              height: moderateScaleVertical(60),
                              borderRadius: 70,
                              alignItems: 'center',
                              marginHorizontal: moderateScale(20),
                              justifyContent: 'center',
                              marginLeft: moderateScale(-25),
                            }}>
                            <Text
                              style={{
                                color: '#eec06b',
                                fontSize: textScale(16),
                                fontFamily: 'HurmeGeometricSans1Bold',
                              }}>
                              GOLD
                            </Text>
                          </View>
                          <View
                            style={{
                              marginLeft: moderateScale(-60),
                              flexDirection: 'column',
                            }}>
                            <Text
                              style={{
                                fontSize: textScale(20),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              GOLD MCX
                            </Text>
                            <Text
                              style={{
                                fontSize: textScale(13),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              BUY PRICE
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: textScale(20),
                              color: 'black',
                              fontFamily: 'HurmeGeometricSans1SemiBold',
                            }}>
                            {firstData?.BUY}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              ) : (
                <Text>Loading</Text>
              )}
            </View>

            <View style={{marginBottom: moderateScaleVertical(5)}}>
              {apiDATA.data && apiDATA.data.length > 0 ? (
                <View style={{marginBottom: moderateScaleVertical(10)}}>
                  <View
                    style={{
                      marginTop: moderateScale(20),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '96%',
                        marginLeft: '1%',
                        marginRight: '1 %',
                      }}>
                      <ImageBackground
                        source={require('../../assets/CompressedTexture3.jpg')}
                        imageStyle={{borderRadius: 10, borderWidth: 2}}
                        style={{
                          height: moderateScale(80),
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: 'black',
                              width: moderateScale(60),
                              height: moderateScaleVertical(60),
                              borderRadius: 70,
                              alignItems: 'center',
                              marginHorizontal: moderateScale(20),
                              justifyContent: 'center',
                              marginLeft: moderateScale(-25),
                            }}>
                            <Text
                              style={{
                                color: '#eec06b',
                                fontSize: textScale(16),
                                fontFamily: 'HurmeGeometricSans1Bold',
                              }}>
                              GOLD
                            </Text>
                          </View>
                          <View
                            style={{
                              marginLeft: moderateScale(-60),
                              flexDirection: 'column',
                            }}>
                            <Text
                              style={{
                                fontSize: textScale(20),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              GOLD MCX
                            </Text>
                            <Text
                              style={{
                                fontSize: textScale(13),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              SELL PRICE
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: textScale(20),
                              color: 'black',
                              fontFamily: 'HurmeGeometricSans1SemiBold',
                            }}>
                            {firstData?.SELL}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              ) : (
                <Text>Loading</Text>
              )}
            </View>

            <View style={{marginBottom: moderateScaleVertical(5)}}>
              {apiDATA.data && apiDATA.data.length > 0 ? (
                <View style={{marginBottom: moderateScaleVertical(10)}}>
                  <View
                    style={{
                      marginTop: moderateScale(20),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '96%',
                        marginLeft: '1%',
                        marginRight: '1 %',
                      }}>
                      <ImageBackground
                        source={require('../../assets/CompressedTexture3.jpg')}
                        imageStyle={{borderRadius: 10, borderWidth: 2}}
                        style={{
                          height: moderateScale(80),
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: 'black',
                              width: moderateScale(60),
                              height: moderateScaleVertical(60),
                              borderRadius: 70,
                              alignItems: 'center',
                              marginHorizontal: moderateScale(20),
                              justifyContent: 'center',
                              marginLeft: moderateScale(-25),
                            }}>
                            <Text
                              style={{
                                color: '#eec06b',
                                fontSize: textScale(16),
                                fontFamily: 'HurmeGeometricSans1Bold',
                              }}>
                              SPOT
                            </Text>
                          </View>
                          <View
                            style={{
                              marginLeft: moderateScale(-60),
                              flexDirection: 'column',
                            }}>
                            <Text
                              style={{
                                fontSize: textScale(20),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              GOLD SPOT
                            </Text>
                            {/* <Text style={{fontSize:textScale(13)  , color:"black" , fontFamily:"HurmeGeometricSans1Bold" , padding:1}}>BUY PRICE</Text> */}
                          </View>
                          <Text
                            style={{
                              fontSize: textScale(20),
                              color: 'black',
                              fontFamily: 'HurmeGeometricSans1SemiBold',
                            }}>
                            {SpotG.LTP}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              ) : (
                <Text>Loading</Text>
              )}
            </View>

            <View style={{marginBottom: moderateScaleVertical(5)}}>
              {apiDATA.data && apiDATA.data.length > 0 ? (
                <View style={{marginBottom: moderateScaleVertical(10)}}>
                  <View
                    style={{
                      marginTop: moderateScale(20),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '96%',
                        marginLeft: '1%',
                        marginRight: '1 %',
                      }}>
                      <ImageBackground
                        source={require('../../assets/CompressedTexture3.jpg')}
                        imageStyle={{borderRadius: 10, borderWidth: 2}}
                        style={{
                          height: moderateScale(80),
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: 'black',
                              width: moderateScale(60),
                              height: moderateScaleVertical(60),
                              borderRadius: 70,
                              alignItems: 'center',
                              marginHorizontal: moderateScale(20),
                              justifyContent: 'center',
                              marginLeft: moderateScale(-25),
                            }}>
                            <Text
                              style={{
                                color: '#eec06b',
                                fontSize: textScale(16),
                                fontFamily: 'HurmeGeometricSans1Bold',
                              }}>
                              SILVER
                            </Text>
                          </View>
                          <View
                            style={{
                              marginLeft: moderateScale(-60),
                              flexDirection: 'column',
                            }}>
                            <Text
                              style={{
                                fontSize: textScale(20),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              SILVER MCX
                            </Text>
                            <Text
                              style={{
                                fontSize: textScale(13),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              BUY PRICE
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: textScale(20),
                              color: 'black',
                              fontFamily: 'HurmeGeometricSans1SemiBold',
                            }}>
                            {secondData.BUY}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              ) : (
                <Text>Loading</Text>
              )}
            </View>

            <View style={{marginBottom: moderateScaleVertical(5)}}>
              {apiDATA.data && apiDATA.data.length > 0 ? (
                <View style={{marginBottom: moderateScaleVertical(10)}}>
                  <View
                    style={{
                      marginTop: moderateScale(20),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '96%',
                        marginLeft: '1%',
                        marginRight: '1 %',
                      }}>
                      <ImageBackground
                        source={require('../../assets/CompressedTexture3.jpg')}
                        imageStyle={{borderRadius: 10, borderWidth: 2}}
                        style={{
                          height: moderateScale(80),
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: 'black',
                              width: moderateScale(60),
                              height: moderateScaleVertical(60),
                              borderRadius: 70,
                              alignItems: 'center',
                              marginHorizontal: moderateScale(20),
                              justifyContent: 'center',
                              marginLeft: moderateScale(-25),
                            }}>
                            <Text
                              style={{
                                color: '#eec06b',
                                fontSize: textScale(16),
                                fontFamily: 'HurmeGeometricSans1Bold',
                              }}>
                              SILVER
                            </Text>
                          </View>
                          <View
                            style={{
                              marginLeft: moderateScale(-60),
                              flexDirection: 'column',
                            }}>
                            <Text
                              style={{
                                fontSize: textScale(20),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              SILVER MCX
                            </Text>
                            <Text
                              style={{
                                fontSize: textScale(13),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              SELL PRICE
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: textScale(20),
                              color: 'black',
                              fontFamily: 'HurmeGeometricSans1SemiBold',
                            }}>
                            {secondData.SELL}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              ) : (
                <Text>Loading</Text>
              )}
            </View>

            <View style={{marginBottom: moderateScaleVertical(5)}}>
              {apiDATA.data && apiDATA.data.length > 0 ? (
                <View style={{marginBottom: moderateScaleVertical(10)}}>
                  <View
                    style={{
                      marginTop: moderateScale(20),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '96%',
                        marginLeft: '1%',
                        marginRight: '1 %',
                      }}>
                      <ImageBackground
                        source={require('../../assets/CompressedTexture3.jpg')}
                        imageStyle={{borderRadius: 10, borderWidth: 2}}
                        style={{
                          height: moderateScale(80),
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: 'black',
                              width: moderateScale(60),
                              height: moderateScaleVertical(60),
                              borderRadius: 70,
                              alignItems: 'center',
                              marginHorizontal: moderateScale(20),
                              justifyContent: 'center',
                              marginLeft: moderateScale(-25),
                            }}>
                            <Text
                              style={{
                                color: '#eec06b',
                                fontSize: textScale(16),
                                fontFamily: 'HurmeGeometricSans1Bold',
                              }}>
                              SPOT
                            </Text>
                          </View>
                          <View
                            style={{
                              marginLeft: moderateScale(-60),
                              flexDirection: 'column',
                            }}>
                            <Text
                              style={{
                                fontSize: textScale(20),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              SILVER SPOT
                            </Text>
                            {/* <Text style={{fontSize:textScale(13)  , color:"black" , fontFamily:"HurmeGeometricSans1Bold" , padding:1}}>SELL PRICE</Text> */}
                          </View>
                          <Text
                            style={{
                              fontSize: textScale(20),
                              color: 'black',
                              fontFamily: 'HurmeGeometricSans1SemiBold',
                            }}>
                            {SpotS.LTP}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              ) : (
                <Text>Loading</Text>
              )}
            </View>

            <View style={{marginBottom: moderateScaleVertical(5)}}>
              {apiDATA.data && apiDATA.data.length > 0 ? (
                <View style={{marginBottom: moderateScaleVertical(10)}}>
                  <View
                    style={{
                      marginTop: moderateScale(20),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '96%',
                        marginLeft: '1%',
                        marginRight: '1 %',
                      }}>
                      <ImageBackground
                        source={require('../../assets/CompressedTexture3.jpg')}
                        imageStyle={{borderRadius: 10, borderWidth: 2}}
                        style={{
                          height: moderateScale(80),
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: 'black',
                              width: moderateScale(60),
                              height: moderateScaleVertical(60),
                              borderRadius: 70,
                              alignItems: 'center',
                              marginHorizontal: moderateScale(20),
                              justifyContent: 'center',
                              marginLeft: moderateScale(-25),
                            }}>
                            <Text
                              style={{
                                color: '#eec06b',
                                fontSize: textScale(12),
                                fontFamily: 'HurmeGeometricSans1Bold',
                              }}>
                              USD/INR
                            </Text>
                          </View>
                          <View
                            style={{
                              marginLeft: moderateScale(-60),
                              flexDirection: 'column',
                            }}>
                            <Text
                              style={{
                                fontSize: textScale(20),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              USD/INR
                            </Text>
                            {/* <Text style={{fontSize:textScale(13)  , color:"black" , fontFamily:"HurmeGeometricSans1Bold" , padding:1}}>SELL PRICE</Text> */}
                          </View>
                          <Text
                            style={{
                              fontSize: textScale(20),
                              color: 'black',
                              fontFamily: 'HurmeGeometricSans1SemiBold',
                            }}>
                            {Dollar.LTP}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              ) : (
                <Text>Loading</Text>
              )}
            </View>

            <View style={{marginBottom: moderateScaleVertical(5)}}>
              {apiDATA.data && apiDATA.data.length > 0 ? (
                <View style={{marginBottom: moderateScaleVertical(10)}}>
                  <View
                    style={{
                      marginTop: moderateScale(20),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '96%',
                        marginLeft: '1%',
                        marginRight: '1 %',
                      }}>
                      <ImageBackground
                        source={require('../../assets/CompressedTexture3.jpg')}
                        imageStyle={{borderRadius: 10, borderWidth: 2}}
                        style={{
                          height: moderateScale(80),
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: 'black',
                              width: moderateScale(60),
                              height: moderateScaleVertical(60),
                              borderRadius: 70,
                              alignItems: 'center',
                              marginHorizontal: moderateScale(20),
                              justifyContent: 'center',
                              marginLeft: moderateScale(-25),
                            }}>
                            <Text
                              style={{
                                color: '#eec06b',
                                fontSize: textScale(16),
                                fontFamily: 'HurmeGeometricSans1Bold',
                              }}>
                              995
                            </Text>
                          </View>
                          <View
                            style={{
                              marginLeft: moderateScale(-60),
                              flexDirection: 'column',
                            }}>
                            <Text
                              style={{
                                fontSize: textScale(20),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              GOLD 995
                            </Text>
                            {/* <Text style={{fontSize:textScale(13)  , color:"black" , fontFamily:"HurmeGeometricSans1Bold" , padding:1}}>SELL PRICE</Text> */}
                          </View>
                          <Text
                            style={{
                              fontSize: textScale(20),
                              color: 'black',
                              fontFamily: 'HurmeGeometricSans1SemiBold',
                            }}>
                            {gold995().toFixed(0)}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              ) : (
                <Text>Loading</Text>
              )}
            </View>

            <View style={{marginBottom: moderateScaleVertical(5)}}>
              {apiDATA.data && apiDATA.data.length > 0 ? (
                <View style={{marginBottom: moderateScaleVertical(10)}}>
                  <View
                    style={{
                      marginTop: moderateScale(20),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '96%',
                        marginLeft: '1%',
                        marginRight: '1 %',
                      }}>
                      <ImageBackground
                        source={require('../../assets/CompressedTexture3.jpg')}
                        imageStyle={{borderRadius: 10, borderWidth: 2}}
                        style={{
                          height: moderateScale(80),
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: 'black',
                              width: moderateScale(60),
                              height: moderateScaleVertical(60),
                              borderRadius: 70,
                              alignItems: 'center',
                              marginHorizontal: moderateScale(20),
                              justifyContent: 'center',
                              marginLeft: moderateScale(-25),
                            }}>
                            <Text
                              style={{
                                color: '#eec06b',
                                fontSize: textScale(16),
                                fontFamily: 'HurmeGeometricSans1Bold',
                              }}>
                              FINE
                            </Text>
                          </View>
                          <View
                            style={{
                              marginLeft: moderateScale(-60),
                              flexDirection: 'column',
                            }}>
                            <Text
                              style={{
                                fontSize: textScale(20),
                                color: 'black',
                                fontFamily: 'HurmeGeometricSans1Bold',
                                padding: 1,
                              }}>
                              GOLD FINE
                            </Text>
                            {/* <Text style={{fontSize:textScale(13)  , color:"black" , fontFamily:"HurmeGeometricSans1Bold" , padding:1}}>SELL PRICE</Text> */}
                          </View>
                          <Text
                            style={{
                              fontSize: textScale(20),
                              color: 'black',
                              fontFamily: 'HurmeGeometricSans1SemiBold',
                            }}>
                            {(gold995() + gold995() * 0.005).toFixed(0)}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              ) : (
                <Text>Loading</Text>
              )}
            </View>
          </View>
        </ScrollView>

        {/* Whatsapp */}
        <View style={{bottom: -40, position: 'absolute', right: 5}}>
          <TouchableOpacity
            onPress={() => changeModalVisible(true)}
            style={styles.HelpButtonAlignment}>
            <View style={styles.icontextAlignment}>
              <Image
                source={require('../../assets/whatsapp-white.png')}
                style={styles.whatsappIcon}
              />
              <Text style={styles.helpText}>Help</Text>
            </View>
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}>
            <SimpleModal
              changeModalVisible={changeModalVisible}
              setData={setData}
            />
          </Modal>
        </View>
        {/* Whatsapp */}

        {/* BottomTabNavigator */}
        <ImageBackground
          source={require('../../assets/CompressedTexture3.jpg')}
          imageStyle={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            alignSelf: 'center',
          }}
          style={{
            height: moderateScaleVertical(50),
            width: moderateScale(370),
            alignSelf: 'center',
            marginBottom: moderateScale(4),
            marginTop: moderateScaleVertical(0),
          }}>
          <View
            style={{
              marginTop: moderateScaleVertical(9),
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Drawer');
              }}>
              <Image
                source={require('../../assets/home.png')}
                style={{
                  width: moderateScale(35),
                  height: moderateScaleVertical(35),
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('cart');
              }}>
              <Image
                source={require('../../assets/cart.png')}
                style={{
                  width: moderateScale(35),
                  height: moderateScaleVertical(35),
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default GoldSilverPrice;

const styles = StyleSheet.create({
  goldenStrip: {
    width: '100%',
    height: 3,
  },
  container: {
    // padding: 15,
    // fontSize: textScale(30),
    marginTop: moderateScaleVertical(20),
    alignItems: 'center',
    alignSelf: 'center',
    // marginBottom:moderateScaleVertical(50),
  },
  container2: {
    // padding: 15,
    // fontSize: textScale(30),
    marginTop: moderateScaleVertical(40),
    alignItems: 'center',
    alignSelf: 'center',
  },
  tableHeader: {
    borderColor: 'black',
  },
  GoldCoinsText: {
    justifyContent: 'center',
    fontSize: textScale(45),
    color: 'black',
    fontWeight: '600',
  },
  flex: {
    marginTop: moderateScaleVertical(30),
    backgroundColor: '#eec06b',
    borderRadius: 20,
    width: '98%',
    alignContent: 'center',
    marginLeft: moderateScale(4.5),
  },
  line: {
    width: '95%',
    height: moderateScaleVertical(1.5),
    // backgroundColor: "#a4a4a4",
    backgroundColor: 'black',
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(15),
  },

  // Whatsapp style

  HelpButtonAlignment: {
    justifyContent: 'center',
    backgroundColor: '#25D366',
    width: moderateScale(110),
    height: moderateScaleVertical(45),
    borderRadius: 40,
    marginBottom: moderateScaleVertical(100),
    // position: "fixed",
  },
  icontextAlignment: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    fontWeight: 'bold',
  },
  // Whatsapp
});
