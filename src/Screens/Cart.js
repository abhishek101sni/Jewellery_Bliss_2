import { View, Text, Image, TouchableOpacity, TextInput, Button, ScrollView, StyleSheet, Modal, ImageBackground, Dimensions } from "react-native";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/action";
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import SimpleModal from "./SimpleModal";

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

const Cart = ({ navigation }) => {
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


    const [showModal, setShowModal] = useState(false);
    const { cart, cartDetails } = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
    const { total, grandTotal } = cartDetails;

    const Navigator = () => {
        setShowModal(true);
    }

    const increaseCount = (item) => {
        dispatch(addToCart(item));
    }

    const decreaseCount = (item) => {
        dispatch(removeFromCart(item));
    }

    console.log(cartDetails);

    if (!cart.length) {
        return (
            <ImageBackground source={require("../assets/background-image2.png")} style={{ flex: 1 }}>
                <Image source={require("../assets/emptyCarting.gif")} style={styles.emptyCartSize} />
                <Text style={{ fontSize: 25, color: "black", alignSelf: "center", fontWeight: "500" }}>Oops!! Cart is Empty... </Text>
            </ImageBackground>)
    }

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={{}}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>
            <ScrollView>
                <View>
                    {
                        cart.length ? cart.map(cartItem => (

                            <View key={cartItem.id} >

                                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.MainBackGroundImage} source={require("../assets/texture.png")}>
                                    <View style={styles.CArtBoxAlignment}>

                                        <Image style={styles.dynamicImageStyle} source={{ uri: cartItem.item.images[0] }} />
                                        <View style={styles.PriceAndButtonAlignment}>

                                            <Text style={styles.CartItemName}>{cartItem.item.name}</Text>
                                            {/* <Text style={styles.CartItemPrice}>RS. {cartItem.item.price}</Text> */}
                                            <Text style={styles.CartItemPrice}>{cartItem.item.weight} gram</Text>
                                            <Text style={styles.CartItemPrice}>{cartItem.item.purity} KT</Text>

                                            <View style={{ backgroundColor: "black", borderRadius: 20, width: moderateScale(85), height: moderateScaleVertical(30), marginTop: moderateScaleVertical(15), marginLeft: moderateScale(7) }}>
                                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: moderateScaleVertical(3.5) }}>

                                                    <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={{ height: moderateScaleVertical(23), width: moderateScale(23), justifyContent: "center", alignSelf: "center", marginTop: 0 }} imageStyle={{ borderRadius: 15 }}>
                                                        <TouchableOpacity onPress={() => decreaseCount(cartItem.item)}>
                                                            <Image source={require("../assets/minus.png")} style={{ width: moderateScale(23), height: moderateScaleVertical(23) }} />
                                                        </TouchableOpacity>
                                                    </ImageBackground>

                                                    <Text style={{ color: "#fff", fontSize: 20 }}>{cartItem.count}</Text>

                                                    <ImageBackground source={require("../assets/CompressedTexture3.jpg")} style={{ height: moderateScaleVertical(23), width: moderateScale(23), justifyContent: "center", alignSelf: "center" }} imageStyle={{ borderRadius: 15 }}>
                                                        <TouchableOpacity onPress={() => increaseCount(cartItem.item)}>
                                                            <Image source={require("../assets/add.png")} style={{ width: moderateScale(23), height: moderateScaleVertical(23), marginLeft: 0 }} />
                                                        </TouchableOpacity>
                                                    </ImageBackground>

                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        )) : <></>
                    }
                    <View style={styles.View10}>

                        {/* <View style={styles.TotalAlignment}> */}
                        {/* <View style={styles.TotalPaddingAlignment}> */}
                        {/* <Text style={styles.TotalSubChildAlignment}>Total weight</Text> */}
                        {/* <Text style={styles.TotalSubChildAlignment}>Item total</Text> */}
                        {/* <Text style={styles.TotalSubChildAlignment}>CGST(1.5%)</Text>
                                    <Text style={styles.TotalSubChildAlignment}>SGST(1.5%)</Text>
                                    <Text style={styles.TotalSubChildAlignment}>Discount</Text>
                                    <Text style={styles.TotalSubChildAlignment10}>Grand Total</Text> */}
                        {/* </View> */}
                        {/* <View style={styles.line2}></View> */}
                        {/* <View style={styles.TotalPaddingAlignment}> */}
                        {/* <Text style={styles.TotalSubChildAlignment2}>{total}</Text> */}
                        {/* <Text style={styles.TotalSubChildAlignment2}>000.00</Text>
                                    <Text style={styles.TotalSubChildAlignment2}>000.00</Text>
                                    <Text style={styles.TotalSubChildAlignment2}>000.00</Text> */}
                        {/* <Text style={styles.TotalSubChildAlignment20}>{(15 / 100) * grandTotal}</Text> */}
                        {/* </View> */}
                        {/* </View> */}

                        {/* <View style={styles.line}></View> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: -5, marginHorizontal: -10, marginBottom: moderateScaleVertical(50) }}>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('our')} style={styles.logInButtonAlignment}>
                                    <ImageBackground source={require("../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                                        <Text style={styles.logInButtonText}>CONTINUE SHOPPING</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>

                            {/* <View>
                                    <TouchableOpacity onPress={showMsg} style={styles.logInButtonAlignment}>
                                        <ImageBackground source={require("../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                                            <Text style={styles.logInButtonText}>PLACE ORDER</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View> */}
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('confimrorder')} style={styles.logInButtonAlignment}>
                                    <ImageBackground source={require("../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                                        <Text style={styles.logInButtonText}>PLACE ORDER</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>


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


{/* BottomTabNavigator */}
<ImageBackground source={require('../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) }}>
        <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

          <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
            <Image source={require('../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
            <Image source={require('../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
          </TouchableOpacity>
          {/* BottomTabNavigator end */}

        </View>
      </ImageBackground>

        </ImageBackground>
    )
}

export default Cart


const styles = StyleSheet.create({
    goldenback: {
        width: moderateScale(300),
        marginTop: moderateScaleVertical(300),
        alignItems: 'center',
        padding: 40,
        width: moderateScale(350),
        height: moderateScaleVertical(150),
        marginLeft: moderateScale(40),
    },
    EmptyCart: {
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        // width: moderateScale(300),
        // marginTop: moderateScaleVertical(300),
        // alignItems: 'center',
        // justifyContent: "center",
        // padding: 40,
        // width: moderateScale(350),
        // height: moderateScaleVertical(300),
        // marginLeft: moderateScale(40),
    },
    emptyCartSize: {
        alignSelf: "center",
        marginTop: moderateScaleVertical(300),
        width: moderateScale(100),
        height: moderateScaleVertical(100)
    },
    goldenStrip: {
        width: "100%",
        // marginBottom:10,
        height: 3,
    },
    MainBackGroundImage: {
        marginTop: moderateScaleVertical(15),
        width: moderateScale(340),
        height: moderateScaleVertical(120),
        alignSelf: "center",
    },
    MainBackGroundImage2: {
        marginTop: moderateScaleVertical(300),
        width: moderateScale(300),
        height: moderateScaleVertical(250),
        alignSelf: "center",
    },
    CArtBoxAlignment: {
        flexDirection: "row"

    },
    signupbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: moderateScaleVertical(30),
        alignItems: "center",
        borderRadius: 80,
        width: moderateScale(240),
        height: moderateScaleVertical(70),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: moderateScale(60),
    },
    imageSize: {
        // marginTop: 200,
        width: moderateScale(150),
        height: moderateScaleVertical(150),
        // alignItems: "center",
        // marginLeft: 40
    },

    signuptext: {
        fontSize: textScale(20),
        color: "#eec06b",
    },
    MOdalloginbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: moderateScaleVertical(10),
        alignItems: "center",
        borderRadius: 10,
        width: moderateScale(270),
        height: moderateScale(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: moderateScale(60),
    },
    MOdallogintext: {
        fontSize: textScale(15),
        color: "#eec06b",
    },
    View1: {
        flexDirection: 'row',
        // backgroundColor: '#eec06b',
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    View2: {
        flexDirection: 'row',
    },
    dynamicImageStyle: {
        height: moderateScaleVertical(120),
        width: moderateScale(120),
        // backgroundColor: 'black',
        borderTopLeftRadius: moderateScale(10),
        borderBottomLeftRadius: moderateScale(10),
        borderColor: "black",
        borderRadius: 2,
    },
    PriceAndButtonAlignment: {
        flexDirection: "column",
        marginLeft: moderateScale(12)
    },
    CartItemName: {
        marginTop: moderateScaleVertical(9),
        color: 'black',
        marginLeft: moderateScale(10),
        fontSize: 17,
        fontFamily: 'HurmeGeometricSans1SemiBold',

    },
    CartItemPrice: {
        color: 'black',
        marginBottom: moderateScaleVertical(0),
        marginLeft: moderateScale(10),
        fontSize: textScale(15),
        fontFamily: 'HurmeGeometricSans1SemiBold',

    },
    alignment: {
        flexDirection: "colomn",
        // alignItems:"center",
    },


    View6: {
        flexDirection: 'row',
        width: moderateScale(50),
        marginLeft: moderateScale(130),
    },
    View7: {
        backgroundColor: 'black',
        padding: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: moderateScale(-120),
    },
    View8: {
        marginRight: moderateScale(5),
        // height:moderateScale(8)
    },
    View9: {
        color: 'white',
        fontSize: textScale(20),
    },
    View99: {
        color: 'white',
        fontSize: textScale(17),
    },
    View999: {
        color: 'white',
        fontSize: textScale(20)
    },
    View10: {
        flexDirection: 'column',
        // margin: 50
        marginHorizontal: moderateScale(30),
        marginTop: moderateScaleVertical(40),
    },
    View11: {
        marginBottom: moderateScaleVertical(10),
    },
    View12: {
        fontWeight: 'bold',
        color: 'black',
        borderBottomWidth: moderateScale(1),
        marginBottom: moderateScale(10),
        padding: 5
    },
    View13:
    {
        backgroundColor: 'black',
        marginTop: moderateScaleVertical(25),
        // flexDirection: "row",
        // justifyContent: 'center',
        borderRadius: 60,
    },
    View30: {
        flexDirection: "row",
    },
    View14: {
        // backgroundColor: 'black',
        padding: 10,
        borderBottomLeftRadius: moderateScale(7),
        borderTopLeftRadius: moderateScale(7),
        width: "80%",
        color: 'white'
    },
    View15: {
        backgroundColor: '#eec06b',
        fontWeight: '700',
        color: 'black',
        borderRadius: 5,
        height: moderateScaleVertical(30),
        marginLeft: moderateScale(-10),
        // marginHorizontal:1,
    },
    View16: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        marginTop: moderateScaleVertical(30),
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: moderateScaleVertical(-10),
    },
    Button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Buttons: {
        width: moderateScale(200),
        height: moderateScaleVertical(50),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    View17: {
        backgroundColor: "#eec06b",
        padding: 10,
        borderRadius: 20,
        // marginRight: 5,
        fontWeight: '700',
        color: 'black',
        // width: '100%'
        width: moderateScale(140),
        padding: 10,
        borderWidth: 2
    },
    // View18: {
    //     marginTop: 300,
    //     alignItems: 'center',
    //     backgroundColor: "#eec06b",
    //     padding: 40,
    //     borderRadius: 40,
    //     width: 350,
    //     height: 150,
    //     marginLeft: 40,

    // },

    modalText: {
        color: "white",
        textAlign: "center",
        padding: 20,
        fontSize: textScale(25),
    },
    orderplaced_image: {
        width: moderateScale(40),
        height: moderateScaleVertical(40),
        resizeMode: "cover",
        // alignItems: "center",
        marginLeft: moderateScale(20)
    },
    // View19: {
    //     backgroundColor: "#eec06b",
    //     padding: 50,
    //     borderRadius: 40,
    //     width: 350,
    //     height: 150
    // },
    View20: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000',
        marginBottom: moderateScaleVertical(-10),
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    View21: {
        marginTop: moderateScaleVertical(20)
    },
    View22: {
        alignItems: 'center',
        marginLeft: moderateScale(-60)
    },
    View23: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: moderateScaleVertical(20)
    },
    View24: {
        backgroundColor: 'black',
        padding: 10,
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,
        width: "100%",
        color: 'white'
    },
    View25: {
        marginTop: moderateScaleVertical(20),
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    View26: {
        alignItems: 'center',
        marginLeft: moderateScale(-60)
    },

    TotalAlignment: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: moderateScale(-50),
    },
    TotalPaddingAlignment: {
        marginVertical: moderateScaleVertical(5),

    },
    TotalSubChildAlignment: {
        textAlign: 'left',
        fontSize: textScale(14),
        fontWeight: "300",
        color: "black",
        marginVertical: moderateScaleVertical(5),
    },
    TotalSubChildAlignment2: {
        textAlign: 'right',
        fontSize: textScale(14),
        fontWeight: "300",
        color: "black",
        marginVertical: moderateScaleVertical(5),
    },
    TotalSubChildAlignment10: {
        fontWeight: "500",
        color: "black",
        marginVertical: moderateScaleVertical(5),
        textAlign: 'left',

    },
    TotalSubChildAlignment20: {
        fontWeight: "500",
        color: "black",
        marginVertical: moderateScaleVertical(5),
        textAlign: 'right',
        marginBottom: moderateScaleVertical(25),
    },
    line: {
        marginTop: moderateScaleVertical(15),
        width: "95%",
        height: 1.5,
        backgroundColor: "#a4a4a4",
        alignSelf: 'center'
    },
    line2: {
        width: moderateScale(1),
        marginTop: moderateScaleVertical(10),                   // Width of the line
        height: '85%',           // Height of the line, set to '100%' to make it cover the full height
        backgroundColor: '#a4a4a4',

    },
    body: {
        backgroundColor: "white",
    },
    logo: {
        marginTop: 150,
        marginLeft: 135,
        marginBottom: 150,
    },
    loginbutton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
    },
    signupbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
    },
    logintext: {
        fontSize: 20,
        color: "black",
    },
    signuptext: {
        fontSize: 20,
        color: "#eec06b",
    },
    MOdalloginbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 10,
        width: 270,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
    },
    MOdallogintext: {
        fontSize: 15,
        color: "#eec06b",
    },
    FinaleSubmit: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 20,
        borderRadius: 80,
        width: 190,
        height: 60,
        justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: "center"
        // marginLeft: 75,
    },
    FinaleSubmitText: {
        fontSize: 15,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
    },
    SubmitButton: {
        backgroundColor: "#eec06b",
        //   padding: 15,
        marginTop: 30,
        alignItems: "center",
        borderRadius: 80,
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center'
    },
    SubmitButtonText: {
        fontSize: 15,
        color: "black",
        fontWeight: '700'

    },
    signInbutton: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 60,
        alignItems: "center",
        borderRadius: 80,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    signInText: {
        fontSize: 15,
        color: "white",
        padding: 2,

    },
    logInButtonAlignment: {
        alignItems: "center",
        marginBottom: moderateScaleVertical(20),
    },
    logInButtonText: {
        fontSize: textScale(13),
        color: "black",
        paddingTop: moderateScaleVertical(4),
        fontFamily: 'HurmeGeometricSans1SemiBold',

    },
    ImageBackgroundStyle: {
        alignItems: "center",
        // padding: moderateScale(15),
        width: moderateScale(150),
        height: moderateScaleVertical(50),
        justifyContent: 'center',
        marginTop: moderateScaleVertical(40),
        // fontFamily: "Poppins-Medium"
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

})