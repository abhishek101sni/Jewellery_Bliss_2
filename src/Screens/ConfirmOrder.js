// import React, {useState, useEffect} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import { View, Text, ImageBackground, Modal, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';
// import { moderateScale, moderateScaleVertical, height, textScale} from '../utils/responsive';
// import SimpleModal from './SimpleModal';
// import axios from 'axios';
// import MarqueeView from 'react-native-marquee-view';

// const ConfirmOrder = ({navigation}) => {
//   const [CartData, setCartData] = useState([]);
//   const [TentativePrice, setTentativePrice] = useState(0);
//   const [ShowCoupon, setShowCoupon] = useState(false);
//   const [Percent, setPercent] = useState(0);
//   const [TentativeTextValue, setTentativeTextValue] = useState(0);
//   const [Coupon, setCoupon] = useState('');
//   const [FinalTentativePrice, setFinalTentativePrice] = useState(0);
//   const [Fmaking, setFmaking] = useState([]);
//   const [premiumData, setPremiumData] = useState(null);

//   const {cart, cartDetails} = useSelector(state => state.reducer);

//   // console.log(`confirm order`, cart);

//   // const dispatch = useDispatch();
//   const {total, grandTotal} = cartDetails;

//   var totalWeight = 0;
//   var ftotalWeight = 0;
//   var fTentativePrice = 0;

//   // API FOR PREMIUM PRICE

//   const PREMIUM_API_URL = 'https://jewellery-bliss.onrender.com/api/premium';

//   const fetchPremiumData = async () => {
//     try {
//       const response = await axios.get(PREMIUM_API_URL);
//       setPremiumData(response.data);
//       console.log("$$$$$$$$$$$$$$$$$$", response.data);
//     } catch (error) {
//       console.error('Error fetching premium data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPremiumData();
//   }, []);

//   useEffect(() => {
//     getTentativePrice().then(data => {
//       console.log('TENTATIVE PRICE RETURN', parseFloat(data[0]));
//       const total = parseFloat(data[0]);
//       if (total > 1000000 && total < 2500000) {
//         setPercent('10');
//         setTentativeTextValue('10');
//         setShowCoupon(true);
//       } else if (total > 2500000) {
//         setPercent('20');
//         setTentativeTextValue('25');
//         setShowCoupon(true);
//       }
//     });
//   }, [cart, premiumData]);

//   async function getTentativePrice() {
//     var arr = [];
//     return cart?.map(cartItem => {
//       // let goldprice = parseFloat(firstData?.SELL);
//       let goldprice = 58568;
//       // console.log("MCX Gold Buy price = ", firstData?.SELL)
//       console.log('MCX Gold Buy price = ', goldprice);
//       {
//         // /* console.log(typeof goldprice) */
//       }

//       let PremiumCharges = premiumData[0]?.premiumcharges;
//     //   let PremiumCharges = 100;
//       console.log('Premium Charges type =', PremiumCharges);

//       let totalOFGoldandPremium = (goldprice + PremiumCharges) / 10;
//       console.log(
//         'MCX Gold Buy price + Premium Charges =',
//         totalOFGoldandPremium,
//       );

//       let threePercentGstofTotal = (totalOFGoldandPremium * 3) / 100;
//       console.log(
//         '3 % GST Of ( MAX of Gold  + premium Charges) = ',
//         threePercentGstofTotal,
//       );

//       const Gold995 = threePercentGstofTotal + totalOFGoldandPremium;
//       console.log(
//         'Gold 995 price including 3 % GST =',
//         Gold995,
//         typeof threePercentGstofTotal,
//       );

//       {
//         /* Fine Gold Rate */
//       }
//       console.log('------Fine Gold Rate');
//       let fivePercentOfGold995 = (Gold995 * 0.5) / 100;
//       console.log('0.5 % of GOLD 995 =', fivePercentOfGold995);

//       const GoldFineRate = Gold995 + fivePercentOfGold995;
//       console.log(
//         'Fine Gold rates = GOLD 995 + (0.5 % of GOLD 995) =',
//         GoldFineRate,
//       );

//       console.log('------Net Gold Weight');

//       {
//         /* weight of a product */
//       }
//       let productWeight = cartItem.item.weight;

//       console.log('Weight of a product =', productWeight);

//       let WeightintoProduct = cartItem.item.weight * cartItem.count;
//       console.log('Quantity of Product', WeightintoProduct);

//       const purity =
//         cartItem.item.purity == 18
//           ? 75.5
//           : cartItem.item.purity == 20
//           ? 83.5
//           : cartItem.item.purity == 22
//           ? 92
//           : 0;
//       console.log('Purity OF Product =', purity);

//       {
//         /* let making = cartItem.item?.mcharges?.replace('%', '') */
//       }

//       //   console.log(discountPercent);
//       let making = cartItem.item.mcharges;

//       console.log('Making Charges =', making);

//       {
//         /* let NetGoldWeight = (purity + making) / 100 * productWeight; */
//       }
//       let NetGoldWeight = ((purity + making) / 100) * WeightintoProduct;
//       console.log(
//         'Net Gold Weight = (purity + making) / 100 * Product Weight =',
//         NetGoldWeight,
//       );

//       totalWeight += parseFloat(NetGoldWeight.toFixed(2));
//       console.log('Total of Net Gold Weight =', totalWeight);

//       let TentativePrice = (totalWeight * GoldFineRate).toFixed(2);
//       console.log(
//         'Tentative Price = Total of Net Gold Weight * Fine Gold Rate =',
//         TentativePrice,
//       );
//       setTentativePrice(TentativePrice);
//       arr.push({
//         NetGoldWeight: NetGoldWeight,
//         Gold995: Gold995,
//         GoldFineRate: GoldFineRate,
//         purity: purity,
//         WeightintoProduct: WeightintoProduct,
//       });
//       setCartData(arr);
//       return TentativePrice;
//     });
//   }


