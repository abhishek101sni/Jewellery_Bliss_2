// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { View, Text, ImageBackground, Modal, StyleSheet, TouchableOpacity, Image, ScrollView , SafeAreaView} from 'react-native'
// import { moderateScale, moderateScaleVertical, height, textScale } from '../utils/responsive'
// import SimpleModal from './SimpleModal'
// import axios from 'axios';
// import MarqueeView from 'react-native-marquee-view';

// const ConfirmOrder = ({ navigation }) => {

//     var totalWeight=0;
//     var GoldFineRate = 0;
//     var GoldRate= 0;

//     // API FOR PREMIUM PRICE

//     const [premiumData, setPremiumData] = useState([]);
//     const PREMIUM_API_URL = 'https://jewellery-bliss.onrender.com/api/premium';

//     const fetchPremiumData = async () => {
//         try {
//             const response = await axios.get(PREMIUM_API_URL);
//             setPremiumData(response.data);
//             console.log("helllllllllloooooo", response.data, )
        
//         } catch (error) {
//             console.error('Error fetching premium data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchPremiumData();
//     }, []);


//     // MCX PRICE API

//     const [apiDATA, setAPIdata] = useState([]);
//     const API_URL = 'https://rappid.in/apis/mcx.php?key=9015790532';
//     const firstData = apiDATA.data && apiDATA.data[0];
//     const secondData = apiDATA.data && apiDATA.data[2];
//     console.log("heloooo" ,firstData )

//     const fetchAPIData = async () => {
//         try {
//             const response = await axios.get(API_URL);
//             setAPIdata(response.data);

//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchAPIData();
//         const interval = setInterval(fetchAPIData, 10 * 60 * 1000);


//         return () => {
//             clearInterval(interval);
//             console.log('APIcalled after every 10 mins');
//         };
//     }, []);

//     // WhatsApp
//     const [isModalVisible, setisModalVisible] = useState(false)
//     const [chooseData, setChooseData] = useState();

//     const changeModalVisible = (bool) => {
//         setisModalVisible(bool)
//     }


//     const setData = (data) => {
//         setChooseData(data)
//     }
//     // WhatsApp

//     const { cart, cartDetails } = useSelector((state) => state.reducer);
//     console.log(`confirm order`, cart)
//     // const dispatch = useDispatch();
//     const { total, grandTotal } = cartDetails;
//     return (
//         <SafeAreaView style={{flex:1}}>
//         <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
//             <View style={{}}>
//                 <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
//             </View>
//             <ScrollView>
//                 <View>
//                     {/* <View style={{marginBottom:moderateScaleVertical(30)}}> */}

                    
//                     <View style={{ backgroundColor: "#E8E8E8", alignSelf: "center", width: moderateScaleVertical(380), borderRadius: 20, marginTop: moderateScaleVertical(30) }}>
                  
//                         <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: moderateScaleVertical(20) }}>
//                             <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(10), width: moderateScale(100), }}>  Product</Text>
//                             <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(-10) }}>       Qty.</Text>
//                             <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(-20) }}>                Purity</Text>
//                             <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(-20) }}>                  Weight  </Text>
//                             <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(-5) }}>            Making</Text>
//                             <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginRight: moderateScale(20) }}>            Nt Gold Wt.</Text> 
//                         </View>
//                         {/* map */}
//                                   {
//                                      cart?.length ? cart?.map(cartItem => {
//                                         let goldprice = parseFloat(firstData?.BUY);
//                                         console.log("MCX Gold Buy price = ", firstData?.BUY)
//                                         {/* console.log(typeof goldprice) */}

//                                         let PremiumCharges = premiumData[0]?.premiumcharges;
//                                         console.log("Premium Charges =" , PremiumCharges)

//                                         let totalOFGoldandPremium= (goldprice + PremiumCharges );
//                                         console.log("MCX Gold Buy price + Premium Charges =" , totalOFGoldandPremium)

//                                         let threePercentGstofTotal =( totalOFGoldandPremium * 3) / 100 ;
//                                         console.log("3 % GST Of ( MAX of Gold  + premium Charges) = " , threePercentGstofTotal)

