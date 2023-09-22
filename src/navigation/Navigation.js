import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native';

import Splash from '../Screens/Splash';
import GetStarted from '../Screens/GetStarted';
import LogInSignUp from '../Screens/LogInSignUp';
import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import FormDetails from '../Screens/FormDetails';
import OTP from '../Screens/OTP';
import Cart from '../Screens/Cart';
import SingleProduct from '../Screens/SingleProduct';
import Product from '../Screens/Product';
import Thankyou from '../Screens/Thankyou';
import Tabs from './Tabs';
import PrivacyPolicy from '../Screens/DrawerScreens/PrivacyPolicy';
import TnC from '../Screens/DrawerScreens/TnC';
import ServiceAvailable from '../Screens/DrawerScreens/ServiceAvailable';
import ViewProfile from '../Screens/ViewProfile';
import PriceList from '../Screens/PriceList';
import GoldScreen from '../Screens/GoldScreen';
import SilverScreen from '../Screens/SilverScreen';
import WelcomeScreen from '../Screens/DrawerScreens/WelcomeScreen';
import ManageOrder from '../Screens/DrawerScreens/ManageOrder';
import Chains from '../Screens/Categories/Chains';
import CastingJwellery from '../Screens/Categories/CastingJwellery';
import CastingCzJwellery from '../Screens/Categories/CastingCzJwellery';
import PlainJwellery from '../Screens/Categories/PlainJwellery';
import OurProduct from '../Screens/DrawerScreens/OurProduct';
import BangelsPJ from '../Screens/Categories/SubCategories/PlainJwellery/BangelsPJ';
import BraceletsPJ from '../Screens/Categories/SubCategories/PlainJwellery/BraceletsPJ';
import ChokerSetsPJ from '../Screens/Categories/SubCategories/PlainJwellery/ChokerSetsPJ';
import GoldPendentPJ from '../Screens/Categories/SubCategories/PlainJwellery/GoldPendentPJ';
import HandmadeGentsRingPJ from '../Screens/Categories/SubCategories/PlainJwellery/HandmadeGentsRingPJ';
import HandmadeLadiesRingPJ from '../Screens/Categories/SubCategories/PlainJwellery/HandmadeLadiesRingPJ';
import KadePJ from '../Screens/Categories/SubCategories/PlainJwellery/KadePJ';
import LongSetsPJ from '../Screens/Categories/SubCategories/PlainJwellery/LongSetsPJ';
import MangalSutraPJ from '../Screens/Categories/SubCategories/PlainJwellery/MangalSutraPJ';
import SetsPJ from '../Screens/Categories/SubCategories/PlainJwellery/SetsPJ';
import TopsCJ from '../Screens/Categories/SubCategories/CastingJwellery/TopsCJ';
import TopsPJ from '../Screens/Categories/SubCategories/PlainJwellery/TopsPJ';
import BaliPJ from '../Screens/Categories/SubCategories/PlainJwellery/BaliPJ';
import UvShapedBali from '../Screens/Categories/SubCategories/PlainJwellery/UvShapedBaliPJ';
import UvShapedBaliPJ from '../Screens/Categories/SubCategories/PlainJwellery/UvShapedBaliPJ';
import GentsRingCJ from '../Screens/Categories/SubCategories/CastingJwellery/GentsRingCJ';
import PendentsCJ from '../Screens/Categories/SubCategories/CastingJwellery/PendentsCJ';
import GodPendentsCJ from '../Screens/Categories/SubCategories/CastingJwellery/GodPendentsCJ';
import LadiesRingCJ from '../Screens/Categories/SubCategories/CastingJwellery/LadiesRingCJ';
import BaliCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/BaliCZ';
import BraceLetsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/BraceLetsCZ';
import CharmsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/CharmsCZ';
import CockTailRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/CockTailRingsCZ';
import GentsSolitairRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/GentsSolitairRingsCZ';
import GodPendentsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/GodPendentsCZ';
import LadiesRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/LadiesRingsCZ';
import LadiesSolitaireRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/LadiesSolitaireRingsCZ';
import MangalSutraCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/MangalSutraCZ';
import NeckLaceSetsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/NeckLaceSetsCZ';
import PendentSetsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/PendentSetsCZ';
import SolitairePendentSetsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/SolitairePendentSetsCZ';
import SolitaireTopsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/SolitaireTopsCZ';
import TopsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/TopsCZ';
import GentsRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/GentsRingsCZ';
import AboutUs from '../Screens/DrawerScreens/AboutUs';
import EighteenKarat from '../Screens/KaratScreens/EighteenKarat';
import TwentyKarat from '../Screens/KaratScreens/TwentyKarat';
import TwentytwokaratScreen from '../Screens/KaratScreens/TwentytwoKaratScreen';
import ConfirmOrder from '../Screens/ConfirmOrder';
import Drawer from './Drawer';
import GoldSilverPrice from '../Screens/DrawerScreens/GoldSilverPrice';
// Chains SubCategories
import ChocoChainsC from '../Screens/Categories/SubCategories/Chains/ChocoChainsC';
import HandmadeChainsC from '../Screens/Categories/SubCategories/Chains/HandmadeChainsC';
import HollowChainsC from '../Screens/Categories/SubCategories/Chains/HollowChainsC';
import HollowNawabiChainsC from '../Screens/Categories/SubCategories/Chains/HollowNawabiChainsC';
import IndoChainsC from '../Screens/Categories/SubCategories/Chains/IndoChainsC';
import IndoChocoChainsC from '../Screens/Categories/SubCategories/Chains/IndoChocoChainsC';
import KajuKatliChainsC from '../Screens/Categories/SubCategories/Chains/KajuKatliChainsC';
import MachineChainsC from '../Screens/Categories/SubCategories/Chains/MachineChainsC';
import MadrasiChainsC from '../Screens/Categories/SubCategories/Chains/MadrasiChainsC';
import RodiumChainsC from '../Screens/Categories/SubCategories/Chains/RodiumChainsC';
import SilkyChainsC from '../Screens/Categories/SubCategories/Chains/SilkyChainsC';
import SolidNawabiChainsC from '../Screens/Categories/SubCategories/Chains/SolidNawabiChainsC';