//   const handleApplyButtonPress = () => {
//     var arr = [];
//     if (Coupon === 'JBLISS20') {
//       if (TentativePrice >= 2500000) {
//         cart?.map((cartItem, index) => {
//           let fmaking =
//             cartItem.item.mcharges - 0.2 * cartItem.item.mcharges;

//           arr.push(fmaking);

//           let fNetGoldWeight =
//             ((CartData[0]?.purity + fmaking) / 100) *
//             CartData[index]?.WeightintoProduct;

//           ftotalWeight += parseFloat(fNetGoldWeight.toFixed(2));

//           let fTentative = (
//             ftotalWeight * CartData[index]?.GoldFineRate
//           ).toFixed(2);

//           fTentativePrice = fTentative;
//         });
//         console.log('AFTER DISCOUNT VALUE', fTentativePrice);
//         setFinalTentativePrice(fTentativePrice);
//         setFmaking(arr);
//       } else {
//         Alert.alert('Please add more items to apply this coupon');
//       }
//     } else if (Coupon === 'JBLISS10') {
//       if (TentativePrice >= 1000000 && TentativePrice < 2500000) {

//         cart?.map((cartItem, index) => {
//           let fmaking =
//             cartItem.item.mcharges - 0.1 * cartItem.item.mcharges;

//           arr.push(fmaking);

//           let fNetGoldWeight =
//             ((CartData[0]?.purity + fmaking) / 100) *
//             CartData[index]?.WeightintoProduct;

//           ftotalWeight += parseFloat(fNetGoldWeight.toFixed(2));

//           let fTentative = (
//             ftotalWeight * CartData[index]?.GoldFineRate
//           ).toFixed(2);

//           fTentativePrice = fTentative;
//         });
//         console.log('AFTER DISCOUNT VALUE', fTentativePrice);
//         setFinalTentativePrice(fTentativePrice);
//         setFmaking(arr);
//       } else {
//         Alert.alert('Invalid Coupon Code. Please Try Another Coupon');
//       }
//     } else {
//       Alert.alert('Invalid Coupon');
//     }
//   };
//   // MCX PRICE API

//   const [apiDATA, setAPIdata] = useState([]);
//   const API_URL = 'https://rappid.in/apis/mcx.php?key=9015790532';
//   const firstData = apiDATA.data && apiDATA.data[0];
//   const secondData = apiDATA.data && apiDATA.data[2];
//   // console.log('heloooo', firstData);

//   const fetchAPIData = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setAPIdata(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAPIData();
//     const interval = setInterval(fetchAPIData, 5 * 1000);

//     return () => {
//       clearInterval(interval);
//       console.log('APIcalled after every % seconds');
//     };
//   }, []);

//   // WhatsApp
//   const [isModalVisible, setisModalVisible] = useState(false);
//   const [chooseData, setChooseData] = useState();

//   const changeModalVisible = bool => {
//     setisModalVisible(bool);
//   };

//   const setData = data => {
//     setChooseData(data);
//   };
//   // WhatsApp

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <ImageBackground style={{flex: 1}} source={require('../assets/background-image2.png')}>
//         <View>
//           <Image source={require('../assets/GOLDEN-STRIP.png')} style={styles.goldenStrip} />
//         </View>
//         <ScrollView>
//           <View style={{ backgroundColor: '#E8E8E8', alignSelf: 'center', width: moderateScale(370), borderRadius: 20, marginTop: moderateScaleVertical(20)}}>
//             <View style={{ marginTop: moderateScaleVertical(9), padding: 5, width: moderateScale(365),
//               }}>
//               <View style={{flexDirection: 'row', paddingLeft:0 ,paddingRight:0,}}>
//                 <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(60) , padding:5}}>Product</Text>
//                 <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(50) , paddingRight:10 , paddingLeft:10 , paddingTop:5 }}>Qty</Text>
//                 <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(50) , paddingRight:5  , paddingLeft:5  , paddingTop:5 }}>Purity</Text>
//                 <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(60) , paddingRight:5  , paddingLeft:10 , paddingTop:5 }}>Weight</Text>
//                 <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(75) , paddingRight:10 , paddingLeft:10 , paddingTop:5 }}>Making</Text>
//                 <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width:moderateScale(80) , paddingRight:10 , paddingLeft:5  , paddingTop:5 }}>Net Gold {'\n'}  Weight</Text>
//               </View>

//               {cart?.length && CartData.length > 0 && TentativePrice !== 0 ? (
//                 cart?.map((cartItem, index) => {
//                   {/* let fmaking =
//                     cartItem.item.mcharges -
//                     discountPercent * cartItem.item.mcharges;

//                   let fNetGoldWeight =
//                     ((CartData[0]?.purity + fmaking) / 100) *
//                     CartData[index]?.WeightintoProduct;

//                   ftotalWeight += parseFloat(fNetGoldWeight.toFixed(2));

//                   let fTentative = (
//                     ftotalWeight * CartData[index]?.GoldFineRate
//                   ).toFixed(2);

//                   fTentativePrice = fTentative; */}
//                   return (
//                     <View style={{ marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(-5)}}>
//                       <View style={{  marginTop: 10, flexDirection: 'row', }}>
//                         <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1' ,width:moderateScale(60),padding:5}}>{cartItem.item.name}</Text>
//                         <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1', width:moderateScale(50),paddingLeft:18 , paddingTop:5}}>{cartItem.count}</Text>
//                         <Text style={{color: 'black' , fontFamily: 'HurmeGeometricSans1', width:moderateScale(50),paddingRight:5 ,paddingLeft:8 ,paddingTop:5}}>{cartItem.item.purity} KT</Text>
//                         <Text style={{color: 'black' , fontFamily: 'HurmeGeometricSans1', width:moderateScale(60), paddingRight:3, paddingLeft:8 ,paddingTop:5}}>{cartItem.item.weight} g</Text>