//                                         let Gold995= (threePercentGstofTotal + totalOFGoldandPremium)
//                                         console.log("Gold 995 price including 3 % GST =" , Gold995)

//                                         {/* Fine Gold Rate */}
//  console.log("------Fine Gold Rate")
//                                         let fivePercentOfGold995 = (Gold995 * 0.5)/ 100;
//                                         console.log("0.5 % of GOLD 995 =" ,fivePercentOfGold995)

//                                         GoldFineRate = (Gold995 + fivePercentOfGold995);
//                                         console.log( "Fine Gold rates = GOLD 995 + (0.5 % of GOLD 995) =" , GoldFineRate)


// console.log("------Net Gold Weight")
//                                         {/* weight of a product */ }
//                                         let productWeight = cartItem.item.weight
//                                         console.log("Weight of a product =", productWeight)


//                                         let purity = 75.5;
//                                         console.log("Purity OF Product =" , purity);
//                                         {/* let making = 3.5; */}
//                                         {/* let making = cartItem.item?.mcharges?.replace('%', '') */}
//                                         let making = cartItem.item.mcharges
//                                         console.log("Making Charges =" ,making)

//                                         let NetGoldWeight = (purity + making) / 100 * productWeight;
//                                         console.log("Net Gold Weight = (purity + making) / 100 * Product Weight =" , NetGoldWeight)

//                                         totalWeight += parseFloat(NetGoldWeight.toFixed(2));
//                                         console.log("Total of Net Gold Weight =" ,totalWeight )

//                                          let TentativePrice = (totalWeight + GoldFineRate).toFixed(2);
//                                          console.log("Tentative Price = Total of Net Gold Weight + Fine Gold Rate =",TentativePrice  )

//                                              return (<View style={{ marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(-10) }}>
//                                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: moderateScaleVertical(20) }}>
//                                             {/* <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(100) }} >  {cartItem.item.subcategory}</Text> */}
//                                             <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(90), marginLeft: moderateScale(-10) }} >{cartItem.item.name}</Text>
//                                             <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(20), marginLeft: moderateScale(-35) }}>{cartItem.count}</Text>
//                                             <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40), marginLeft: moderateScale(-20) }}>{cartItem.item.purity} KT</Text>
//                                             <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(80), marginLeft: moderateScale(-10) }}>{cartItem.item.weight} gm</Text>
//                                             {/* <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(30), marginLeft: moderateScale(-5) }}>{cartItem.item.mcharges}</Text> */}
//                                             <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40), marginLeft: moderateScale(-10) }}>{cartItem.item.mcharges}</Text>
//                                             {/* <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(80), marginRight: moderateScale(-10) }}>Rs. {GrandTotal.toFixed(2)}</Text> */}
//                                             <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(90), marginRight: moderateScale(-40) }}>{NetGoldWeight.toFixed(2)} gm</Text>
                                            
//                                               </View>
//                                               {/* <View style={styles.Productline}></View> */}
//                                                </View>)
//                                                     }) : <></>
//                                                  }
//                                <View>
//                                <View style={styles.Productline}></View>

                              
//                                <View style={{marginTop:moderateScaleVertical(10), marginLeft:moderateScale(20) , marginBottom:moderateScaleVertical(10)}}>
//                                     <Text>Tentative price = Rs. {parseFloat(totalWeight + GoldFineRate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
//                                     {/* console.log({totalWeight + GoldFineRate}) */}
//                                     </View>
//                                </View>
//                          </View>
//                         </View>
//                 <View >
//                     <View style={styles.WastageChartButton}>
//                         <TouchableOpacity activeOpacity={0.8} onPress={() => {
//                             navigation.navigate('thank')
//                             // console.log(totalWeight);
//                         }}>
//                             <Text style={styles.buttontext}>CONFIRM  ORDER</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//                 <View style={styles.ProductLogoBackground}>
//                 <Text style={{marginLeft:moderateScale(10) , marginTop:moderateScaleVertical(15) , fontSize:textScale(20) ,fontFamily: "HurmeGeometricSans1SemiBold" }}>Disclaimer : </Text>
//                 <Text style={{marginLeft:moderateScale(10) , marginTop:moderateScaleVertical(6),  fontSize:textScale(13) ,fontFamily: "HurmeGeometricSans1SemiBold" }}>For gold price inquiries and booking, please contact        us at Jewellery Bliss via call or WhatsApp </Text>
//                 </View>

