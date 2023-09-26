import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert
} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  height,
  textScale,
} from '../utils/responsive';
import SimpleModal from './SimpleModal';
import axios from 'axios';
import MarqueeView from 'react-native-marquee-view';
// import { useSelector, useDispatch } from 'react-redux';
import {getUserDetailsActionCreator} from '../redux/Formdetails/formDetails.action-creator';
import {mockedRequestAnimationFrame} from 'react-native-reanimated/lib/typescript/reanimated2/utils';
import Cart from './Cart';

const ConfirmOrder = ({navigation}) => {
  const [CartData, setCartData] = useState([]);
  const [TentativePrice, setTentativePrice] = useState(0);
  const [ShowCoupon, setShowCoupon] = useState(false);
  const [Percent, setPercent] = useState(0);
  const [TentativeTextValue, setTentativeTextValue] = useState(0);
  const [Coupon, setCoupon] = useState('');
  const [FinalTentativePrice, setFinalTentativePrice] = useState(0);
  const [Fmaking, setFmaking] = useState([]);

  const {cart, cartDetails} = useSelector(state => state.reducer);

  // console.log(`confirm order`, cart);

  // const dispatch = useDispatch();
  const {total, grandTotal} = cartDetails;

  var totalWeight = 0;
  var ftotalWeight = 0;
  var fTentativePrice = 0;

  // API FOR PREMIUM PRICE

  const [premiumData, setPremiumData] = useState([]);
  const PREMIUM_API_URL = 'https://jewellery-bliss.onrender.com/api/premium';

  const fetchPremiumData = async () => {
    try {
      const response = await axios.get(PREMIUM_API_URL);
      setPremiumData(response.data);
      ``;
      // console.log("helllllllllloooooo", response.data, )
    } catch (error) {
      console.error('Error fetching premium data:', error);
    }
  };

  useEffect(() => {
    fetchPremiumData();
  }, []);

  useEffect(() => {
    getTentativePrice().then(data => {
      console.log('TENTATIVE PRICE RETURN', parseFloat(data[0]));
      const total = parseFloat(data[0]);
      if (total > 1000000 && total < 2500000) {
        setPercent('10');
        setTentativeTextValue('10');
        setShowCoupon(true);
      } else if (total > 2500000) {
        setPercent('20');
        setTentativeTextValue('25');
        setShowCoupon(true);
      }
    });
  }, [cart]);

  async function getTentativePrice() {
    var arr = [];
    return cart?.map(cartItem => {
      // let goldprice = parseFloat(firstData?.SELL);
      let goldprice = 1000000;
      // console.log("MCX Gold Buy price = ", firstData?.SELL)
      console.log('MCX Gold Buy price = ', goldprice);
      {
        // /* console.log(typeof goldprice) */
      }

      // let PremiumCharges = premiumData[0]?.premiumcharges;
      let PremiumCharges = 100;
      console.log('Premium Charges type =', PremiumCharges);

      let totalOFGoldandPremium = (goldprice + PremiumCharges) / 10;
      console.log(
        'MCX Gold Buy price + Premium Charges =',
        totalOFGoldandPremium,
      );

      let threePercentGstofTotal = (totalOFGoldandPremium * 3) / 100;
      console.log(
        '3 % GST Of ( MAX of Gold  + premium Charges) = ',
        threePercentGstofTotal,
      );

      const Gold995 = threePercentGstofTotal + totalOFGoldandPremium;
      console.log(
        'Gold 995 price including 3 % GST =',
        Gold995,
        typeof threePercentGstofTotal,
      );

      {
        /* Fine Gold Rate */
      }
      console.log('------Fine Gold Rate');
      let fivePercentOfGold995 = (Gold995 * 0.5) / 100;
      console.log('0.5 % of GOLD 995 =', fivePercentOfGold995);

      const GoldFineRate = Gold995 + fivePercentOfGold995;
      console.log(
        'Fine Gold rates = GOLD 995 + (0.5 % of GOLD 995) =',
        GoldFineRate,
      );

      console.log('------Net Gold Weight');

      {
        /* weight of a product */
      }
      let productWeight = cartItem.item.weight;

      console.log('Weight of a product =', productWeight);

      let WeightintoProduct = cartItem.item.weight * cartItem.count;
      console.log('Quantity of Product', WeightintoProduct);

      const purity =
        cartItem.item.purity == 18
          ? 75.5
          : cartItem.item.purity == 20
          ? 83.5
          : cartItem.item.purity == 22
          ? 92
          : 0;
      console.log('Purity OF Product =', purity);

      {
        /* let making = cartItem.item?.mcharges?.replace('%', '') */
      }

      //   console.log(discountPercent);
      let making = cartItem.item.mcharges;

      console.log('Making Charges =', making);

      {
        /* let NetGoldWeight = (purity + making) / 100 * productWeight; */
      }
      let NetGoldWeight = ((purity + making) / 100) * WeightintoProduct;
      console.log(
        'Net Gold Weight = (purity + making) / 100 * Product Weight =',
        NetGoldWeight,
      );

      totalWeight += parseFloat(NetGoldWeight.toFixed(2));
      console.log('Total of Net Gold Weight =', totalWeight);

      let TentativePrice = (totalWeight * GoldFineRate).toFixed(2);
      console.log(
        'Tentative Price = Total of Net Gold Weight * Fine Gold Rate =',
        TentativePrice,
      );
      setTentativePrice(TentativePrice);
      arr.push({
        NetGoldWeight: NetGoldWeight,
        Gold995: Gold995,
        GoldFineRate: GoldFineRate,
        purity: purity,
        WeightintoProduct: WeightintoProduct,
      });
      setCartData(arr);
      return TentativePrice;
    });
  }


  const handleApplyButtonPress = () => {
    var arr = [];
    if (Coupon === 'DISCOUNT20') {
      if (TentativePrice >= 2500000) {
        cart?.map((cartItem, index) => {
          let fmaking =
            cartItem.item.mcharges - 0.2 * cartItem.item.mcharges;

          arr.push(fmaking);

          let fNetGoldWeight =
            ((CartData[0]?.purity + fmaking) / 100) *
            CartData[index]?.WeightintoProduct;

          ftotalWeight += parseFloat(fNetGoldWeight.toFixed(2));

          let fTentative = (
            ftotalWeight * CartData[index]?.GoldFineRate
          ).toFixed(2);

          fTentativePrice = fTentative;
        });
        console.log('AFTER DISCOUNT VALUE', fTentativePrice);
        setFinalTentativePrice(fTentativePrice);
        setFmaking(arr);
      } else {
        Alert.alert('Please add more items to apply this coupon');
      }
    } else if (Coupon === 'DISCOUNT10') {
      if (TentativePrice >= 1000000 && TentativePrice < 2500000) {

        cart?.map((cartItem, index) => {
          let fmaking =
            cartItem.item.mcharges - 0.1 * cartItem.item.mcharges;

          arr.push(fmaking);

          let fNetGoldWeight =
            ((CartData[0]?.purity + fmaking) / 100) *
            CartData[index]?.WeightintoProduct;

          ftotalWeight += parseFloat(fNetGoldWeight.toFixed(2));

          let fTentative = (
            ftotalWeight * CartData[index]?.GoldFineRate
          ).toFixed(2);

          fTentativePrice = fTentative;
        });
        console.log('AFTER DISCOUNT VALUE', fTentativePrice);
        setFinalTentativePrice(fTentativePrice);
        setFmaking(arr);
      } else {
        Alert.alert('Invalid Coupon Code. Please Try Another Coupon');
      }
    } else {
      Alert.alert('Invalid Coupon');
    }
  };
  // MCX PRICE API

  const [apiDATA, setAPIdata] = useState([]);
  const API_URL = 'https://rappid.in/apis/mcx.php?key=9015790532';
  const firstData = apiDATA.data && apiDATA.data[0];
  const secondData = apiDATA.data && apiDATA.data[2];
  // console.log('heloooo', firstData);

  const fetchAPIData = async () => {
    try {
      const response = await axios.get(API_URL);
      setAPIdata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchAPIData();
    const interval = setInterval(fetchAPIData, 5 * 1000);

    return () => {
      clearInterval(interval);
      console.log('APIcalled after every % seconds');
    };
  }, []);

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
        source={require('../assets/background-image2.png')}>
        <View>
          <Image
            source={require('../assets/GOLDEN-STRIP.png')}
            style={styles.goldenStrip}
          />
        </View>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#E8E8E8',
              alignSelf: 'center',
              width: moderateScale(380),
              borderRadius: 20,
              marginTop: moderateScaleVertical(20),
            }}>
            <View
              style={{
                marginTop: moderateScaleVertical(9),
                padding: 5,
                width: moderateScale(370),
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold' ,width:moderateScale(60), borderWidth:1 ,borderColor:"red", padding:5}}>Product</Text>
                <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(50),borderWidth:1 ,borderColor:"red", paddingRight:10 , paddingLeft:10,paddingTop:5 }}>QTY</Text>
                <Text style={{color: 'black' , fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(50), borderWidth:1 ,borderColor:"red",paddingRight:5 ,paddingLeft:5 ,paddingTop:5}}>Purity</Text>
                <Text style={{color: 'black' , fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(60), borderWidth:1 ,borderColor:"red",paddingRight:5, paddingLeft:15 ,paddingTop:5}}>Wgt.</Text>
                <Text style={{color: 'black' , fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(75) , borderWidth:1 ,borderColor:"red",paddingRight:10,paddingLeft:10,paddingTop:5}}>Making</Text>
                <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(60), borderWidth:1 ,borderColor:"red",paddingLeft:5, paddingTop:5}}>Nt Gold Wgt</Text>
              </View>

              {cart?.length && CartData.length > 0 && TentativePrice !== 0 ? (
                cart?.map((cartItem, index) => {
                  {/* let fmaking =
                    cartItem.item.mcharges -
                    discountPercent * cartItem.item.mcharges;

                  let fNetGoldWeight =
                    ((CartData[0]?.purity + fmaking) / 100) *
                    CartData[index]?.WeightintoProduct;

                  ftotalWeight += parseFloat(fNetGoldWeight.toFixed(2));

                  let fTentative = (
                    ftotalWeight * CartData[index]?.GoldFineRate
                  ).toFixed(2);

                  fTentativePrice = fTentative; */}
                  return (
                    <View style={{ marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(-5)}}>
                      <View style={{  marginTop: 10, flexDirection: 'row', }}>
                        <Text style={{color: 'black' ,width:moderateScale(60), borderWidth:1 ,borderColor:"green"}}>{cartItem.item.name}</Text>
                        <Text style={{color: 'black' ,width:moderateScale(50),borderWidth:1 ,borderColor:"green",padding:10 ,paddingTop:5 ,}}>{cartItem.count}</Text>
                        <Text style={{color: 'black' ,width:moderateScale(50), borderWidth:1 ,borderColor:"green"}}>{cartItem.item.purity} KT</Text>
                        <Text style={{color: 'black' , width:moderateScale(60),borderWidth:1 ,borderColor:"green"}}>{cartItem.item.weight} g</Text>
                        <Text style={{ textDecorationLine: FinalTentativePrice === 0  ? 'none' : 'line-through', color: 'black',borderWidth:1 ,borderColor:"green" ,width:moderateScale(75) }}>{cartItem.item.mcharges}
                        </Text>{FinalTentativePrice === 0 ||   Fmaking.length === 0 ? null : (<Text style={{color: 'black'}}>/ {Fmaking[index]} </Text>
                        )}<Text style={{color: 'black' ,borderWidth:1 ,borderColor:"green"}}>{CartData[index]?.NetGoldWeight?.toFixed(2)} g</Text>
                      </View>
                    </View>
                  );
                })
              ) : (
                <></>
              )}
              <View
                style={{
                  backgroundColor: '#A8A8A8',
                  width: moderateScale(380),
                  height: moderateScaleVertical(20),
                  padding: 2,
                  alignSelf: 'center',
                }}>
                <MarqueeView speed={0.1}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginHorizontal: moderateScale(20),
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: textScale(12),
                        fontFamily: 'HurmeGeometricSans1',
                      }}>
                      Gold995 rate :{' '}
                      {Math.round(CartData[0]?.Gold995).toLocaleString(
                        'en-IN',
                        {
                          maximumFractionDigits: 2,
                          style: 'currency',
                          currency: 'INR',
                        },
                      )}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: textScale(12),
                        fontFamily: 'HurmeGeometricSans1',
                      }}>
                      {' '}
                      Fine Gold Rate :
                      {Math.round(CartData[0]?.GoldFineRate).toLocaleString(
                        'en-IN',
                        {
                          maximumFractionDigits: 2,
                          style: 'currency',
                          currency: 'INR',
                        },
                      )}
                    </Text>
                  </View>
                </MarqueeView>
              </View>

              <View
                style={{
                  marginTop: moderateScaleVertical(5),
                  marginLeft: moderateScale(2),
                  marginBottom: moderateScaleVertical(10),
                }}>
                <Text
                  style={{
                    fontSize: textScale(14),
                    fontFamily: 'HurmeGeometricSans1SemiBold',
                    color: 'black',
                    justifyContent: 'flex-start',
                    marginLeft: moderateScale(8),
                  }}>
                  Tentative price:
                </Text>
                <View
                  style={{flexDirection: 'row', marginLeft: moderateScale(8)}}>
                  {FinalTentativePrice === 0 ? null : (
                    <Text
                      style={{
                        justifyContent: 'flex-start',
                        marginLeft: moderateScale(8),
                        color: 'black',
                      }}>
                      Before Discount :{' '}
                    </Text>
                  )}
                  <Text
                    style={{
                      textDecorationLine:
                      FinalTentativePrice === 0 ? 'none' : 'line-through',
                      color: 'black',
                    }}>
                    {Math.round(parseFloat(TentativePrice)).toLocaleString(
                      'en-IN',
                      {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR',
                      },
                    )}
                  </Text>
                </View>
                {FinalTentativePrice === 0 ? null : (
                  <Text
                    style={{
                      justifyContent: 'flex-start',
                      marginLeft: moderateScale(8),
                      color: 'black',
                    }}>
                    After Discount :
                    {Math.round(parseFloat(FinalTentativePrice)).toLocaleString(
                      'en-IN',
                      {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR',
                      },
                    )}
                  </Text>
                )}
              </View>
            </View>
          </View>

          <View>
            <View style={styles.containeraa}>
            <View>
              <TextInput
                style={styles.inputaa}
                placeholder="Enter Coupon"
                onChangeText={coupon => setCoupon(coupon)}
              />
              </View>
              <View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleApplyButtonPress}>
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.WastageChartButton}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('thank');
                // console.log(CartData, cart);
              }}>
              <Text style={styles.buttontext}>CONFIRM ORDER</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProductLogoBackground}>
            <Text
              style={{
                // alignSelf:"center",
                justifyContent: 'flex-start',
                marginLeft: moderateScale(8),
                marginTop: moderateScaleVertical(15),
                fontSize: textScale(20),
                fontFamily: 'HurmeGeometricSans1SemiBold',
              }}>
              Disclaimer :
            </Text>
            <Text
              style={{
                marginLeft: moderateScale(8),
                justifyContent: 'flex-start',
                // alignSelf:"center",
                marginTop: moderateScaleVertical(6),
                fontSize: textScale(14),
                fontFamily: 'HurmeGeometricSans1SemiBold',
              }}>
              For gold price inquiries and booking, please contact us at
              Jewellery Bliss via call or WhatsApp{' '}
            </Text>
          </View>

          <ImageBackground
            style={styles.disclaimer}
            imageStyle={{borderRadius: 20}}
            source={require('../assets/CompressedTexture3.jpg')}>
            <View style={{marginTop: moderateScaleVertical(15)}}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  marginLeft: moderateScale(10),
                }}>
                <Text
                  style={{
                    fontSize: textScale(17),
                    color: 'black',
                    fontFamily: 'HurmeGeometricSans1SemiBold',
                  }}>
                  Bank Details
                </Text>
                <Text
                  style={{
                    fontSize: textScale(14),
                    color: 'black',
                    fontFamily: 'HurmeGeometricSans1SemiBold',
                    marginVertical: moderateScaleVertical(2),
                  }}>
                  {' '}
                  To initiate the order processing, a payment of 15% on the bank
                  details mentioned below
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: moderateScaleVertical(3),
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    marginVertical: moderateScaleVertical(5),
                    justifyContent: 'flex-start',
                    marginLeft: moderateScale(10),
                  }}>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    Bank Name
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    A/C No.
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    IFSC Code
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    A/c holder name
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginVertical: moderateScaleVertical(5),
                  }}>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    {' '}
                    :{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    {' '}
                    :{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    {' '}
                    :{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    {' '}
                    :{' '}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginVertical: moderateScaleVertical(5),
                  }}>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1 ',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    ICICI
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1 ',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    629205034031
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1 ',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    ICIC0006292
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      color: 'black',
                      fontFamily: 'HurmeGeometricSans1 ',
                      marginVertical: moderateScaleVertical(2),
                    }}>
                    Adinath Chain and Jewellers{'\n'}E-Comm LLP
                  </Text>
                </View>
              </View>

              <View style={styles.line}></View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: moderateScaleVertical(5),
                  justifyContent: 'flex-start',
                  marginLeft: moderateScale(10),
                }}>
                <Text style={styles.disclaimerText}>Disclaimer : </Text>
                <Text style={styles.disclaimerTextValue}>
                  Order will Varied order processing due to{'\n'}
                  productavailability, customization, and {'\n'}volume , Thank
                  youfor your patience.
                </Text>
              </View>
            </View>
          </ImageBackground>

          <View>
            <Text
              style={{
                fontSize: textScale(30),
                color: 'black',
                alignSelf: 'center',
                fontFamily: 'HurmeGeometricSans1SemiBold',
                marginTop: moderateScaleVertical(10),
                marginBottom: moderateScaleVertical(10),
              }}>
              OR
            </Text>
            <Text
              style={{
                fontSize: textScale(15),
                color: 'black',
                alignSelf: 'center',
                fontFamily: 'HurmeGeometricSans1SemiBold',
                marginTop: moderateScaleVertical(10),
                marginBottom: moderateScaleVertical(10),
              }}>
              SCAN THE CODE
            </Text>
          </View>

          <View>
            {/* <Image style={{ marginTop:20,  alignSelf: "center", width: moderateScale(380), marginBottom: moderateScaleVertical(60), borderRadius: 20 }} source={require("../assets/ClientQRcode.jpeg")} /> */}
          </View>

          <View
            style={{
              marginBottom: moderateScaleVertical(50),
              backgroundColor: '#E8E8E8',
              width: moderateScale(380),
              alignSelf: 'center',
              borderRadius: 20,
              height: moderateScaleVertical(300),
              marginTop: moderateScaleVertical(0),
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginVertical: moderateScaleVertical(0),
                marginTop: moderateScaleVertical(20),
              }}>
              <Image
                style={{
                  alignSelf: 'center',
                  width: moderateScale(200),
                  height: moderateScaleVertical(200),
                  marginBottom: moderateScaleVertical(10),
                  borderRadius: 5,
                }}
                source={require('../assets/HDqrCode.jpeg')}
              />
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      fontFamily: 'HurmeGeometricSans1Bold',
                      color: 'black',
                    }}>
                    Merchant Name
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      fontFamily: 'HurmeGeometricSans1Bold',
                      color: 'black',
                      marginTop: moderateScaleVertical(25),
                    }}>
                    Mobile Number
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      color: 'black',
                    }}>
                    {' '}
                    :{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      color: 'black',
                      marginTop: moderateScaleVertical(25),
                    }}>
                    {' '}
                    :{' '}
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      color: 'black',
                    }}>
                    M/S ADINATH CHAIN AND {'\n'}JEWELLERS E-Comm LLP{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(14),
                      fontFamily: 'HurmeGeometricSans1SemiBold',
                      color: 'black',
                      marginTop: moderateScaleVertical(12),
                    }}>
                    9654511612
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* </View> */}
        </ScrollView>

        {/* BottomTabNavigator */}
        <ImageBackground
          source={require('../assets/CompressedTexture3.jpg')}
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
                source={require('../assets/home.png')}
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
                source={require('../assets/cart.png')}
                style={{
                  width: moderateScale(35),
                  height: moderateScaleVertical(35),
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* BottomTabNavigator end */}

        {/* Whatsapp start */}
        <View
          style={{
            bottom: moderateScaleVertical(-42),
            position: 'absolute',
            right: moderateScale(5),
          }}>
          <TouchableOpacity
            onPress={() => changeModalVisible(true)}
            style={styles.HelpButtonAlignment}>
            <View style={styles.icontextAlignment}>
              <Image
                source={require('../assets/whatsapp-white.png')}
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
        {/* Whatsapp end */}

        {/* Discount Modal */}
        {/* <Modal visible={ShowCoupon} transparent style={{height: 300}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              // borderWidth: 1,
              // borderColor: 'red',
            }}>
            <View
              style={{
                backgroundColor: 'gray',
                width: moderateScale(350),
                height: moderateScaleVertical(50),
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: moderateScaleVertical(30),
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: moderateScale(350),
                }}>
                You are now avail for {Percent}% discount as your order is above{' '}
                {TentativeTextValue}
                Lakh
              </Text>
            </View>
            <View style={{marginTop: moderateScaleVertical(30)}}>
              <TouchableOpacity
                onPress={() => {
                  setShowCoupon(false);
                }}>
                <View
                  style={{
                    backgroundColor: 'gray',
                    width: moderateScale(70),
                    height: moderateScaleVertical(50),
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: textScale(20), alignSelf: 'center'}}>
                    OK
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({
  goldenStrip: {
    width: '100%',
    height: 3,
  },
  disclaimer: {
    alignSelf: 'center',
    width: moderateScale(380),
    height: moderateScaleVertical(270),
    alignSelf: 'center',
    marginTop: moderateScaleVertical(20),
    borderRadius: 15,
    alignItems: 'center',
  },
  line: {
    marginTop: moderateScaleVertical(10),
    width: moderateScale(380),
    // marginRight: moderateScale(20),
    height: moderateScaleVertical(1),
    backgroundColor: '#a4a4a4',
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  Productline: {
    marginTop: moderateScaleVertical(10),
    width: '95%',
    // marginRight: moderateScale(20),
    height: moderateScaleVertical(0.1),
    backgroundColor: '#a4a4a4',
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  disclaimerText: {
    fontSize: textScale(14),
    color: 'black',
    fontFamily: 'HurmeGeometricSans1SemiBold',
  },
  disclaimerTextValue: {
    fontSize: textScale(14),
    color: 'black',
    fontFamily: 'HurmeGeometricSans1SemiBold',
    marginVertical: moderateScaleVertical(2),
  },
  // disclaimerDummyText: {
  //     color: " opens everytimeblack",
  //     fontSize: textScale(18),
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginLeft: moderateScale(10),
  //     // marginTop: moderateScaleVertical(12),
  //     color: "black",
  //     fontWeight: "300"
  // },
  WastageChartButton: {
    marginTop: moderateScaleVertical(20),
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(160),
    justifyContent: 'center',
    height: moderateScaleVertical(50),
    alignSelf: 'center',
    // marginBottom: moderateScaleVertical(20)
  },
  buttontext: {
    fontSize: textScale(14),
    color: '#eec06b',
    fontWeight: 'bold',
  },
  bankImage: {
    width: moderateScale(80),
    height: moderateScaleVertical(80),
    marginTop: moderateScaleVertical(25),
  },

  // Whatsapp style

  HelpButtonAlignment: {
    justifyContent: 'center',
    backgroundColor: '#25D366',
    width: moderateScale(90),
    height: moderateScaleVertical(40),
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
  ProductLogoBackground: {
    backgroundColor: '#E8E8E8',
    marginTop: moderateScaleVertical(20),
    width: moderateScale(380),
    height: moderateScaleVertical(100),
    alignSelf: 'center',
    borderRadius: 20,
  },
  containeraa: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop:moderateScaleVertical(20),
    flexDirection:"row",
    justifyContent:"space-around"
  },
  inputaa: {
    width: moderateScale(250),
    height: moderateScaleVertical(40),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'gold',
    padding: 10,
    borderRadius: 5,
    width:moderateScale(80),
    height:moderateScaleVertical(40)
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