//                         <View style={{flexDirection:"row", width: moderateScale(75) }}>
//                            <Text style={{ textDecorationLine: FinalTentativePrice === 0  ? 'none' : 'line-through', color: 'black' , fontFamily: 'HurmeGeometricSans1',paddingRight:0,paddingLeft:14,paddingTop:5}}>{cartItem.item.mcharges}</Text>
//                            <Text style={{paddingTop:5}}></Text>
//                             {FinalTentativePrice === 0 ||   Fmaking.length === 0 ? null : (
//                              <Text style={{color: 'black' , fontFamily: 'HurmeGeometricSans1' ,paddingTop:5 , paddingRight:6 ,paddingLeft:2 }}> / {Fmaking[index]} </Text>
//                              )}
//                         </View>

//                         <Text style={{color: 'black', fontFamily: 'HurmeGeometricSans1', width:moderateScale(100), paddingRight:0 ,paddingLeft:10, paddingTop:5}}>{CartData[index]?.NetGoldWeight?.toFixed(2)} g</Text>
//                       </View>
//                     </View>
//                   );
//                 })
//               ) : (
//                 <></>
//               )}
//               <View style={{ backgroundColor: '#A8A8A8', width: moderateScale(370), height: moderateScaleVertical(20),alignSelf: 'center', marginLeft:moderateScale(5)}}>
//                 <MarqueeView speed={0.2}>
//                   <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: moderateScale(20), height:moderateScaleVertical(20)}}>
//                     <Text style={{ color: 'black', fontSize: textScale(13), fontFamily: 'HurmeGeometricSans1SemiBold', }}>Gold995 Rate : 
//                       {Math.round(CartData[0]?.Gold995).toLocaleString('en-IN',{maximumFractionDigits: 2,style: 'currency',currency: 'INR'})}
//                     </Text>
//                     <Text> | </Text>
//                     <Text style={{color: 'black', fontSize: textScale(13), fontFamily: 'HurmeGeometricSans1SemiBold',}}>Fine Gold Rate : 
//                     {Math.round(CartData[0]?.GoldFineRate).toLocaleString('en-IN',{maximumFractionDigits: 2,style: 'currency',currency: 'INR'})}
//                     </Text>
//                   </View>
//                 </MarqueeView>
//               </View>

//               <View style={{ marginTop: moderateScaleVertical(5), marginBottom: moderateScaleVertical(10)}}>
//                 <Text style={{ fontSize: textScale(14), fontFamily: 'HurmeGeometricSans1SemiBold', color: 'black', justifyContent: 'flex-start', marginLeft: moderateScale(8)}}>
//                   Tentative price:
//                 </Text>

//                 <View style={{flexDirection: 'row', marginLeft: moderateScale(8)}}>

//                   {FinalTentativePrice === 0 ? null : (
//                 <Text style={{ justifyContent: 'flex-start', marginLeft: moderateScale(8), color: 'black', }}>Before Discount : 
//                 </Text> )}
//                   <Text style={{ color: 'black', }}>
//                      {Math.round(parseFloat(TentativePrice)).toLocaleString('en-IN',{maximumFractionDigits: 2,style: 'currency',currency: 'INR',},)}
//                   </Text>
//                 </View>

//                 {FinalTentativePrice === 0 ? null : (
//                   <Text style={{ justifyContent: 'flex-start', marginLeft: moderateScale(8),color: 'black',}}>
//                         After Discount : {Math.round(parseFloat(FinalTentativePrice)).toLocaleString('en-IN', {maximumFractionDigits: 2,style: 'currency',currency: 'INR',},)}
//                   </Text>)}
//               </View>
//             </View>
//           </View>

//           <View>
//             <View style={styles.containeraa}>
//                <View>
//                   <TextInput style={styles.inputaa} placeholder="Enter Coupon code" placeholderTextColor="#C7C7CD" onChangeText={coupon => setCoupon(coupon)}/>
//               </View>
//               <View>
//                 <TouchableOpacity onPress={handleApplyButtonPress} style={styles.logInButtonAlignment}>
//                   <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 10 }}>
//                     <Text style={styles.logInButtonText}>APPLY</Text>
//                   </ImageBackground>
//                 </TouchableOpacity>
//               </View>
//             </View>
           
           
//           </View>

//           <View style={styles.WastageChartButton}>
//             <TouchableOpacity
//               activeOpacity={0.8}
//               onPress={() => {
//                 navigation.navigate('thank');
//                 // console.log(CartData, cart);
//               }}>
//               <Text style={styles.buttontext}>CONFIRM ORDER</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.ProductLogoBackground}>
//             <Text
//               style={{
//                 // alignSelf:"center",
//                 justifyContent: 'flex-start',
//                 marginLeft: moderateScale(8),
//                 marginTop: moderateScaleVertical(15),
//                 fontSize: textScale(20),
//                 fontFamily: 'HurmeGeometricSans1SemiBold',
//                 color:"black"
//               }}>
//               Disclaimer :
//             </Text>
//             <Text
//               style={{
//                 marginLeft: moderateScale(8),
//                 justifyContent: 'flex-start',
//                 // alignSelf:"center",
//                 marginTop: moderateScaleVertical(6),
//                 fontSize: textScale(14),
//                 fontFamily: 'HurmeGeometricSans1SemiBold',
//                 color:"black", marginVertical:moderateScaleVertical(2)
//               }}>
//               For gold price inquiries and booking, please contact{'\n'}us at
//               Jewellery Bliss via call or WhatsApp.
//             </Text>
//           </View>