//                 <ImageBackground style={styles.disclaimer} imageStyle={{ borderRadius: 20 }} source={require("../assets/CompressedTexture3.jpg")} >
//                     <View style={{ marginTop: moderateScaleVertical(5), marginLeft: moderateScale(13) }}>
//                         <View style={{ flexDirection: "column" }}>
//                             <Text style={{ fontSize: textScale(17), color: "black", fontFamily: "HurmeGeometricSans1SemiBold" }}>Bank Details</Text>
//                             <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>To initiate the order processing, a payment of 15% on the bank details mentioned below</Text>
//                         </View>
//                         <View style={{ flexDirection: "row", marginTop: moderateScaleVertical(3) }}>
//                             <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>Bank Name</Text>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>A/C No.</Text>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>IFSC Code</Text>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>A/c holder name</Text>
//                             </View>
//                             <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
//                             </View>
//                             <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>ICICI</Text>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>629205034031</Text>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>ICIC0006292</Text>
//                                 <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>Adinath Chain and Jewellers{'\n'}E-Comm LLP</Text>
//                             </View>
//                         </View>
//                         <View style={styles.line}></View>
//                         <View style={{ flexDirection: "row", marginTop: moderateScaleVertical(5), marginBottom: moderateScaleVertical(10) }}>
//                             <View></View>
//                             <Text style={styles.disclaimerText}>Disclaimer : </Text>
//                             <Text style={styles.disclaimerTextValue}>Order will Varied order processing due to{'\n'}product availability, customization, and {'\n'}volume ; thank you for your patience.</Text>
//                         </View>
//                     </View>
//                 </ImageBackground>

//                 <View>
//                     <Text style={{ fontSize: textScale(30), color: "black", alignSelf: "center", fontFamily: "HurmeGeometricSans1SemiBold", marginTop: moderateScaleVertical(10), marginBottom: moderateScaleVertical(10) }}>OR</Text>
//                 </View>

//                 <View>
//                     <Image style={{ alignSelf: "center", width: moderateScale(380), height: moderateScaleVertical(275), marginBottom: moderateScaleVertical(110), borderRadius: 20 }} source={require("../assets/QRcode.jpeg")} />
//                 </View>
//                 {/* </View> */}
//             </ScrollView>

//             {/* BottomTabNavigator */}
//             <ImageBackground source={require('../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) }}>
//                 <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

//                     <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
//                         <Image source={require('../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
//                         <Image source={require('../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
//                     </TouchableOpacity>

//                 </View>
//             </ImageBackground>
//              {/* BottomTabNavigator end */}

//             {/* Whatsapp start */}
//             <View style={{ bottom: moderateScaleVertical(-42), position: 'absolute', right: moderateScale(5) }}>
//                 <TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment}>
//                     <View style={styles.icontextAlignment}>
//                         <Image source={require('../assets/whatsapp-white.png')} style={styles.whatsappIcon} />
//                         <Text style={styles.helpText}>Help</Text>
//                     </View>
//                 </TouchableOpacity>

//                 <Modal transparent={true} animationType="fade" visible={isModalVisible} nRequestClose={() => changeModalVisible(false)}>
//                     <SimpleModal changeModalVisible={changeModalVisible} setData={setData} />
//                 </Modal>
//             </View>
//             {/* Whatsapp end */}
//         </ImageBackground>
//         </SafeAreaView>
//     )
// }

// export default ConfirmOrder;


// const styles = StyleSheet.create({
//     goldenStrip: {
//         width: "100%",
//         height: 3,
//     },
//     disclaimer: {
//         alignSelf: "center",
//         width: moderateScale(380),
//         height: moderateScaleVertical(275),
//         alignSelf: "center",
//         marginTop: moderateScaleVertical(20),
//         borderRadius: 15,

