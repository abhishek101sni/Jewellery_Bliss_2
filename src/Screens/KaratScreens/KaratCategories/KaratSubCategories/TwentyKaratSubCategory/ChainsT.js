import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Modal, ImageBackground , SafeAreaView} from 'react-native'
import { StyleSheet } from 'react-native';
import {height, moderateScale, moderateScaleVertical, textScale } from "../../../../../utils/responsive"
import SimpleModal from '../../../../SimpleModal';
import { Axios } from 'axios';

const ChainsT = ({ navigation }) => {

    const ChainsData = [
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/AllNawabi/allnawabi.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Silky Chains"
    
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/DoubleMaruti/doublemaruti.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Indo Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/Handmadeandhollow/handmadeandhollow.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Rodium Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/kajuKatli/kajukatli.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Kaju Katli Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/machinechains/machinechains.jpg'),
          onPress: () => {
          },
          title: "Machine Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/nawabi/nawabi.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Solid Nawabi Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/rodium6g/rodium6g.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Hollow Nawabi Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/rodium7g/7g.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Madrasi Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/rodiumChains/rodiumchains.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Handmade Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/rodium10g/rodium10g.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Hollow Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/silky/silky.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Choco Chains",
        },
        {
          img: require('../../../../../assets/PRODUCTS/CHAINS/CHAINSSUBCATEGORIES/indochoco/indochoco.jpg'),
          onPress: () => {
            navigation.navigate("");
          },
          title: "Indo Choco Chains",
        },
      ];
  return (
    <View>
      <Text>ChainsT</Text>
    </View>
  )
}

export default ChainsT

const styles = StyleSheet.create({})