//           <ImageBackground style={styles.disclaimer} imageStyle={{borderRadius: 20}} source={require('../assets/CompressedTexture3.jpg')}>
//             <View style={{marginTop: moderateScaleVertical(15)}}>
//               <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginLeft: moderateScale(10)}}>
//                 <Text style={{ fontSize: textScale(17), color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold',}}>
//                   Bank Details
//                 </Text>
//                 <Text style={{ fontSize: textScale(14), color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', marginVertical: moderateScaleVertical(2)}}>
//                    To initiate the order processing, a payment of 15% on{'\n'}the bank
//                   details mentioned below
//                 </Text>
//               </View>

//               <View
//                 style={{
//                   flexDirection: 'row',
//                   marginTop: moderateScaleVertical(3),
//                 }}>
//                 <View
//                   style={{
//                     flexDirection: 'column',
//                     marginVertical: moderateScaleVertical(5),
//                     justifyContent: 'flex-start',
//                     marginLeft: moderateScale(10),
//                   }}>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     Bank Name
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     A/C No.
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     IFSC Code
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     A/c holder name
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     flexDirection: 'column',
//                     marginVertical: moderateScaleVertical(5),
//                   }}>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     {' '}
//                     :{' '}
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     {' '}
//                     :{' '}
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     {' '}
//                     :{' '}
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     {' '}
//                     :{' '}
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     flexDirection: 'column',
//                     marginVertical: moderateScaleVertical(5),
//                   }}>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1 ',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     ICICI
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1 ',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     629205034031
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1 ',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     ICIC0006292
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       color: 'black',
//                       fontFamily: 'HurmeGeometricSans1 ',
//                       marginVertical: moderateScaleVertical(2),
//                     }}>
//                     Adinath Chain and Jewellers{'\n'}E-Comm LLP
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.line}></View>

//               <View
//                 style={{
//                   flexDirection: 'row',
//                   marginTop: moderateScaleVertical(5),
//                   justifyContent: 'flex-start',
//                   marginLeft: moderateScale(10),
//                 }}>
//                 <Text style={styles.disclaimerText}>Disclaimer : </Text>
//                 <Text style={styles.disclaimerTextValue}>
//                   Order will Varied order processing due to{'\n'}
//                   productavailability, customization, and {'\n'}volume , Thank
//                   youfor your patience.
//                 </Text>
//               </View>
//             </View>
//           </ImageBackground>

//           <View>
//             <Text
//               style={{
//                 fontSize: textScale(30),
//                 color: 'black',
//                 alignSelf: 'center',
//                 fontFamily: 'HurmeGeometricSans1SemiBold',
//                 marginTop: moderateScaleVertical(10),
//                 marginBottom: moderateScaleVertical(10),
//               }}>
//               OR
//             </Text>
//             <Text
//               style={{
//                 fontSize: textScale(15),
//                 color: 'black',
//                 alignSelf: 'center',
//                 fontFamily: 'HurmeGeometricSans1SemiBold',
//                 marginTop: moderateScaleVertical(10),
//                 marginBottom: moderateScaleVertical(10),
//               }}>
//               SCAN THE CODE
//             </Text>
//           </View>

//           <View>
//             {/* <Image style={{ marginTop:20,  alignSelf: "center", width: moderateScale(380), marginBottom: moderateScaleVertical(60), borderRadius: 20 }} source={require("../assets/ClientQRcode.jpeg")} /> */}
//           </View>

//           <View
//             style={{
//               marginBottom: moderateScaleVertical(50),
//               backgroundColor: '#E8E8E8',
//               width: moderateScale(370),
//               alignSelf: 'center',
//               borderRadius: 20,
//               height: moderateScaleVertical(300),
//               marginTop: moderateScaleVertical(0),
//             }}>
//             <View
//               style={{
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 marginVertical: moderateScaleVertical(0),
//                 marginTop: moderateScaleVertical(20),
//               }}>
//               <Image
//                 style={{
//                   alignSelf: 'center',
//                   width: moderateScale(200),
//                   height: moderateScaleVertical(200),
//                   marginBottom: moderateScaleVertical(10),
//                   borderRadius: 5,
//                 }}
//                 source={require('../assets/SingleQRCODE.jpg')}
//               />
//               <View style={{flexDirection: 'row'}}>
//                 <View style={{flexDirection: 'column'}}>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       fontFamily: 'HurmeGeometricSans1Bold',
//                       color: 'black',
//                     }}>
//                     Merchant Name
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       fontFamily: 'HurmeGeometricSans1Bold',
//                       color: 'black',
//                       marginTop: moderateScaleVertical(25),
//                     }}>
//                     Mobile Number
//                   </Text>
//                 </View>
//                 <View style={{flexDirection: 'column'}}>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       color: 'black',
//                     }}>
//                     {' '}
//                     :{' '}
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       color: 'black',
//                       marginTop: moderateScaleVertical(25),
//                     }}>
//                     {' '}
//                     :{' '}
//                   </Text>
//                 </View>
//                 <View style={{flexDirection: 'column'}}>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       color: 'black',
//                     }}>
//                     M/S ADINATH CHAIN AND {'\n'}JEWELLERS E-Comm LLP{' '}
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: textScale(14),
//                       fontFamily: 'HurmeGeometricSans1SemiBold',
//                       color: 'black',
//                       marginTop: moderateScaleVertical(12),
//                     }}>
//                     9654511612
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           </View>

//           {/* </View> */}
//         </ScrollView>