//     },
//     line: {
//         marginTop: moderateScaleVertical(10),
//         width: moderateScale(380),
//         // marginRight: moderateScale(20),
//         height: moderateScaleVertical(1.5),
//         backgroundColor: "#a4a4a4",
//         backgroundColor: "black",
//         alignSelf: 'center',
//     },
//     Productline: {
//         marginTop: moderateScaleVertical(10),
//         width: "95%",
//         // marginRight: moderateScale(20),
//         height: moderateScaleVertical(0.1),
//         backgroundColor: "#a4a4a4",
//         backgroundColor: "black",
//         alignSelf: 'center',
//     },
//     disclaimerText: {
//         color: "black",
//         fontSize: textScale(18),
//         marginLeft: moderateScale(-2),
//         fontSize: textScale(13),
//         fontSize: textScale(14),
//         color: "black",
//         fontFamily: "HurmeGeometricSans1SemiBold"
//     },
//     disclaimerTextValue: {
//         color: "black",
//         fontSize: textScale(18),
//         marginLeft: moderateScale(-2),
//         fontSize: textScale(13),
//         color: "black",
//         fontFamily: "HurmeGeometricSans1"
//     },
//     // disclaimerDummyText: {
//     //     color: " opens everytimeblack",
//     //     fontSize: textScale(18),
//     //     justifyContent: "center",
//     //     alignItems: "center",
//     //     marginLeft: moderateScale(10),
//     //     // marginTop: moderateScaleVertical(12),
//     //     color: "black",
//     //     fontWeight: "300"
//     // },
//     WastageChartButton: {
//         marginTop: moderateScaleVertical(20),
//         backgroundColor: "black",
//         padding: 15,
//         alignItems: "center",
//         borderRadius: 80,
//         justifyContent: "center",
//         alignItems: "center",
//         width: moderateScale(160),
//         justifyContent: "center",
//         height: moderateScaleVertical(50),
//         alignSelf: 'center',
//         marginBottom: moderateScaleVertical(-15)
//     },
//     buttontext: {
//         fontSize: textScale(14),
//         color: "#eec06b",
//         fontWeight: "bold",
//     },
//     bankImage: {
//         width: moderateScale(80),
//         height: moderateScaleVertical(80),
//         marginTop: moderateScaleVertical(25)
//     },

//     // Whatsapp style

//     HelpButtonAlignment: {
//         justifyContent: 'center',
//         backgroundColor: '#25D366',
//         width: moderateScale(90),
//         height: moderateScaleVertical(40),
//         borderRadius: 40,
//         marginBottom: moderateScaleVertical(100),
//         // position: "fixed",
//     },
//     icontextAlignment: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         paddingHorizontal: moderateScale(-30),
//         marginHorizontal: moderateScale(15),
//     },
//     whatsappIcon: {
//         width: moderateScale(20),
//         height: moderateScaleVertical(20),
//         // position:"fixed",
//     },
//     helpText: {
//         color: 'white',
//         fontSize: textScale(13),
//         fontWeight: 'bold',
//     },
//     ProductLogoBackground: {
//         backgroundColor: '#E8E8E8',
//         marginTop: moderateScaleVertical(40),
//         width: moderateScale(380),
//         height: moderateScaleVertical(100),
//         alignSelf: "center",
//         borderRadius: 20
//     },

// })



import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ImageBackground, Modal, StyleSheet, TouchableOpacity, Image, ScrollView , SafeAreaView} from 'react-native'
import { moderateScale, moderateScaleVertical, height, textScale } from '../utils/responsive'
import SimpleModal from './SimpleModal'
import axios from 'axios';
import MarqueeView from 'react-native-marquee-view';
// import { useSelector, useDispatch } from 'react-redux';
import { getUserDetailsActionCreator } from '../redux/Formdetails/formDetails.action-creator';

