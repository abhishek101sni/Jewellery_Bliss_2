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
import GodPendentPJ from '../Screens/Categories/SubCategories/PlainJwellery/GodPendentPJ';
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

// 18 karat  CHAINS Sub Sub Categories
import ChocoChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/ChocoChainsSubSubE';
import HandmadeChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/HandmadeChainsSubSubE';
import SilkyChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/SilkyChainsSubSubE';
import RodiumChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/RodiumChainsSubSubE';
import KajuKatliChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/KajuKatliChainsSubSubE';
import MachineChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/MachineChainsSubSubE';
import SolidNawabiChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/SolidNawabiChainsSubSubE';
import HollowNawabiChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/HollowNawabiChainsSubSubE';
import MadrasiChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/MadrasiChainsSubSubE';
import HollowChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/HollowChainsSubSubE';
import IndoChocoChainsSubSubE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EChains/IndoChocoChainsSubSubE';

// 18 karat PLAIN JEWELLERY Sub Sub Categories
import SetsSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/SetsSubSubPJE';
import MangalSutraSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/MangalSutraSubSubPJE';
import TopsSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/TopsSubSubPJE';
import HandmadeLadiesSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/HandmadeLadiesSubSubPJE';
import HandmadeGentsSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/HandmadeGentsSubSubPJE';
import BraceletsSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/BraceletsSubSubPJE';
import UvShapedBaliSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/UvShapedBaliSubSubPJE';
import BaliSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/BaliSubSubPJE';
import LongSetsSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/LongSetsSubSubPJE';
import ChokerSetsSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/ChokerSetsSubSubPJE';
import BangelsSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/BangelsSubSubPJE';
import KadeSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/KadeSubSubPJE';
import GoldPendentSubSubPJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/EPlainJewellery/GoldPendentSubSubPJE';

// 18 karat CASTING JEWELLERY Sub Sub Categories
import LadiesRingSubSubCJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingJewellery/LadiesRingSubSubCJE';
import GentsRingSubSubCJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingJewellery/GentsRingSubSubCJE';
import PendentsSubSubCJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingJewellery/PendentsSubSubCJE';
import TopsSubSubCJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingJewellery/TopsSubSubCJE';
import GodPendentsSubSubCJE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingJewellery/GodPendentsSubSubCJE';