//         {/* BottomTabNavigator */}
//         <ImageBackground
//           source={require('../assets/CompressedTexture3.jpg')}
//           imageStyle={{
//             borderTopLeftRadius: 15,
//             borderTopRightRadius: 15,
//             borderBottomRightRadius: 15,
//             borderBottomLeftRadius: 15,
//             alignSelf: 'center',
//           }}
//           style={{
//             height: moderateScaleVertical(50),
//             width: moderateScale(370),
//             alignSelf: 'center',
//             marginBottom: moderateScale(4),
//           }}>
//           <View
//             style={{
//               marginTop: moderateScaleVertical(9),
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//             }}>
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate('Drawer');
//               }}>
//               <Image
//                 source={require('../assets/home.png')}
//                 style={{
//                   width: moderateScale(35),
//                   height: moderateScaleVertical(35),
//                 }}
//               />
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate('cart');
//               }}>
//               <Image
//                 source={require('../assets/cart.png')}
//                 style={{
//                   width: moderateScale(35),
//                   height: moderateScaleVertical(35),
//                 }}
//               />
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>
//         {/* BottomTabNavigator end */}

//         {/* Whatsapp start */}
//         <View
//           style={{
//             bottom: moderateScaleVertical(-42),
//             position: 'absolute',
//             right: moderateScale(5),
//           }}>
//           <TouchableOpacity
//             onPress={() => changeModalVisible(true)}
//             style={styles.HelpButtonAlignment}>
//             <View style={styles.icontextAlignment}>
//               <Image
//                 source={require('../assets/whatsapp-white.png')}
//                 style={styles.whatsappIcon}
//               />
//               <Text style={styles.helpText}>Help</Text>
//             </View>
//           </TouchableOpacity>

//           <Modal
//             transparent={true}
//             animationType="fade"
//             visible={isModalVisible}
//             nRequestClose={() => changeModalVisible(false)}>
//             <SimpleModal
//               changeModalVisible={changeModalVisible}
//               setData={setData}
//             />
//           </Modal>
//         </View>
//         {/* Whatsapp end */}

//         {/* Discount Modal */}
//         {/* <Modal visible={ShowCoupon} transparent style={{height: 300}}>
//           <View
//             style={{
//               flex: 1,
//               justifyContent: 'center',
//               backgroundColor: 'rgba(0, 0, 0, 0.7)',
//               // borderWidth: 1,
//               // borderColor: 'red',
//             }}>
//             <View
//               style={{
//                 backgroundColor: 'gray',
//                 width: moderateScale(350),
//                 height: moderateScaleVertical(50),
//                 alignSelf: 'center',
//                 borderRadius: 10,
//                 marginTop: moderateScaleVertical(30),
//               }}>
//               <Text
//                 style={{
//                   justifyContent: 'center',
//                   alignSelf: 'center',
//                   width: moderateScale(350),
//                 }}>
//                 You are now avail for {Percent}% discount as your order is above{' '}
//                 {TentativeTextValue}
//                 Lakh
//               </Text>
//             </View>
//             <View style={{marginTop: moderateScaleVertical(30)}}>
//               <TouchableOpacity
//                 onPress={() => {
//                   setShowCoupon(false);
//                 }}>
//                 <View
//                   style={{
//                     backgroundColor: 'gray',
//                     width: moderateScale(70),
//                     height: moderateScaleVertical(50),
//                     borderRadius: 15,
//                     justifyContent: 'center',
//                     alignSelf: 'center',
//                   }}>
//                   <Text style={{fontSize: textScale(20), alignSelf: 'center'}}>
//                     OK
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal> */}
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// export default ConfirmOrder;

// const styles = StyleSheet.create({
//   goldenStrip: {
//     width: '100%',
//     height: 3,
//   },
//   disclaimer: {
//     alignSelf: 'center',
//     width: moderateScale(370),
//     height: moderateScaleVertical(270),
//     alignSelf: 'center',
//     marginTop: moderateScaleVertical(20),
//     borderRadius: 15,
//     alignItems: 'center',
//   },
//   line: {
//     marginTop: moderateScaleVertical(10),
//     width: moderateScale(370),
//     // marginRight: moderateScale(20),
//     height: moderateScaleVertical(1),
//     backgroundColor: '#a4a4a4',
//     backgroundColor: 'black',
//     alignSelf: 'center',
//   },
//   Productline: {
//     marginTop: moderateScaleVertical(10),
//     width: '95%',
//     // marginRight: moderateScale(20),
//     height: moderateScaleVertical(0.1),
//     backgroundColor: '#a4a4a4',
//     backgroundColor: 'black',
//     alignSelf: 'center',
//   },
//   disclaimerText: {
//     fontSize: textScale(14),
//     color: 'black',
//     fontFamily: 'HurmeGeometricSans1SemiBold',
//   },
//   disclaimerTextValue: {
//     fontSize: textScale(14),
//     color: 'black',
//     fontFamily: 'HurmeGeometricSans1SemiBold',
//     marginVertical: moderateScaleVertical(2),
//   },
//   // disclaimerDummyText: {
//   //     color: " opens everytimeblack",
//   //     fontSize: textScale(18),
//   //     justifyContent: "center",
//   //     alignItems: "center",
//   //     marginLeft: moderateScale(10),
//   //     // marginTop: moderateScaleVertical(12),
//   //     color: "black",
//   //     fontWeight: "300"
//   // },
//   WastageChartButton: {
//     marginTop: moderateScaleVertical(20),
//     backgroundColor: 'black',
//     padding: 15,
//     alignItems: 'center',
//     borderRadius: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: moderateScale(160),
//     justifyContent: 'center',
//     height: moderateScaleVertical(50),
//     alignSelf: 'center',
//     // marginBottom: moderateScaleVertical(20)
//   },
//   buttontext: {
//     fontSize: textScale(14),
//     color: '#eec06b',
//     fontWeight: 'bold',
//   },
//   bankImage: {
//     width: moderateScale(80),
//     height: moderateScaleVertical(80),
//     marginTop: moderateScaleVertical(25),
//   },