const ConfirmOrder = ({ navigation }) => {


    var totalWeight=0;
    var ftotalWeight=0;
    var GoldFineRate = 0;
    var Gold995= 0;

    // API FOR PREMIUM PRICE

    const [premiumData, setPremiumData] = useState([]);
    const PREMIUM_API_URL = 'https://jewellery-bliss.onrender.com/api/premium';

    const fetchPremiumData = async () => {
        try {
            const response = await axios.get(PREMIUM_API_URL);
            setPremiumData(response.data);
            // console.log("helllllllllloooooo", response.data, )
        
        } catch (error) {
            console.error('Error fetching premium data:', error);
        }
    };

    useEffect(() => {
        fetchPremiumData();
    }, []);


    // MCX PRICE API

    const [apiDATA, setAPIdata] = useState([]);
    const API_URL = 'https://rappid.in/apis/mcx.php?key=9015790532';
    const firstData = apiDATA.data && apiDATA.data[0];
    const secondData = apiDATA.data && apiDATA.data[2];
    console.log("heloooo" ,firstData )

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
        const interval = setInterval(fetchAPIData, 10 * 60 * 1000);


        return () => {
            clearInterval(interval);
            console.log('APIcalled after every 10 mins');
        };
    }, []);

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

    const { cart, cartDetails } = useSelector((state) => state.reducer);
    console.log(`confirm order`, cart)
    // const dispatch = useDispatch();
    const { total, grandTotal } = cartDetails;
    return (
        <SafeAreaView style={{flex:1}}>
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={{}}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>
            <ScrollView>
                <View>
                    {/* <View style={{marginBottom:moderateScaleVertical(30)}}> */}

                    
            <View style={{ backgroundColor: "#E8E8E8", alignSelf: "center", width: moderateScaleVertical(380), borderRadius: 20, marginTop: moderateScaleVertical(30) , alignItems:"center" }}>
                  <View style={{width:moderateScale(378),}}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: moderateScaleVertical(20) }}>
                            <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(10), width: moderateScale(100), }}>  Product</Text>
                            <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(-10) }}>       Qty.</Text>
                            <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(-20) }}>                Purity</Text>
                            <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(-20) }}>                  Weight  </Text>
                            <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginLeft: moderateScale(-5) }}>            Making</Text>
                            <Text style={{ color: "black", fontSize: textScale(14), fontFamily: "HurmeGeometricSans1SemiBold", marginRight: moderateScale(20) }}>            Nt Gold Wt.</Text> 
                        </View>
                        {/* map */}
                                  {
                                     cart?.length ? cart?.map(cartItem => {
                                       console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~") 
                                        let productname= cartItem.item.name
                                        console.log("Product Name = ", productname )
                                        let goldprice = parseFloat(firstData?.SELL);
                                        console.log("MCX Gold Buy price = ", firstData?.SELL)
                                        {/* console.log(typeof goldprice) */}

                                        let PremiumCharges = premiumData[0]?.premiumcharges;
                                        console.log("Premium Charges =" , PremiumCharges)

                                        let totalOFGoldandPremium= (goldprice + PremiumCharges )/10;
                                        console.log("MCX Gold Buy price + Premium Charges =" , totalOFGoldandPremium)

                                        let threePercentGstofTotal =( totalOFGoldandPremium * 3) / 100 ;
                                        console.log("3 % GST Of ( MAX of Gold  + premium Charges) = " , threePercentGstofTotal)

                                        Gold995= (threePercentGstofTotal + totalOFGoldandPremium)
                                        console.log("Gold 995 price including 3 % GST =" , Gold995)

                                        {/* Fine Gold Rate */}
                                        console.log("------Fine Gold Rate")
                                        let fivePercentOfGold995 = (Gold995 * 0.5)/ 100;
                                        console.log("0.5 % of GOLD 995 =" ,fivePercentOfGold995)

                                        GoldFineRate = (Gold995 + fivePercentOfGold995);
                                        console.log( "Fine Gold rates = GOLD 995 + (0.5 % of GOLD 995) =" , GoldFineRate)


                                        console.log("------Net Gold Weight")

                                        {/* weight of a product */ }
                                        let productWeight = cartItem.item.weight
                                        console.log("Weight of a product =", productWeight)

                                        let WeightintoProduct = cartItem.item.weight * cartItem.count
                                        console.log("Quantity of Product" , WeightintoProduct)

                                        const purity = cartItem.item.purity == 18 ? 75.5 : cartItem.item.purity == 20 ? 83.5 : cartItem.item.purity == 22 ? 92 : 0;

                                        console.log("Purity OF Product =", purity);

                                        {/* let making = cartItem.item?.mcharges?.replace('%', '') */}
                                        console.log(discountPercent);
                                        let making = cartItem.item.mcharges;
                                        console.log("Making Charges =" ,making)

                                        {/* let NetGoldWeight = (purity + making) / 100 * productWeight; */}
                                        let NetGoldWeight = (purity + making) / 100 * WeightintoProduct;
                                        console.log("Net Gold Weight = (purity + making) / 100 * Product Weight =" , NetGoldWeight)

                                        totalWeight += parseFloat(NetGoldWeight.toFixed(2));
                                        console.log("Total of Net Gold Weight =" ,totalWeight )

                                         let TentativePrice = (totalWeight * GoldFineRate).toFixed(2);
                                         console.log("Tentative Price = Total of Net Gold Weight * Fine Gold Rate =",TentativePrice  )

                                         {/* ------Discount if product greater than 10 lakhs */}
{/* --------------------               console.log('DISCOUNT', TentativePrice >= 1000000 && TentativePrice <2500000 ? 0.1 : TentativePrice >= 2500000 ? 0.2 : 0);  */}
{/* -------After------------- */}    

                                        let discountPercent = TentativePrice >= 1000000 && TentativePrice <2500000 ? 0.1 : TentativePrice >= 2500000 ? 0.2 : 0;
                                        let fmaking = cartItem.item.mcharges - (discountPercent * cartItem.item.mcharges);
                                        let fNetGoldWeight = (purity + fmaking) / 100 * WeightintoProduct;

                                        ftotalWeight += parseFloat(fNetGoldWeight.toFixed(2));

                                         let fTentativePrice = (ftotalWeight * GoldFineRate).toFixed(2);

                                             return (
                                                <View style={{ marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(-10) }}>
                                                   <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: moderateScaleVertical(20) }}>
                                                       <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(70), marginLeft: moderateScale(-10) }} >{cartItem.item.name}</Text>
                                                       <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(30), marginLeft: moderateScale(-30) }}>   {cartItem.count}</Text>
                                                       <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40), marginLeft: moderateScale(-15) }}> {cartItem.item.purity} KT</Text>
                                                       {/* <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(80), marginLeft: moderateScale(-10) }}>{cartItem.item.weight} gm</Text> */}
                                                       <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(80), marginLeft: moderateScale(-10) }}>{WeightintoProduct.toFixed(2)} gm</Text>
                                                       <View style={{flexDirection:"row"}}>
                                                       <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40), marginLeft: moderateScale(-10) ,textDecorationLine: 'line-through'}}>{cartItem.item.mcharges}</Text>
                                                       <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40), marginLeft: moderateScale(-10) }}>/</Text>
                                                       <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(40), marginLeft: moderateScale(-10) }}>{cartItem.item.mcharges - (discountPercent*cartItem.item.mcharges)}</Text>
                                                       </View>
                                                       <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1", width: moderateScale(90), marginRight: moderateScale(-40) }}>{NetGoldWeight.toFixed(2)} gm</Text>     
                                                   </View>
                                                   <View style={styles.Productline}></View>
                                                </View>)
                                                    }) : <></>
                                                 }
                                                 <View style={{backgroundColor:"#A8A8A8", width:"100%" , height:moderateScaleVertical(20), padding:2}}>
                                                 <MarqueeView speed={0.2}> 
                                                  <View>
                                                    <Text style={{ color: "black", fontSize: textScale(12), fontFamily: "HurmeGeometricSans1",}}> Gold995 rate : Rs. {Gold995.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  | Fine Gold Rate : Rs. {GoldFineRate.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                                    </View>
                                                 </MarqueeView>
                                                    </View>
                                                 <View style={{marginTop:moderateScaleVertical(5), marginLeft:moderateScale(2) , marginBottom:moderateScaleVertical(10)}}>
                                                   <Text style={{fontSize:textScale(14), fontFamily:"HurmeGeometricSans1"}}>Tentative price:</Text>
                                                   <View style={{ flexDirection: "row"}}>
                                                    <Text style={{}}>Before Discount : </Text>
                                                   <Text style={{}}>Rs. </Text>
                                                   <Text style={{textDecorationLine: 'line-through'}}>{parseFloat(totalWeight * GoldFineRate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                                   </View>
                                                    <Text>After Discount : Rs. {parseFloat(ftotalWeight * GoldFineRate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                                   
                                                  
                                                 </View>
                 </View>
            </View>
                    <View style={styles.WastageChartButton}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {
                            navigation.navigate('thank');    
                        }}>
                            <Text style={styles.buttontext}>CONFIRM  ORDER</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.ProductLogoBackground}>
                <Text style={{marginLeft:moderateScale(10) , marginTop:moderateScaleVertical(15) , fontSize:textScale(20) ,fontFamily: "HurmeGeometricSans1SemiBold" }}>Disclaimer : </Text>
                <Text style={{marginLeft:moderateScale(10) , marginTop:moderateScaleVertical(6),  fontSize:textScale(14) ,fontFamily: "HurmeGeometricSans1SemiBold" }}>For gold price inquiries and booking, please contact        us at Jewellery Bliss via call or WhatsApp </Text>
                </View>

                <ImageBackground style={styles.disclaimer} imageStyle={{ borderRadius: 20 }} source={require("../assets/CompressedTexture3.jpg")} >
                    <View style={{ marginTop: moderateScaleVertical(15), }}>
                        <View style={{ flexDirection: "column" ,  justifyContent:"flex-start" , marginLeft:moderateScale(10)}}>
                            <Text style={{ fontSize: textScale(17), color: "black", fontFamily: "HurmeGeometricSans1SemiBold" }}>Bank Details</Text>
                            <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>To initiate the order processing, a payment of 15% on the bank details mentioned below</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: moderateScaleVertical(3) }}>
                            <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5),  justifyContent:"flex-start" , marginLeft:moderateScale(10) }}>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>Bank Name</Text>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>A/C No.</Text>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>IFSC Code</Text>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}>A/c holder name</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1SemiBold", marginVertical: moderateScaleVertical(2) }}> : </Text>
                            </View>
                            <View style={{ flexDirection: "column", marginVertical: moderateScaleVertical(5) }}>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>ICICI</Text>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>629205034031</Text>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>ICIC0006292</Text>
                                <Text style={{ fontSize: textScale(14), color: "black", fontFamily: "HurmeGeometricSans1 ", marginVertical: moderateScaleVertical(2) }}>Adinath Chain and Jewellers{'\n'}E-Comm LLP</Text>
                            </View>
                        </View>

                        <View style={styles.line}></View>

                        <View style={{ flexDirection: "row", marginTop: moderateScaleVertical(5),justifyContent:"flex-start" , marginLeft:moderateScale(10)  }}>
                            <Text style={styles.disclaimerText}>Disclaimer : </Text>
                            <Text style={styles.disclaimerTextValue}>Order will Varied order processing due to{'\n'}product availability, customization, and {'\n'}volume , Thank you for your patience.</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View>
                    <Text style={{ fontSize: textScale(30), color: "black", alignSelf: "center", fontFamily: "HurmeGeometricSans1SemiBold", marginTop: moderateScaleVertical(10), marginBottom: moderateScaleVertical(10) }}>OR</Text>
                    <Text style={{ fontSize: textScale(15), color: "black", alignSelf: "center", fontFamily: "HurmeGeometricSans1SemiBold", marginTop: moderateScaleVertical(10), marginBottom: moderateScaleVertical(10) }}>SCAN THE CODE</Text>
                </View>

                <View>
                    {/* <Image style={{ marginTop:20,  alignSelf: "center", width: moderateScale(380), marginBottom: moderateScaleVertical(60), borderRadius: 20 }} source={require("../assets/ClientQRcode.jpeg")} /> */}
                </View>