import ForgotPassword from '../Screens/ForgotPassword';
import ResetPassword from '../Screens/ResetPassword';
import Appointment from '../Screens/Appointment';
import CustomiseOrder from '../Screens/CustomiseOrder';
import AppointmentThankyou from '../Screens/AppointmentThankyou';
import CustomiseThankyou from '../Screens/CustomiseThankyou';
import JwelleryScreen from '../Screens/JwelleryScreen';

import EighteenParentCategory from '../Screens/KaratScreens/KaratCategories/KaratParentCategories/EighteenParentCategory';
import TwentyParentCategory from '../Screens/KaratScreens/KaratCategories/KaratParentCategories/TwentyParentCategory';
import TwentyTwoParentCategory from '../Screens/KaratScreens/KaratCategories/KaratParentCategories/TwentyTwoParentCategory';
import ChainsE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/ChainsE';
import PlainJewelleryE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/PlainJewelleryE';
import CastingCZJewelleryE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/CastingCZJewelleryE';
import CastingJewelleryE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/CastingJewelleryE';
import ChainsT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/ChainsT';
import PlainJewelleryT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/PlainJewelleryT';
import CastingCZJewelleryT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/CastingCZJewelleryT';
import CastingJewelleryT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/CastingJewelleryT';
import ChainsTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/ChainsTT';
import PlainJewelleryTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/PlainJewelleryTT';
import CastingCZJewelleryTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/CastingCZJewelleryTT';
import CastingJewelleryTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/CastingJewelleryTT';