//   // Whatsapp style

//   HelpButtonAlignment: {
//     justifyContent: 'center',
//     backgroundColor: '#25D366',
//     width: moderateScale(90),
//     height: moderateScaleVertical(40),
//     borderRadius: 40,
//     marginBottom: moderateScaleVertical(100),
//     // position: "fixed",
//   },
//   icontextAlignment: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingHorizontal: moderateScale(-30),
//     marginHorizontal: moderateScale(15),
//   },
//   whatsappIcon: {
//     width: moderateScale(20),
//     height: moderateScaleVertical(20),
//     // position:"fixed",
//   },
//   helpText: {
//     color: 'white',
//     fontSize: textScale(13),
//     fontWeight: 'bold',
//   },
//   ProductLogoBackground: {
//     backgroundColor: '#E8E8E8',
//     marginTop: moderateScaleVertical(20),
//     width: moderateScale(370),
//     height: moderateScaleVertical(100),
//     alignSelf: 'center',
//     borderRadius: 20,
//   },
//   containeraa: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     marginTop:moderateScaleVertical(20),
//     flexDirection:"row",
//     justifyContent:"space-around"
//   },
//   inputaa: {
//     width: moderateScale(250),
//     height: moderateScaleVertical(40),
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     color:"black",
//     fontFamily: "HurmeGeometricSans1SemiBold",
//     fontSize: textScale(18)