<View style={{marginBottom:moderateScaleVertical(50), backgroundColor:"#E8E8E8" ,width:moderateScale(380), alignSelf: "center", borderRadius:20 , height:moderateScaleVertical(300), marginTop:moderateScaleVertical(0)}}>
    <View style={{flexDirection:"column" , alignItems:"center" , marginVertical:moderateScaleVertical(0), marginTop:moderateScaleVertical(20)}}>
    <Image style={{ alignSelf: "center", width: moderateScale(200), height:moderateScaleVertical(200), marginBottom: moderateScaleVertical(10), borderRadius: 5}} source={require("../assets/HDqrCode.jpeg")} />
    <View style={{flexDirection:"row" }}>
      <View>
         <Text style={{fontSize:textScale(14) ,fontFamily: "HurmeGeometricSans1Bold"}}>Merchant Name</Text>
         <Text style={{marginTop:moderateScaleVertical(20), fontSize:textScale(14),fontFamily: "HurmeGeometricSans1"}}>Mobile Number</Text>
      </View>
      <View>
        <Text style={{fontSize:textScale(14)}}> : </Text>
        <Text style={{marginTop:moderateScaleVertical(20),fontSize:textScale(14)}}> : </Text>
      </View>
      <View>
        <Text style={{fontSize:textScale(14), fontFamily: "HurmeGeometricSans1"}}>M/S ADINATH CHAIN AND  {'\n'}JEWELLERS E-COMM LLP</Text>
        <Text style={{fontSize:textScale(14), fontFamily: "HurmeGeometricSans1",marginTop:moderateScaleVertical(3)}} >9654511612</Text>
      </View> 
    </View>
    </View>