// 18 karat CASTING CZ JEWELLERY Sub Sub Categories
import BaliSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/BaliSubSubCZE';
import NeckLaceSetsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/NeckLaceSetsSubSubCZE';
import MangalSutraSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/MangalSutraSubSubCZE';
import CockTailRingsSubSubCZ from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/CockTailRingsSubSubCZ';
import LadiesRingsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/LadiesRingsSubSubCZE';
import LadiesSolitaireRingsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/LadiesSolitaireRingsSubSubCZE';
import GentsRingsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/GentsRingsSubSubCZE';
import GentsSolitairRingsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/GentsSolitairRingsSubSubCZE';
import TopsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/TopsSubSubCZE';
import SolitaireTopsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/SolitaireTopsSubSubCZE';
import PendentSetsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/PendentSetsSubSubCZE';
import SolitairePendentSetsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/SolitairePendentSetsSubSubCZE';
import CharmsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/CharmsSubSubCZE';
import GodPendentsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/GodPendentsSubSubCZE';
import BraceLetsSubSubCZE from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/EighteenKaratSubCategory/EighteenKaratSubSubCategories/ECastingCZjewellery/BraceLetsSubSubCZE';
import ChocoChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/ChocoChainsSubSubT';
import HandmadeChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/HandmadeChainsSubSubT';
import SilkyChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/SilkyChainsSubSubT';
import RodiumChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/RodiumChainsSubSubT';
import KajuKatliChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/KajuKatliChainsSubSubT';
import MachineChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/MachineChainsSubSubT';
import SolidNawabiChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/SolidNawabiChainsSubSubT';
import HollowNawabiChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/HollowNawabiChainsSubSubT';
import MadrasiChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/MadrasiChainsSubSubT';
import HollowChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/HollowChainsSubSubT';
import IndoChocoChainsSubSubT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TChains/IndoChocoChainsSubSubT';
import SetsSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/SetsSubSubPJT';
import MangalSutraSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/MangalSutraSubSubPJT';
import TopsSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/TopsSubSubPJT';
import HandmadeLadiesSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/HandmadeLadiesSubSubPJT';
import HandmadeGentsSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/HandmadeGentsSubSubPJT';
import BraceletsSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/BraceletsSubSubPJT';
import UvShapedBaliSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/UvShapedBaliSubSubPJT';
import BaliSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/BaliSubSubPJT';
import LongSetsSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/LongSetsSubSubPJT';
import KadeSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/KadeSubSubPJT';
import GoldPendentSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/GoldPendentSubSubPJT';
import BangelsSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/BangelsSubSubPJT';
import ChokerSetsSubSubPJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TPlainJewellery/ChokerSetsSubSubPJT';
import LadiesRingSubSubCJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingJewellery/LadiesRingSubSubCJT';
import GentsRingSubSubCJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingJewellery/GentsRingSubSubCJT';
import PendentsSubSubCJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingJewellery/PendentsSubSubCJT';
import TopsSubSubCJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingJewellery/TopsSubSubCJT';
import GodPendentsSubSubCJT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingJewellery/GodPendentsSubSubCJT';
import NeckLaceSetsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/NeckLaceSetsSubSubCZT';
import MangalSutraSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/MangalSutraSubSubCZT';
import LadiesRingsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/LadiesRingsSubSubCZT';
import CockTailRingsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/CockTailRingsSubSubCZT';
import LadiesSolitaireRingsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/LadiesSolitaireRingsSubSubCZT';
import GentsRingsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/GentsRingsSubSubCZT';
import TopsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/TopsSubSubCZT';
import GentsSolitairRingsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/GentsSolitairRingsSubSubCZT';
import SolitaireTopsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/SolitaireTopsSubSubCZT';
import PendentSetsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/PendentSetsSubSubCZT';
import SolitairePendentSetsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/SolitairePendentSetsSubSubCZT';
import CharmsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/CharmsSubSubCZT';
import GodPendentsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/GodPendentsSubSubCZT';
import BraceLetsSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/BraceLetsSubSubCZT';
import BaliSubSubCZT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyKaratSubCategory/TwentyKaratSubSubCategories/TCastingCZJewellery/BaliSubSubCZT';
import SilkyChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/SilkyChainsSubSubTT';
import RodiumChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/RodiumChainsSubSubTT';
import KajuKatliChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/KajuKatliChainsSubSubTT';
import MachineChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/MachineChainsSubSubTT';
import SolidNawabiChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/SolidNawabiChainsSubSubTT';
import HollowNawabiChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/HollowNawabiChainsSubSubTT';
import MadrasiChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/MadrasiChainsSubSubTT';
import HandmadeChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/HandmadeChainsSubSubTT';
import HollowChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/HollowChainsSubSubTT';
import ChocoChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/ChocoChainsSubSubTT';
import IndoChocoChainsSubSubTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTChains/IndoChocoChainsSubSubTT';
import SetsSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/SetsSubSubPJTT';
import MangalSutraSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/MangalSutraSubSubPJTT';
import TopsSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/TopsSubSubPJTT';
import HandmadeLadiesSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/HandmadeLadiesSubSubPJTT';
import HandmadeGentsSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/HandmadeGentsSubSubPJTT';
import BraceletsSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/BraceletsSubSubPJTT';
import UvShapedBaliSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/UvShapedBaliSubSubPJTT';
import BaliSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/BaliSubSubPJTT';
import LongSetsSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/LongSetsSubSubPJTT';
import ChokerSetsSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/ChokerSetsSubSubPJTT';
import BangelsSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/BangelsSubSubPJTT';
import KadeSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/KadeSubSubPJTT';
import GodPendentSubSubPJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTPlainJewellery/GodPendentSubSubPJTT';
import GentsRingSubSubCJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingJewellery/GentsRingSubSubCJTT';
import LadiesRingSubSubCJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingJewellery/LadiesRingSubSubCJTT';
import PendentsSubSubCJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingJewellery/PendentsSubSubCJTT';
import TopsSubSubCJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingJewellery/TopsSubSubCJTT';
import GodPendentsSubSubCJTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingJewellery/GodPendentsSubSubCJTT';
import NeckLaceSetsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/NeckLaceSetsSubSubCZTT';
import MangalSutraSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/MangalSutraSubSubCZTT';
import LadiesRingsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/LadiesRingsSubSubCZTT';
import CockTailRingsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/CockTailRingsSubSubCZTT';
import LadiesSolitaireRingsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/LadiesSolitaireRingsSubSubCZTT';
import GentsRingsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/GentsRingsSubSubCZTT';
import GentsSolitairRingsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/GentsSolitairRingsSubSubCZTT';
import TopsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/TopsSubSubCZTT';
import SolitairePendentSetsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/SolitairePendentSetsSubSubCZTT';
import SolitaireTopsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/SolitaireTopsSubSubCZTT';
import PendentSetsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/PendentSetsSubSubCZTT';
import CharmsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/CharmsSubSubCZTT';
import GodPendentsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/GodPendentsSubSubCZTT';
import BraceLetsSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/BraceLetsSubSubCZTT';
import BaliSubSubCZTT from '../Screens/KaratScreens/KaratCategories/KaratSubCategories/TwentyTwoKaratSubcategory/TwentyKaratSubSubCategories/TTCastingCZJewellery/BaliSubSubCZTT';



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
                            name="GodPendent"
                            component={GodPendentPJ}
                            options={{
                                title: 'God Pendent',
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

                            {/* 18 KaratSubCategories */}

                          {/* 18 karat Chains */}

                           <Stack.Screen
                            name="SilkyChainsSubSubE"
                            component={SilkyChainsSubSubE}
                            options={{
                                title: 'Silky Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="RodiumChainsSubSubE"
                            component={RodiumChainsSubSubE}
                            options={{
                                title: 'Rodium Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                           <Stack.Screen
                            name="KajuKatliChainsSubSubE"
                            component={KajuKatliChainsSubSubE}
                            options={{
                                title: 'Kaju Katli',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="MachineChainsSubSubE"
                            component={MachineChainsSubSubE}
                            options={{
                                title: 'Machine Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="SolidNawabiChainsSubSubE"
                            component={SolidNawabiChainsSubSubE}
                            options={{
                                title: 'Solid Nawabi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="HollowNawabiChainsSubSubE"
                            component={HollowNawabiChainsSubSubE}
                            options={{
                                title: 'Hollow Nawabi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="MadrasiChainsSubSubE"
                            component={MadrasiChainsSubSubE}
                            options={{
                                title: 'Madrasi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="ChocoChainsSubSubE"
                            component={ChocoChainsSubSubE}
                            options={{
                                title: 'Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="HandmadeChainsSubSubE"
                            component={HandmadeChainsSubSubE}
                            options={{
                                title: 'Handmade Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="HollowChainsSubSubE"
                            component={HollowChainsSubSubE}
                            options={{
                                title: 'Hollow Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="IndoChocoChainsSubSubE"
                            component={IndoChocoChainsSubSubE}
                            options={{
                                title: 'Indo Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            {/* plain jewellery */}

                            <Stack.Screen
                            name="SetsSubSubPJE"
                            component={SetsSubSubPJE}
                            options={{
                                title: 'Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="MangalSutraSubSubPJE"
                            component={MangalSutraSubSubPJE}
                            options={{
                                title: 'Mangal Sutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="TopsSubSubPJE"
                            component={TopsSubSubPJE}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="HandmadeLadiesSubSubPJE"
                            component={HandmadeLadiesSubSubPJE}
                            options={{
                                title: 'Handmade Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="HandmadeGentsSubSubPJE"
                            component={HandmadeGentsSubSubPJE}
                            options={{
                                title: 'Handmade Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="BraceletsSubSubPJE"
                            component={BraceletsSubSubPJE}
                            options={{
                                title: 'Handmade Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="UvShapedBaliSubSubPJE"
                            component={UvShapedBaliSubSubPJE}
                            options={{
                                title: 'Uv Shaped Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="BaliSubSubPJE"
                            component={BaliSubSubPJE}
                            options={{
                                title: 'Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="LongSetsSubSubPJE"
                            component={LongSetsSubSubPJE}
                            options={{
                                title: 'Long Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="ChokerSetsSubSubPJE"
                            component={ChokerSetsSubSubPJE}
                            options={{
                                title: 'Choker Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="BangelsSubSubPJE"
                            component={BangelsSubSubPJE}
                            options={{
                                title: 'Bangels',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="KadeSubSubPJE"
                            component={KadeSubSubPJE}
                            options={{
                                title: 'Kade',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GoldPendentSubSubPJE"
                            component={GoldPendentSubSubPJE}
                            options={{
                                title: 'God Pendent',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            {/* 18 karat CASTING JEWELLERY */}

                            <Stack.Screen
                            name="LadiesRingSubSubCJE"
                            component={LadiesRingSubSubCJE}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GentsRingSubSubCJE"
                            component={GentsRingSubSubCJE}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="PendentsSubSubCJE"
                            component={PendentsSubSubCJE}
                            options={{
                                title: 'Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="TopsSubSubCJE"
                            component={TopsSubSubCJE}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="GodPendentsSubSubCJE"
                            component={GodPendentsSubSubCJE}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            {/* 18 karat CASTING CZ JEWELLERY */}   
                            <Stack.Screen
                            name="NeckLaceSetsSubSubCZE"
                            component={NeckLaceSetsSubSubCZE}
                            options={{
                                title: 'Necklace Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="MangalSutraSubSubCZE"
                            component={MangalSutraSubSubCZE}
                            options={{
                                title: 'Mangal Sutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="LadiesRingsSubSubCZE"
                            component={LadiesRingsSubSubCZE}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="CockTailRingsSubSubCZ"
                            component={CockTailRingsSubSubCZ}
                            options={{
                                title: 'Cock Tail Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="LadiesSolitaireRingsSubSubCZE"
                            component={LadiesSolitaireRingsSubSubCZE}
                            options={{
                                title: 'Ladies Solitaire Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GentsRingsSubSubCZE"
                            component={GentsRingsSubSubCZE}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GentsSolitairRingsSubSubCZE"
                            component={GentsSolitairRingsSubSubCZE}
                            options={{
                                title: 'Gents Solitaire Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="TopsSubSubCZE"
                            component={TopsSubSubCZE}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="SolitaireTopsSubSubCZE"
                            component={SolitaireTopsSubSubCZE}
                            options={{
                                title: 'Solitaire Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="PendentSetsSubSubCZE"
                            component={PendentSetsSubSubCZE}
                            options={{
                                title: 'Pendent Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="SolitairePendentSetsSubSubCZE"
                            component={SolitairePendentSetsSubSubCZE}
                            options={{
                                title: 'Solitaire Pendent Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="CharmsSubSubCZE"
                            component={CharmsSubSubCZE}
                            options={{
                                title: 'Charms',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GodPendentsSubSubCZE"
                            component={GodPendentsSubSubCZE}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="BraceLetsSubSubCZE"
                            component={BraceLetsSubSubCZE}
                            options={{
                                title: 'Bracelets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="BaliSubSubCZE"
                            component={BaliSubSubCZE}
                            options={{
                                title: 'Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                               {/* 20 KaratSubSubCategories */}

                               {/* Chains Jewellery */}
                               <Stack.Screen
                            name="HandmadeChainsSubSubT"
                            component={HandmadeChainsSubSubT}
                            options={{
                                title: 'Handmade Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                               <Stack.Screen
                            name="SilkyChainsSubSubT"
                            component={SilkyChainsSubSubT}
                            options={{
                                title: 'Silky Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                               <Stack.Screen
                            name="RodiumChainsSubSubT"
                            component={RodiumChainsSubSubT}
                            options={{
                                title: 'Rodium Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                               <Stack.Screen
                            name="KajuKatliChainsSubSubT"
                            component={KajuKatliChainsSubSubT}
                            options={{
                                title: 'Kaju Katli Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                               <Stack.Screen
                            name="MachineChainsSubSubT"
                            component={MachineChainsSubSubT}
                            options={{
                                title: 'Machine Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                               <Stack.Screen
                            name="SolidNawabiChainsSubSubT"
                            component={SolidNawabiChainsSubSubT}
                            options={{
                                title: 'Solid Nawabi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                               <Stack.Screen
                            name="HollowNawabiChainsSubSubT"
                            component={HollowNawabiChainsSubSubT}
                            options={{
                                title: 'Hollow Nawabi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                               <Stack.Screen
                            name="MadrasiChainsSubSubT"
                            component={MadrasiChainsSubSubT}
                            options={{
                                title: 'Madrasi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                               <Stack.Screen
                            name="HollowChainsSubSubT"
                            component={HollowChainsSubSubT}
                            options={{
                                title: 'Hollow Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                               <Stack.Screen
                            name="ChocoChainsSubSubT"
                            component={ChocoChainsSubSubT}
                            options={{
                                title: 'Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                               <Stack.Screen
                            name="IndoChocoChainsSubSubT"
                            component={IndoChocoChainsSubSubT}
                            options={{
                                title: 'Indo Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            {/* Plain Jewellery */}

                            <Stack.Screen
                            name="SetsSubSubPJT"
                            component={SetsSubSubPJT}
                            options={{
                                title: 'Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="MangalSutraSubSubPJT"
                            component={MangalSutraSubSubPJT}
                            options={{
                                title: 'Mangal Sutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="TopsSubSubPJT"
                            component={TopsSubSubPJT}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="HandmadeLadiesSubSubPJT"
                            component={HandmadeLadiesSubSubPJT}
                            options={{
                                title: 'Handmade ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="HandmadeGentsSubSubPJT"
                            component={HandmadeGentsSubSubPJT}
                            options={{
                                title: 'Handmade Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="BraceletsSubSubPJT"
                            component={BraceletsSubSubPJT}
                            options={{
                                title: 'Bracelets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="UvShapedBaliSubSubPJT"
                            component={UvShapedBaliSubSubPJT}
                            options={{
                                title: 'UV shaped Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="BaliSubSubPJT"
                            component={BaliSubSubPJT}
                            options={{
                                title: 'Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="LongSetsSubSubPJT"
                            component={LongSetsSubSubPJT}
                            options={{
                                title: 'Long Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="KadeSubSubPJT"
                            component={KadeSubSubPJT}
                            options={{
                                title: 'Kade',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GoldPendentSubSubPJT"
                            component={GoldPendentSubSubPJT}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="BangelsSubSubPJT"
                            component={BangelsSubSubPJT}
                            options={{
                                title: 'Bangels',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} /> 

                            <Stack.Screen
                            name="ChokerSetsSubSubPJT"
                            component={ChokerSetsSubSubPJT}
                            options={{
                                title: 'Choker Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />


                            {/* Casting jewellery */}
                            <Stack.Screen
                            name="LadiesRingSubSubCJT"
                            component={LadiesRingSubSubCJT}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GentsRingSubSubCJT"
                            component={GentsRingSubSubCJT}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="PendentsSubSubCJT"
                            component={PendentsSubSubCJT}
                            options={{
                                title: 'Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="TopsSubSubCJT"
                            component={TopsSubSubCJT}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                             
                            <Stack.Screen
                            name="GodPendentsSubSubCJT"
                            component={GodPendentsSubSubCJT}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

{/* casting CZ Jewellery */}

                            <Stack.Screen
                            name="NeckLaceSetsSubSubCZT"
                            component={NeckLaceSetsSubSubCZT}
                            options={{
                                title: 'Necklace Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="MangalSutraSubSubCZT"
                            component={MangalSutraSubSubCZT}
                            options={{
                                title: 'Mangal Sutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="LadiesRingsSubSubCZT"
                            component={LadiesRingsSubSubCZT}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                             
                            <Stack.Screen
                            name="CockTailRingsSubSubCZT"
                            component={CockTailRingsSubSubCZT}
                            options={{
                                title: 'Cocktail Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="LadiesSolitaireRingsSubSubCZT"
                            component={LadiesSolitaireRingsSubSubCZT}
                            options={{
                                title: 'Ladies Solitaire Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GentsRingsSubSubCZT"
                            component={GentsRingsSubSubCZT}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                            
                            <Stack.Screen
                            name="TopsSubSubCZT"
                            component={TopsSubSubCZT}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GentsSolitairRingsSubSubCZT"
                            component={GentsSolitairRingsSubSubCZT}
                            options={{
                                title: 'Gents Solitaire Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="SolitaireTopsSubSubCZT"
                            component={SolitaireTopsSubSubCZT}
                            options={{
                                title: 'Solitaire Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="PendentSetsSubSubCZT"
                            component={PendentSetsSubSubCZT}
                            options={{
                                title: 'Pendent Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="SolitairePendentSetsSubSubCZT"
                            component={SolitairePendentSetsSubSubCZT}
                            options={{
                                title: 'Solitaire Pendent Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="CharmsSubSubCZT"
                            component={CharmsSubSubCZT}
                            options={{
                                title: 'Charms',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GodPendentsSubSubCZT"
                            component={GodPendentsSubSubCZT}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="BraceLetsSubSubCZT"
                            component={BraceLetsSubSubCZT}
                            options={{
                                title: 'Bracelets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="BaliSubSubCZT"
                            component={BaliSubSubCZT}
                            options={{
                                title: 'Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            {/* 22 karat Sub Sub Categories */}

                            <Stack.Screen
                            name="SilkyChainsSubSubTT"
                            component={SilkyChainsSubSubTT}
                            options={{
                                title: 'Silky Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="RodiumChainsSubSubTT"
                            component={RodiumChainsSubSubTT}
                            options={{
                                title: 'Rodium Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="KajuKatliChainsSubSubTT"
                            component={KajuKatliChainsSubSubTT}
                            options={{
                                title: 'Kaju Katli Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="MachineChainsSubSubTT"
                            component={MachineChainsSubSubTT}
                            options={{
                                title: 'Machine Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="SolidNawabiChainsSubSubTT"
                            component={SolidNawabiChainsSubSubTT}
                            options={{
                                title: 'Solid Nawabi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="HollowNawabiChainsSubSubTT"
                            component={HollowNawabiChainsSubSubTT}
                            options={{
                                title: 'Hollow Nawabi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="MadrasiChainsSubSubTT"
                            component={MadrasiChainsSubSubTT}
                            options={{
                                title: 'Madrasi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="HandmadeChainsSubSubTT"
                            component={HandmadeChainsSubSubTT}
                            options={{
                                title: 'Handmade Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="HollowChainsSubSubTT"
                            component={HollowChainsSubSubTT}
                            options={{
                                title: 'Hollow Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="ChocoChainsSubSubTT"
                            component={ChocoChainsSubSubTT}
                            options={{
                                title: 'Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="IndoChocoChainsSubSubTT"
                            component={IndoChocoChainsSubSubTT}
                            options={{
                                title: 'Indo Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            {/* Plain Jewellery */}

                            <Stack.Screen
                            name="SetsSubSubPJTT"
                            component={SetsSubSubPJTT}
                            options={{
                                title: 'Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="MangalSutraSubSubPJTT"
                            component={MangalSutraSubSubPJTT}
                            options={{
                                title: 'Mangalsutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="TopsSubSubPJTT"
                            component={TopsSubSubPJTT}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="HandmadeLadiesSubSubPJTT"
                            component={HandmadeLadiesSubSubPJTT}
                            options={{
                                title: 'Handmade Ladies Rings ',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="HandmadeGentsSubSubPJTT"
                            component={HandmadeGentsSubSubPJTT}
                            options={{
                                title: 'Handmade Gents Rings ',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="BraceletsSubSubPJTT"
                            component={BraceletsSubSubPJTT}
                            options={{
                                title: 'Bracelets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="UvShapedBaliSubSubPJTT"
                            component={UvShapedBaliSubSubPJTT}
                            options={{
                                title: 'UV Shaped Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="BaliSubSubPJTT"
                            component={BaliSubSubPJTT}
                            options={{
                                title: 'Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="LongSetsSubSubPJTT"
                            component={LongSetsSubSubPJTT}
                            options={{
                                title: 'Long Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="ChokerSetsSubSubPJTT"
                            component={ChokerSetsSubSubPJTT}
                            options={{
                                title: 'Choker Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="BangelsSubSubPJTT"
                            component={BangelsSubSubPJTT}
                            options={{
                                title: 'Bangels',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="KadeSubSubPJTT"
                            component={KadeSubSubPJTT}
                            options={{
                                title: 'Kade',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="GodPendentSubSubPJTT"
                            component={GodPendentSubSubPJTT}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} /> 

                            {/* Casting jewellery */}

                            <Stack.Screen
                            name="GentsRingSubSubCJTT"
                            component={GentsRingSubSubCJTT}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="LadiesRingSubSubCJTT"
                            component={LadiesRingSubSubCJTT}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="PendentsSubSubCJTT"
                            component={PendentsSubSubCJTT}
                            options={{
                                title: 'Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="TopsSubSubCJTT"
                            component={TopsSubSubCJTT}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="GodPendentsSubSubCJTT"
                            component={GodPendentsSubSubCJTT}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} /> 

                            {/* Casting CZ Jewellery */}

                            <Stack.Screen
                            name="NeckLaceSetsSubSubCZTT"
                            component={NeckLaceSetsSubSubCZTT}
                            options={{
                                title: 'Necklace Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                             
                             <Stack.Screen
                            name="MangalSutraSubSubCZTT"
                            component={MangalSutraSubSubCZTT}
                            options={{
                                title: 'Mangal Sutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                             <Stack.Screen
                            name="LadiesRingsSubSubCZTT"
                            component={LadiesRingsSubSubCZTT}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                             <Stack.Screen
                            name="CockTailRingsSubSubCZTT"
                            component={CockTailRingsSubSubCZTT}
                            options={{
                                title: 'CockyTail Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                             <Stack.Screen
                            name="LadiesSolitaireRingsSubSubCZTT"
                            component={LadiesSolitaireRingsSubSubCZTT}
                            options={{
                                title: 'Ladies Solitaire Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                             <Stack.Screen
                            name="GentsRingsSubSubCZTT"
                            component={GentsRingsSubSubCZTT}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                             <Stack.Screen
                            name="GentsSolitairRingsSubSubCZTT"
                            component={GentsSolitairRingsSubSubCZTT}
                            options={{
                                title: 'Gents Solitaire Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        
                             <Stack.Screen
                            name="TopsSubSubCZTT"
                            component={TopsSubSubCZTT}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                            <Stack.Screen
                            name="SolitaireTopsSubSubCZTT"
                            component={SolitaireTopsSubSubCZTT}
                            options={{
                                title: 'Solitaire Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           <Stack.Screen
                            name="PendentSetsSubSubCZTT"
                            component={PendentSetsSubSubCZTT}
                            options={{
                                title: 'Pendents Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                             <Stack.Screen
                            name="SolitairePendentSetsSubSubCZTT"
                            component={SolitairePendentSetsSubSubCZTT}
                            options={{
                                title: 'Solitaire Pendents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                           
                             <Stack.Screen
                            name="CharmsSubSubCZTT"
                            component={CharmsSubSubCZTT}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                           
                             <Stack.Screen
                            name="GodPendentsSubSubCZTT"
                            component={GodPendentsSubSubCZTT}
                            options={{
                                title: 'God Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                             <Stack.Screen
                            name="BraceLetsSubSubCZTT"
                            component={BraceLetsSubSubCZTT}
                            options={{
                                title: 'Bracelets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#181818' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                             <Stack.Screen
                            name="BaliSubSubCZTT"
                            component={BaliSubSubCZTT}
                            options={{
                                title: 'Bali',
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