//   },
//   button: {
//     backgroundColor: 'gold',
//     padding: 10,
//     borderRadius: 5,
//     width:moderateScale(80),
//     height:moderateScaleVertical(40)
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   logInButtonAlignment: {
//     alignItems: "center",
// },
// ImageBackgroundStyle: {
//   alignItems: "center",
//   padding: moderateScale(9),
//   width: moderateScale(80),
//   height: moderateScaleVertical(40),
//   justifyContent: 'center',

//   borderRadius: 10,
// },
// logInButtonText: {
//   fontSize: textScale(15),
//   color: "black",
//   marginLeft: moderateScale(0),

//   // paddingTop: moderateScaleVertical(3),
//   fontFamily: "HurmeGeometricSans1SemiBold",

// },
// });

import React, { useContext, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ImageBackground, Modal, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';
import { moderateScale, moderateScaleVertical, height, textScale } from '../utils/responsive';
import SimpleModal from './SimpleModal';
import axios from 'axios';
import MarqueeView from 'react-native-marquee-view';
import { getUserDetailsActionCreator } from '../redux/Formdetails/formDetails.action-creator';
import { AuthContext } from '../Screens/AuthContext';
import { BASE_URL } from "../Screens/config";

const ConfirmOrder = ({ navigation }) => {


    const [CartData, setCartData] = useState([]);
    const [TentativePrice, setTentativePrice] = useState(0);
    const [ShowCoupon, setShowCoupon] = useState(false);
    const [Percent, setPercent] = useState(0);
    const [TentativeTextValue, setTentativeTextValue] = useState(0);
    const [Coupon, setCoupon] = useState('');
    const [FinalTentativePrice, setFinalTentativePrice] = useState(0);
    const [Fmaking, setFmaking] = useState([]);

    // const { cart, cartDetails } = useSelector(state => state.reducer);

    // console.log(confirm order, cart);

    // const dispatch = useDispatch();
    // const { total, grandTotal } = cartDetails;

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
            console.log("helllllllllloooooo", response.data);
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
    }, [cart, premiumData ,firstData?.SELL]);

    async function getTentativePrice() {
        var arr = [];
        return cart?.map(cartItem => {
            let goldprice = parseFloat(firstData?.SELL);
            console.log("MCX Gold Buy price= ", firstData?.SELL)


            let PremiumCharges = premiumData[0]?.premiumcharges;
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
        if (Coupon === 'JBLISS20') {
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
        } else if (Coupon === 'JBLISS10') {
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


    const { logout, userToken, userInfo } = useContext(AuthContext);

    const { payload: user } = userInfo;
    const userDetails = useSelector(state => state.userDetailsData);
    console.log(`qweouqwiwiwiiwiwiwiiwiiwiiwdjie`, userDetails);
    console.log('Confirm Order screen userinfo', userInfo._id);
    const dispatch = useDispatch();
    useEffect(() => {
        if (userDetails && !userDetails.brandName) {
            console.log('Confirm Order screen userinfo', userInfo._id);
            dispatch(getUserDetailsActionCreator(userInfo._id, userToken));
        }
    }, []);
    const { cart, cartDetails } = useSelector((state) => state.reducer);
    // console.log(`confirm order`, cart)
    console.log(`ahskhadshakhsaksadhsdh`, cart)
    // console.log(`tentententen`,)
    // const dispatch = useDispatch();


    const newArray = cart.map(item => ({
        quantity: item.count,
        product: item.id,
    }));

    // console.log(`22`, newArray)

    const requestData = {
        user: userInfo._id, // Replace with the actual user ID
        items: newArray,
        address: {
            addressLine: userDetails.address,
            pincode: userDetails.pincode,
            city: userDetails.locality,
            // area: 'Area Name',
            // country: 'Country Name',
            state: userDetails.state,
        },
        status: 'pending', // Set the desired status
        total: TentativePrice, // Replace with the desired total amount
        // orderId: 'your_order_id', // Replace with a unique order ID
    };
    console.log(`hashjashjjhahjasjhashahshhj`, requestData)

    //     {
    //         Response: { "message": "Order created successfully", "order": { "__v": 0, "_id": "650d7f041e578db610b75f46", "address": { "addressLine": "Delhi", "city": "Saket", "pincode": "123456", "state": "Delhi" }, "createdAt": "2023-09-22T11:48:20.517Z", "items": [[Object]], "orderId": "9083eeb7-9c03-40cb-884f-3f55a11182da", "status": "pending", "timeCreated": "2023-09-22T11:48:20.517Z", "total": 0, "updatedAt": "2023-09-22T11:48:20.517Z", "user": "64e33d5aba910884e21879d9" } }
    //  LOG  11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    //     }

    //     [{ "count": 1, "id": "64ed8c381e47a63d2d6422ab", "item": { "_v": 0, "_id": "64ed8c381e47a63d2d6422ab", "brand": "", "category": "Chain", "color": "", "description": "", "gemstones": [Array], "images": [Array], "material": "Gold", "mcharges": 3.5, "mrp": 1000, "name": "Silky Rope 5.270", "price": 1000, "purity": "18", "reviews": [Array], "size": "", "subcategory": "Silky Rope", "weight": "5.270" } }, { "count": 1, "id": "64ef2597fbc7b247440d2b83", "item": { "_v": 0, "_id": "64ef2597fbc7b247440d2b83", "brand": "", "category": "Plain Jewellery", "color": "", "description": "", "gemstones": [Array], "images": [Array], "material": "Gold", "mcharges": 4.5, "mrp": 1000, "name": "Ladies Ring 3.070", "price": 1000, "purity": "20", "reviews": [Array], "size": "", "subcategory": "Handmade Ladies Ring", "weight": "3.070" } }]

    const checkout = () => {
        axios.post(`${BASE_URL}api/checkouts/direct`, requestData)
            .then(response => {
                // Handle the successful response here
                console.log('Response:', response.data);
                // console.log('111')
                if (response.status === 201) {
                    // Navigate to the next screen
                    navigation.navigate('thank'); // Replace 'NextScreen' with your screen name
                }else{
                  Alert.alert("Error Please Try After Some time")
                }
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
            });
    }


    // MCX PRICE API

    const [apiDATA, setAPIdata] = useState([]);
    // const API_URL = 'https://rappid.in/apis/mcx.php?key=9015790532';
    const API_URL = 'https://rappid.in/apis/mcx.php?key=januskoncepts-9015790532';
    const firstData = apiDATA.data && apiDATA.data[0];
    console.log("firstdataaaa" , firstData)
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
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={require('../assets/background-image2.png')}>
                <View>
                    <Image source={require('../assets/GOLDEN-STRIP.png')} style={styles.goldenStrip} />
                </View>
                <ScrollView>
                    <View style={{ backgroundColor: '#E8E8E8', alignSelf: 'center', width: moderateScale(370), borderRadius: 20, marginTop: moderateScaleVertical(20) }}>
                        <View style={{
                            marginTop: moderateScaleVertical(9), padding: 5, width: moderateScale(365),
                        }}>
                            <View style={{ flexDirection: 'row', paddingLeft: 0, paddingRight: 0, }}>
                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width: moderateScale(67), padding: 5 ,  }}>Product</Text>
                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width: moderateScale(45), paddingRight: 10, paddingLeft: 10, paddingTop: 5 ,  }}>Qty</Text>
                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width: moderateScale(50), paddingRight: 5, paddingLeft: 5, paddingTop: 5, }}>Purity</Text>
                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width: moderateScale(62), paddingRight: 5, paddingLeft: 10, paddingTop: 5, }}>Weight</Text>
                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width: moderateScale(75), paddingRight: 12, paddingLeft: 10, paddingTop: 5, }}>Making</Text>
                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', width: moderateScale(76), paddingRight: 15, paddingLeft: -5, paddingTop: 5 }}>Net Gold{'\n'}Weight</Text>
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
                                        <View style={{ marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(-5) }}>
                                            <View style={{ marginTop: 10, flexDirection: 'row', }}>
                                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1', width: moderateScale(60), padding: 5 }}>{cartItem.item.name}</Text>
                                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1', width: moderateScale(50), paddingLeft: 18, paddingTop: 5 }}>{cartItem.count}</Text>
                                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1', width: moderateScale(50), paddingRight: 5, paddingLeft: 8, paddingTop: 5 }}>{cartItem.item.purity} KT</Text>
                                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1', width: moderateScale(64), paddingRight: 3, paddingLeft: 8, paddingTop: 5 }}>{cartItem.item.weight} g</Text>

                                                <View style={{ flexDirection: "row", width: moderateScale(75) }}>
                                                    <Text style={{ textDecorationLine: FinalTentativePrice === 0 ? 'none' : 'line-through', color: 'black', fontFamily: 'HurmeGeometricSans1', paddingRight: 0, paddingLeft: 14, paddingTop: 5 }}>{cartItem.item.mcharges}</Text>
                                                    <Text style={{ paddingTop: 5 }}></Text>
                                                    {FinalTentativePrice === 0 || Fmaking.length === 0 ? null : (
                                                        <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1', paddingTop: 5, paddingRight: 6, paddingLeft: 2 }}> / {Fmaking[index]} </Text>
                                                    )}
                                                </View>

                                                <Text style={{ color: 'black', fontFamily: 'HurmeGeometricSans1', width: moderateScale(100), paddingRight: 0, paddingLeft: 10, paddingTop: 5 }}>{CartData[index]?.NetGoldWeight?.toFixed(2)} g</Text>
                                            </View>
                                        </View>
                                    );
                                })
                            ) : (
                                <></>
                            )}
                            <View style={{ backgroundColor: '#A8A8A8', width: moderateScale(370), height: moderateScaleVertical(20), alignSelf: 'center', marginLeft: moderateScale(5) }}>
                                <MarqueeView speed={0.2}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: moderateScale(20), height: moderateScaleVertical(20) }}>
                                        <Text style={{ color: 'black', fontSize: textScale(13), fontFamily: 'HurmeGeometricSans1SemiBold', }}>Gold995 Rate :
                                            {Math.round(CartData[0]?.Gold995).toLocaleString('en-IN', { maximumFractionDigits: 2, style: 'currency', currency: 'INR' })}
                                        </Text>
                                        <Text> | </Text>
                                        <Text style={{ color: 'black', fontSize: textScale(13), fontFamily: 'HurmeGeometricSans1SemiBold', }}>Fine Gold Rate :
                                            {Math.round(CartData[0]?.GoldFineRate).toLocaleString('en-IN', { maximumFractionDigits: 2, style: 'currency', currency: 'INR' })}
                                        </Text>
                                    </View>
                                </MarqueeView>
                            </View>

                            <View style={{ marginTop: moderateScaleVertical(5), marginBottom: moderateScaleVertical(10) }}>
                                <Text style={{ fontSize: textScale(15), fontFamily: 'HurmeGeometricSans1Bold', color: 'black', justifyContent: 'flex-start', marginLeft: moderateScale(8) }}>
                                    Tentative price:
                                </Text>

                                <View style={{ flexDirection: 'row', marginLeft: moderateScale(8) }}>

                                    {FinalTentativePrice === 0 ? null : (
                                        <Text style={{ justifyContent: 'flex-start', marginLeft: moderateScale(8), color: 'black', }}>Before Discount : 
                                        </Text>)}
                                    <Text style={{ color: 'black', }}> {Math.round(parseFloat(TentativePrice)).toLocaleString('en-IN', { maximumFractionDigits: 2, style: 'currency', currency: 'INR', },)}
                                    </Text>
                                </View>

                                {FinalTentativePrice === 0 ? null : (
                                    <Text style={{ justifyContent: 'flex-start', marginLeft: moderateScale(8), color: 'black', }}>     After Discount : {Math.round(parseFloat(FinalTentativePrice)).toLocaleString('en-IN', { maximumFractionDigits: 2, style: 'currency', currency: 'INR', },)}
                                    </Text>)}
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={styles.containeraa}>
                            <View>
                                <TextInput style={styles.inputaa} placeholder="Enter Coupon code" placeholderTextColor="#C7C7CD" onChangeText={coupon => setCoupon(coupon)} />
                            </View>
                            <View>
                                <TouchableOpacity onPress={handleApplyButtonPress} style={styles.logInButtonAlignment}>
                                    <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 10 }}>
                                        <Text style={styles.logInButtonText}>APPLY</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>

                    <View style={styles.WastageChartButton}>
                        <TouchableOpacity activeOpacity={0.8} onPress={                             // navigation.navigate('thank');
                            checkout
                        }>
                            <Text style={styles.buttontext}>CONFIRM  ORDER</Text>
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
                                color: "black"
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
                                color: "black", marginVertical: moderateScaleVertical(2)
                            }}>
                            For gold price inquiries and booking, please contact{'\n'}us at
                            Jewellery Bliss via call or WhatsApp.
                        </Text>
                    </View>

                    <ImageBackground style={styles.disclaimer} imageStyle={{ borderRadius: 20 }} source={require('../assets/CompressedTexture3.jpg')}>
                        <View style={{ marginTop: moderateScaleVertical(15) }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginLeft: moderateScale(5) }}>
                                <Text style={{ fontSize: textScale(17), color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', }}>
                                    Bank Details
                                </Text>
                                <Text style={{ fontSize: textScale(14), color: 'black', fontFamily: 'HurmeGeometricSans1SemiBold', marginVertical: moderateScaleVertical(2) }}>
                                    To initiate the order processing, a payment of 15% on{'\n'}the bank
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
                                        marginLeft: moderateScale(5),
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
                                    marginLeft: moderateScale(5),
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
                            width: moderateScale(370),
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
                                source={require('../assets/SingleQRCODE.jpg')}
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
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
                                <View style={{ flexDirection: 'column' }}>
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
                                <View style={{ flexDirection: 'column' }}>
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
        width: moderateScale(370),
        height: moderateScaleVertical(280),
        alignSelf: 'center',
        marginTop: moderateScaleVertical(20),
        borderRadius: 15,
        alignItems: 'center',
    },
    line: {
        marginTop: moderateScaleVertical(10),
        width: moderateScale(370),
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
        width: moderateScale(370),
        height: moderateScaleVertical(100),
        alignSelf: 'center',
        borderRadius: 20,
    },
    containeraa: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: moderateScaleVertical(20),
        flexDirection: "row",
        justifyContent: "space-around"
    },
    inputaa: {
        width: moderateScale(250),
        height: moderateScaleVertical(40),
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: "black",
        fontFamily: "HurmeGeometricSans1SemiBold",
        fontSize: textScale(18)

    },
    button: {
        backgroundColor: 'gold',
        padding: 10,
        borderRadius: 5,
        width: moderateScale(80),
        height: moderateScaleVertical(40)
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    logInButtonAlignment: {
        alignItems: "center",
    },
    ImageBackgroundStyle: {
        alignItems: "center",
        padding: moderateScale(9),
        width: moderateScale(80),
        height: moderateScaleVertical(40),
        justifyContent: 'center',

        borderRadius: 10,
    },
    logInButtonText: {
        fontSize: textScale(15),
        color: "black",
        marginLeft: moderateScale(0),

        // paddingTop: moderateScaleVertical(3),
        fontFamily: "HurmeGeometricSans1SemiBold",

    },
});