const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);


    useEffect(() => {
        AsyncStorage.getItem("userToken").then((value) => {
            if (value) {
                setShowSplashScreen(false);
            }
        });
    }, []);


    return (
        <Stack.Navigator options={{ headerShown: false }}>
            <>
                {showSplashScreen ? (
                    <>
                        <Stack.Screen
                            name="splash"
                            component={Splash}
                            options={{ headerShown: false, title: 'My home' }} />

                        <Stack.Screen
                            name="getstarted"
                            component={GetStarted}
                            options={{ headerShown: false, title: 'My home' }} />

                        <Stack.Screen
                            name="loginsignup"
                            component={LogInSignUp}
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="login"
                            component={LogIn}

                            options={{
                                headerShown: false,
                                title: '',
                                headerStyle: { backgroundColor: 'white' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="signup"
                            component={SignUp}
                            options={{
                                title: '',
                                headerShown: false,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }}
                        />
                        <Stack.Screen
                            name="forgotPass"
                            component={ForgotPassword}
                            options={{
                                title: 'Forgot Password',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="resetPass"
                            component={ResetPassword}
                            options={{
                                title: 'Reset Password',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />



                    </>
                ) : null
                }

                {/* Main Flow */}

                {showSplashScreen == false ? (
                    <>
                        <Stack.Screen
                            name="formdetails"
                            component={FormDetails}
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="Drawer"
                            component={Drawer}
                            options={{
                                headerShown: false,
                                headerRight: () => (
                                    <Button
                                        onPress={() => alert('This is a button!')}
                                        title="Info"
                                        color="#fff"
                                    />
                                )
                            }} />

                        <Stack.Screen
                            name="tabs"
                            component={Tabs}
                            options={{
                                headerShown: false,

                            }} />

                        <Stack.Screen
                            name="otp"
                            component={OTP}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }}
                        />

                        <Stack.Screen
                            name="cart"
                            component={Cart}
                            options={{
                                title: 'My Cart',
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="singleproduct"
                            component={SingleProduct}
                            options={{
                                title: 'Product',
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="product"
                            component={Product}
                            options={{
                                title: 'Products',
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="about"
                            component={AboutUs}
                            options={{
                                title: 'About us',
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' },

                            }} />



                        <Stack.Screen
                            name="Manage"
                            component={ManageOrder}
                            options={{
                                title: 'Order history',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="our"
                            component={OurProduct}
                            options={{
                                title: 'Our Product',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' },

                                headerTitleStyle: { flex: 1, textAlign: 'center' },
                            }} />

                        <Stack.Screen
                            name="privacypolicy"
                            component={PrivacyPolicy}
                            options={{
                                title: 'Privacy Policy',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="tnc"
                            component={TnC}
                            options={{
                                title: 'Terms and Conditions',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="welcomescreen"
                            component={WelcomeScreen}
                            options={{
                                title: '',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' },
                                tabBarStyle: { display: "none" },


                            }} />

                        <Stack.Screen
                            name="ServiceAvailable"
                            component={ServiceAvailable}
                            options={{
                                title: 'Service Available',
                                headerShown: true, headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="viewprofile"
                            component={ViewProfile}
                            options={{
                                title: 'Profile',
                                headerShown: true, headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="pricelist"
                            component={PriceList}
                            options={{
                                title: 'Wastage Chart',
                                headerShown: true, headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="goldscreen"
                            component={GoldScreen}
                            options={{
                                title: 'Gold Coins',
                                headerShown: true, headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="silverscreen"
                            component={SilverScreen}
                            options={{
                                title: 'Silver Coins',
                                headerShown: true, headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="jewelleryscreen"
                            component={JwelleryScreen}
                            options={{
                                title: 'Jewellery',
                                headerShown: true, headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="thank"
                            component={Thankyou}
                            options={{
                                title: 'Thank You',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="confimrorder"
                            component={ConfirmOrder}
                            options={{
                                title: 'Confirm Order',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="Appointment"
                            component={Appointment}
                            options={{
                                title: 'Appointment',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="CustomiseOrder"
                            component={CustomiseOrder}
                            options={{
                                title: 'Customise your order',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                         <Stack.Screen
                            name="AppointmentThankyou"
                            component={AppointmentThankyou}
                            options={{
                                title: '',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                          <Stack.Screen
                            name="CustomiseThankyou"
                            component={CustomiseThankyou}
                            options={{
                                title: '',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        {/* <Stack.Screen
                            name="GoldPrice"
                            component={GoldPrice}
                            options={{
                                title: 'Price',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} /> */}


                        {/* Categories */}


                        <Stack.Screen
                            name="chains"
                            component={Chains}
                            options={{
                                title: 'Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="CastingJwellery"
                            component={CastingJwellery}
                            options={{
                                title: 'Casting Jwellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="CastingCzJwellery"
                            component={CastingCzJwellery}
                            options={{
                                title: 'Casting Cz Jwellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="PlainJwellery"
                            component={PlainJwellery}
                            options={{
                                title: 'Plain Jwellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        {/* SubCategories */}

                        {/* Chains */}



                        <Stack.Screen
                            name="ChocoChainsC"
                            component={ChocoChainsC}
                            options={{
                                title: 'Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HandmadeChainsC"
                            component={HandmadeChainsC}
                            options={{
                                title: 'Handmade Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HollowChainsC"
                            component={HollowChainsC}
                            options={{
                                title: 'Hollow Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HollowNawabiChainsC"
                            component={HollowNawabiChainsC}
                            options={{
                                title: 'Hollow Nawabi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="IndoChainsC"
                            component={IndoChainsC}
                            options={{
                                title: 'Indo Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="IndoChocoChainsC"
                            component={IndoChocoChainsC}
                            options={{
                                title: 'Indo Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />


                        <Stack.Screen
                            name="KajuKatliChainsC"
                            component={KajuKatliChainsC}
                            options={{
                                title: 'Kaju Katli Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="MachineChainsC"
                            component={MachineChainsC}
                            options={{
                                title: 'Machine Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />


                        <Stack.Screen
                            name="MadrasiChainsC"
                            component={MadrasiChainsC}
                            options={{
                                title: 'Madrasi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="RodiumChainsC"
                            component={RodiumChainsC}
                            options={{
                                title: 'Rodium Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SilkyChainsC"
                            component={SilkyChainsC}
                            options={{
                                title: 'Silky Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SolidNawabiChainsC"
                            component={SolidNawabiChainsC}
                            options={{
                                title: 'Solid Nawabi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        {/* Plain Jwellery */}

                        <Stack.Screen
                            name="Bangels"
                            component={BangelsPJ}
                            options={{
                                title: 'Bangels',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="Bracelets"
                            component={BraceletsPJ}
                            options={{
                                title: 'Bracelets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="ChokerSets"
                            component={ChokerSetsPJ}
                            options={{
                                title: 'Choker Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GoldPendent"
                            component={GoldPendentPJ}
                            options={{
                                title: 'Gold Pendent',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HandmadeGentsRing"
                            component={HandmadeGentsRingPJ}
                            options={{
                                title: 'Handmade Gents Ring',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HandmadeLadiesRing"
                            component={HandmadeLadiesRingPJ}
                            options={{
                                title: 'Hand Made Ladies Ring',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="Kade"
                            component={KadePJ}
                            options={{
                                title: 'Kade',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="LongSets"
                            component={LongSetsPJ}
                            options={{
                                title: 'Long Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="MangalSutrapj"
                            component={MangalSutraPJ}
                            options={{
                                title: 'Mangal Sutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="BaliPJ"
                            component={BaliPJ}
                            options={{
                                title: 'Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SetsPJ"
                            component={SetsPJ}
                            options={{
                                title: 'Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="TopsPJ"
                            component={TopsPJ}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="UvShapedBaliPJ"
                            component={UvShapedBaliPJ}
                            options={{
                                title: 'UV Shaped Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        {/* Casting jwellery */}

                        <Stack.Screen
                            name="GentsRing"
                            component={GentsRingCJ}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GodPendents"
                            component={GodPendentsCJ}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="LadiesRing"
                            component={LadiesRingCJ}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="Pendents"
                            component={PendentsCJ}
                            options={{
                                title: 'Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="Tops"
                            component={TopsCJ}
                            options={{
                                title: 'TOPS',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        {/* Casting CZ jwellery */}

                        <Stack.Screen
                            name="Bali"
                            component={BaliCZ}
                            options={{
                                title: 'Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="BraceLets"
                            component={BraceLetsCZ}
                            options={{
                                title: 'Bracelets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="Charms"
                            component={CharmsCZ}
                            options={{
                                title: 'Charms',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="CockTailRings"
                            component={CockTailRingsCZ}
                            options={{
                                title: 'Cocktail Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GentsSolitairRings"
                            component={GentsSolitairRingsCZ}
                            options={{
                                title: 'Gents Solitair Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GoldPendentscz"
                            component={GodPendentsCZ}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="LadiesRings"
                            component={LadiesRingsCZ}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="LadiesSolitaireRings"
                            component={LadiesSolitaireRingsCZ}
                            options={{
                                title: 'Ladies Solitaire Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="MangalSutraCZ"
                            component={MangalSutraCZ}
                            options={{
                                title: 'Mangal Sutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="NeckLaceSets"
                            component={NeckLaceSetsCZ}
                            options={{
                                title: 'Necklace Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="PendentSetsCZ"
                            component={PendentSetsCZ}
                            options={{
                                title: 'Pendent Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SolitairePendentSetsCZ"
                            component={SolitairePendentSetsCZ}
                            options={{
                                title: 'Solitaire Pendent Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SolitaireTopsCZ"
                            component={SolitaireTopsCZ}
                            options={{
                                title: 'Solitaire Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="TopsCZ"
                            component={TopsCZ}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GentsRingsCZ"
                            component={GentsRingsCZ}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        {/* CaratScreen */}
                        <Stack.Screen
                            name="eighteenkarat"
                            component={EighteenKarat}
                            options={{
                                title: '18KT',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="twentykarat"
                            component={TwentyKarat}
                            options={{
                                title: '20KT',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="twentytwokarat"
                            component={TwentytwokaratScreen}
                            options={{
                                title: '22KT',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="GoldSilverPrice"
                            component={GoldSilverPrice}
                            options={{
                                title: 'Live Price',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            {/* Karat Screens */}
                            
                            <Stack.Screen
                            name="EighteenParentCategory"
                            component={EighteenParentCategory}
                            options={{
                                title: '18 KARAT',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            <Stack.Screen
                            name="TwentyParentCategory"
                            component={TwentyParentCategory}
                            options={{
                                title: '20 KARAT',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            <Stack.Screen
                            name="TwentyTwoParentCategory"
                            component={TwentyTwoParentCategory}
                            options={{
                                title: '22 KARAT',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            {/* 18SubCategories */}
                            <Stack.Screen
                            name="ChainsE"
                            component={ChainsE}
                            options={{
                                title: 'CHAINS',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="PlainJewelleryE"
                            component={PlainJewelleryE}
                            options={{
                                title: 'Plain Jewellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="CastingCZJewelleryE"
                            component={CastingCZJewelleryE}
                            options={{
                                title: 'Casting CZ Jewellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="CastingJewelleryE"
                            component={CastingJewelleryE}
                            options={{
                                title: 'Casting Jewellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            {/* 20SubCategories */}
                            <Stack.Screen
                            name="ChainsT"
                            component={ChainsT}
                            options={{
                                title: 'CHAINS',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="PlainJewelleryT"
                            component={PlainJewelleryT}
                            options={{
                                title: 'Plain Jewellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="CastingCZJewelleryT"
                            component={CastingCZJewelleryT}
                            options={{
                                title: 'Casting CZ Jewellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="CastingJewelleryT"
                            component={CastingJewelleryT}
                            options={{
                                title: 'Casting Jewellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            {/* 22SubCategories */}
                            <Stack.Screen
                            name="ChainsTT"
                            component={ChainsTT}
                            options={{
                                title: 'CHAINS',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="PlainJewelleryTT"
                            component={PlainJewelleryTT}
                            options={{
                                title: 'Plain Jewellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="CastingCZJewelleryTT"
                            component={CastingCZJewelleryTT}
                            options={{
                                title: 'Casting CZ Jewellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="CastingJewelleryTT"
                            component={CastingJewelleryTT}
                            options={{
                                title: 'Casting Jewellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            

                    </>
                ) : null
                }
            </>
        </Stack.Navigator>
    )
}

export default Navigation;

const styles = StyleSheet.create({
    imageSize: {
        width: 25,
        height: 25,
        resizeMode: "cover",

    },
});