</View> 


                {/* </View> */}
            </ScrollView>

            {/* BottomTabNavigator */}
            <ImageBackground source={require('../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) }}>
                <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

                    <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
                        <Image source={require('../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
                        <Image source={require('../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>
             {/* BottomTabNavigator end */}

            {/* Whatsapp start */}
            <View style={{ bottom: moderateScaleVertical(-42), position: 'absolute', right: moderateScale(5) }}>
                <TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment}>
                    <View style={styles.icontextAlignment}>
                        <Image source={require('../assets/whatsapp-white.png')} style={styles.whatsappIcon} />
                        <Text style={styles.helpText}>Help</Text>
                    </View>
                </TouchableOpacity>

                <Modal transparent={true} animationType="fade" visible={isModalVisible} nRequestClose={() => changeModalVisible(false)}>
                    <SimpleModal changeModalVisible={changeModalVisible} setData={setData} />
                </Modal>
            </View>
            {/* Whatsapp end */}
        </ImageBackground>
        </SafeAreaView>
    )
}

export default ConfirmOrder;


const styles = StyleSheet.create({
    goldenStrip: {
        width: "100%",
        height: 3,
    },
    disclaimer: {
        alignSelf: "center",
        width: moderateScale(380),
        height: moderateScaleVertical(270),
        alignSelf: "center",
        marginTop: moderateScaleVertical(20),
        borderRadius: 15,
        alignItems:"center"

    },
    line: {
        marginTop: moderateScaleVertical(10),
        width: moderateScale(380),
        // marginRight: moderateScale(20),
        height: moderateScaleVertical(1),
        backgroundColor: "#a4a4a4",
        backgroundColor: "black",
        alignSelf: 'center',
    },
    Productline: {
        marginTop: moderateScaleVertical(10),
        width: "95%",
        // marginRight: moderateScale(20),
        height: moderateScaleVertical(0.1),
        backgroundColor: "#a4a4a4",
        backgroundColor: "black",
        alignSelf: 'center',
    },
    disclaimerText: {
        fontSize: textScale(14),
        color: "black",
        fontFamily: "HurmeGeometricSans1SemiBold"
    },
    disclaimerTextValue: {
        fontSize: textScale(14),
        color: "black",
        fontFamily: "HurmeGeometricSans1"
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
        backgroundColor: "black",
        padding: 15,
        alignItems: "center",
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        width: moderateScale(160),
        justifyContent: "center",
        height: moderateScaleVertical(50),
        alignSelf: 'center',
        // marginBottom: moderateScaleVertical(20)
    },
    buttontext: {
        fontSize: textScale(14),
        color: "#eec06b",
        fontWeight: "bold",
    },
    bankImage: {
        width: moderateScale(80),
        height: moderateScaleVertical(80),
        marginTop: moderateScaleVertical(25)
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
        alignSelf: "center",
        borderRadius: 20
    },
    qrcodetext:{

    }

})







