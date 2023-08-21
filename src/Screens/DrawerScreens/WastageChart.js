import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { moderateScale, moderateScaleVertical, textScale, height } from '../../utils/responsive';
import SimpleModal from '../SimpleModal';

const data = [
  { label: 'Gold', value: '1' },
  { label: 'Silver', value: '2' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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

  return (
    <View style={styles.container}>
      <View style={styles.Dropdowncontainer}>
        <View style={{ backgroundColor: "#fff", borderRadius: 15, backgroundColor: "black", color: "#eec06b" }}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#eec06b' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            // search
            maxHeight={500}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Gold' : '...'}
            // searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
      {/* Whatsapp */}
      <View style={{ bottom: -120, position: "absolute", right: 20 }}>
        <TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment} >
          <View style={styles.icontextAlignment}>
            <Image source={require("../../assets/whatsapp-white.png")} style={styles.whatsappIcon} />
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
            setData={setData}
          />
        </Modal>
      </View>
      {/* Whatsapp */}

    </View>

  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eec06b',
  },
  Dropdowncontainer: {
    flex: 0.1,
    padding: 16,
    justifyContent: "center",
    alignContent: "center"
  },

  dropdown: {
    height: moderateScaleVertical(50),
    borderColor: '#eec06b',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: moderateScale(15),
  },
  icon: {
    marginRight: moderateScale(5),
  },
  label: {
    position: 'absolute',
    left: moderateScale(22),
    top: moderateScaleVertical(8),
    zIndex: 999,
    paddingHorizontal: moderateScale(8),
    fontSize: textScale(14),
  },
  placeholderStyle: {
    color: "#eec06b",
    fontSize: textScale(20),
  },
  selectedTextStyle: {
    fontSize: textScale(20),
    color: "#eec06b",
  },
  iconStyle: {
    width: moderateScale(40),
    height: moderateScaleVertical(40),
    color: "#eec06b"

  },
  inputSearchStyle: {
    height: moderateScaleVertical(40),
    fontSize: textScale(16),
  },
  // Whatsapp style

  HelpButtonAlignment: {
    justifyContent: "center",
    backgroundColor: "#25D366",
    width: moderateScale(110),
    height: moderateScaleVertical(45),
    borderRadius: 40,
    marginBottom: moderateScaleVertical(100)
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