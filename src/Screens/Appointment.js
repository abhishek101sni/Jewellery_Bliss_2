// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground,
//   SafeAreaView,
//   StyleSheet,
//   Image,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import {
//   height,
//   moderateScale,
//   moderateScaleVertical,
//   textScale,
// } from '../utils/responsive';
// import axios from 'axios';

// export default function Appointment({navigation}) {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [name, setName] = useState(null);
//   const [phone, setPhone] = useState(null);
//   const [date, setDate] = useState('');

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   // const handleConfirm = (date) => {
//   //     setDate(date);
//   //     console.log("this date", date)
//   //     hideDatePicker();
//   // };
//   const handleConfirm = selectedDate => {
//     setDate(selectedDate);
//     hideDatePicker();
//   };

//   const dateOfBooking = () => {
//     let newDate = new Date(date).toLocaleDateString();
//     console.log('newdate', newDate);
//     return date !== '' ? newDate : '';
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(
//         'https://jewellery-bliss.onrender.com/api/bookings/make',
//         {
//           name: name, // Replace with the user's name
//           // mobile: mobile, // Replace with the user's mobile number
//           phone: phone, // Replace with the user's mobile number
//           date: date, // Use the selected date
//         },
//       );

//       // Handle the response as needed
//       console.log('API response:', response.data);
//     } catch (error) {
//       // Handle errors
//       console.error('Error making API request:', error);
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <ImageBackground
//         style={{flex: 1}}
//         source={require('../assets/background-image2.png')}>
//         <ScrollView>
//           <View style={{flex: 1}}>
//             <View style={styles.logoAlignment}>
//               <Image
//                 source={require('../assets/logo.png')}
//                 style={styles.logoSize}
//               />
//             </View>

//             <View style={styles.LogInTitle}>
//               <Text style={styles.LogInText}>Book an Appointment</Text>
//             </View>

//             <View style={{flexDirection: 'column'}}>
//               <TextInput
//                 style={styles.NameStyle}
//                 autoCapitalize="words" // Updated
//                 keyboardType="default"
//                 autoCorrect={false}
//                 placeholder="Enter your Name"
//                 placeholderTextColor="#C7C7CD"
//                 onChangeText={text => setName(text)}
//               />
//               <TextInput
//                 style={styles.NameStyle}
//                 autoCapitalize="none"
//                 keyboardType="Numeric"
//                 autoCorrect={false}
//                 placeholder="Enter your Mobile No."
//                 placeholderTextColor="#C7C7CD"
//                 onChangeText={text => setPhone(text)}
//               />
//               <TextInput
//                 style={styles.NameStyle}
//                 value={dateOfBooking()}
//                 autoCapitalize
//                 keyboardType="Numeric"
//                 autoCorrect={false}
//                 placeholder="Select Date"
//                 placeholderTextColor="#C7C7CD"
//                 // onChangeText={(text) => setMobile(text)}
//               />

//               {/* <View>
//                                 <TouchableOpacity onPress={showDatePicker}>
//                                     <Text style={{
//                                         marginTop: moderateScaleVertical(35), fontSize: textScale(13), fontFamily: "HurmeGeometricSans1", color: "#C7C7CD", marginLeft: moderateScale(36), padding: 4
//                                     }}>Select Date</Text>
//                                 </TouchableOpacity>
//                                 <View style={styles.line}></View>

//                                 <DateTimePickerModal
//                                     isVisible={isDatePickerVisible}
//                                     mode="date"
//                                     onConfirm={handleConfirm}
//                                     onCancel={hideDatePicker}
//                                 />
//                             </View> */}

//               <View>
//                 <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
//                   <View
//                     style={{
//                       alignItems: 'center',
//                       marginTop: moderateScaleVertical(20),
//                     }}>
//                     {/* <Text style={{ fontSize: 20, }}>Choose Date</Text> */}
//                     <Image
//                       source={require('../assets/Appointment.png')}
//                       style={{width: 30, height: 30}}
//                     />
//                   </View>
//                 </TouchableOpacity>

//                 <DateTimePickerModal
//                   isVisible={isDatePickerVisible}
//                   mode="date"
//                   onConfirm={handleConfirm}
//                   onCancel={hideDatePicker}
//                 />
//               </View>

//               <View>
//                 {/* <TouchableOpacity onPress={handleSubmit} style={styles.logInButtonAlignment} > */}

//                 {/* <TouchableOpacity onPress={() => {Alert.alert(`Your Appointment is Scheduled on ${date}` ), console.log("Appointment Booking Details Sent")}} style={styles.logInButtonAlignment} >  */}
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate('AppointmentThankyou');
//                   }}
//                   style={styles.logInButtonAlignment}>
//                   <ImageBackground
//                     source={require('../assets/CompressedTexture3.jpg')}
//                     style={styles.ImageBackgroundStyle}
//                     imageStyle={{borderRadius: 80}}>
//                     <Text style={styles.logInButtonText}>SUBMIT</Text>
//                   </ImageBackground>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </ScrollView>

//         {/* BottomTabNavigator */}
//         {/* <ImageBackground source={require('../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ position:"static ",height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) }}>
//                     <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

//                         <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
//                             <Image source={require('../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
//                         </TouchableOpacity>

//                         <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
//                             <Image source={require('../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
//                         </TouchableOpacity>

//                     </View>
//                 </ImageBackground> */}
//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   logoSize: {
//     width: moderateScale(300),
//     height: moderateScaleVertical(300),
//   },
//   logoAlignment: {
//     flex: 0.3,
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: moderateScaleVertical(0),
//   },
//   LogInTitle: {
//     flex: 0.5,
//     fontSize: textScale(18),
//     alignSelf: 'center',
//     marginTop: moderateScaleVertical(10),
//     marginBottom: moderateScaleVertical(10),
//   },
//   LogInText: {
//     fontSize: textScale(20),
//     marginTop: moderateScaleVertical(10),
//     marginBottom: moderateScaleVertical(10),
//     textAlign: 'center',
//     color: 'black',
//     fontFamily: 'HurmeGeometricSans1',
//   },
//   NameStyle: {
//     marginTop: moderateScaleVertical(15),
//     fontSize: textScale(13),
//     fontFamily: 'HurmeGeometricSans1',
//     alignSelf: 'center',
//     color: 'black',
//     width: '80%',
//     marginBottom: moderateScaleVertical(5),
//     borderBottomWidth: moderateScale(1.5),
//     borderBottomColor: '#bc9954',
//     paddingBottom: moderateScaleVertical(0),
//     paddingLeft: moderateScale(0),
//   },

//   logInButtonAlignment: {
//     alignItems: 'center',
//   },
//   logInButtonText: {
//     fontSize: textScale(20),
//     color: 'black',
//     marginLeft: moderateScale(0),
//     borderRadius: 40,
//     // paddingTop: moderateScaleVertical(3),
//     fontFamily: 'HurmeGeometricSans1',
//   },
//   ImageBackgroundStyle: {
//     alignItems: 'center',
//     padding: moderateScale(9),
//     width: moderateScale(200),
//     height: moderateScaleVertical(60),
//     justifyContent: 'center',
//     marginTop: moderateScaleVertical(40),
//   },
//   line: {
//     width: '80%',
//     height: moderateScaleVertical(1.5),
//     backgroundColor: '#bc9954',
//     alignSelf: 'center',
//     marginBottom: moderateScaleVertical(15),
//   },
// });

import React, {useState , useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../utils/responsive';
import axios from 'axios';

export default function Appointment({navigation}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState('');

  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    dateOfBookingRef.current.blur();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // const handleConfirm = (date) => {
  //     setDate(date);
  //     console.log("this date", date)
  //     hideDatePicker();
  // };
  const handleConfirm = selectedDate => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const dateOfBooking = () => {
    let newDate = new Date(date).toLocaleDateString();
    console.log('newdate', newDate);
    return date !== '' ? newDate : '';
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://jewellery-bliss.onrender.com/api/bookings/make',
        {
          name: name, // Replace with the user's name
          // mobile: mobile, // Replace with the user's mobile number
          phone: phone, // Replace with the user's mobile number
          date: date, // Use the selected date
        },
        // navigation.navigate("AppointmentThankyou")
        Alert.alert("Booking Confirmed")
      );

      // Handle the response as needed
      console.log('API response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error making API request:', error);
    }
  };

  // stop fucusing
  const dateOfBookingRef = useRef(null);


  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/background-image2.png')}>
        <ScrollView>
          <View style={{flex: 1}}>
            <View style={styles.logoAlignment}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.logoSize}
              />
            </View>

            <View style={styles.LogInTitle}>
              <Text style={styles.LogInText}>Book an Appointment</Text>
            </View>

            <View style={{flexDirection: 'column'}}>
              <TextInput
                style={styles.NameStyle}
                autoCapitalize="words" // Updated
                keyboardType="default"
                autoCorrect={false}
                placeholder="Enter your Name"
                placeholderTextColor="#C7C7CD"
                onChangeText={text => setName(text)}
                // onChangeText={text => {
                //   setName(text);
                //   setSubmitDisabled(!text || !phone);
                // }}
              />
              <TextInput
                style={styles.NameStyle}
                autoCapitalize="none"
                keyboardType="Numeric"
                autoCorrect={false}
                placeholder="Enter your Mobile No."
                placeholderTextColor="#C7C7CD"
                onChangeText={text => setPhone(text)}
                // onChangeText={text => {
                //   setPhone(text);
                //   setSubmitDisabled(!name || !text);
                // }}
              />
              <TextInput
                style={styles.NameStyle}
                ref={dateOfBookingRef}
                value={dateOfBooking()}
                autoCapitalize
                keyboardType="Numeric"
                autoCorrect={false}
                placeholder="Select Date"
                placeholderTextColor="#C7C7CD"
                // onChangeText={(text) => setMobile(text)}
              />

              {/* <View>
                                <TouchableOpacity onPress={showDatePicker}>
                                    <Text style={{
                                        marginTop: moderateScaleVertical(35), fontSize: textScale(13), fontFamily: "HurmeGeometricSans1", color: "#C7C7CD", marginLeft: moderateScale(36), padding: 4
                                    }}>Select Date</Text>
                                </TouchableOpacity>
                                <View style={styles.line}></View>

                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View> */}

              <View>
                <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop: moderateScaleVertical(20),
                    }}>
                    {/* <Text style={{ fontSize: 20, }}>Choose Date</Text> */}
                    <Image
                      source={require('../assets/Appointment.png')}
                      style={{width: 30, height: 30}}
                    />
                  </View>
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>

              <View>
                <TouchableOpacity onPress={handleSubmit} style={styles.logInButtonAlignment} >

                {/* <TouchableOpacity onPress={() => {Alert.alert(`Your Appointment is Scheduled on ${date}` ), console.log("Appointment Booking Details Sent")}} style={styles.logInButtonAlignment} >  */}
                {/* <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AppointmentThankyou');
                  }}
                  style={styles.logInButtonAlignment}
                  disabled={isSubmitDisabled}> */}
                  <ImageBackground
                    source={require('../assets/CompressedTexture3.jpg')}
                    style={styles.ImageBackgroundStyle}
                    imageStyle={{borderRadius: 80}}>
                    <Text style={styles.logInButtonText}>SUBMIT</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* BottomTabNavigator */}
        {/* <ImageBackground source={require('../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ position:"static ",height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4) }}>
                    <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

                        <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
                            <Image source={require('../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
                            <Image source={require('../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
                        </TouchableOpacity>

                    </View>
                </ImageBackground> */}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoSize: {
    width: moderateScale(300),
    height: moderateScaleVertical(300),
  },
  logoAlignment: {
    flex: 0.3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScaleVertical(0),
  },
  LogInTitle: {
    flex: 0.5,
    fontSize: textScale(18),
    alignSelf: 'center',
    marginTop: moderateScaleVertical(10),
    marginBottom: moderateScaleVertical(10),
  },
  LogInText: {
    fontSize: textScale(20),
    marginTop: moderateScaleVertical(10),
    marginBottom: moderateScaleVertical(10),
    textAlign: 'center',
    color: 'black',
    fontFamily: 'HurmeGeometricSans1',
  },
  NameStyle: {
    marginTop: moderateScaleVertical(15),
    fontSize: textScale(13),
    fontFamily: 'HurmeGeometricSans1',
    alignSelf: 'center',
    color: 'black',
    width: '80%',
    marginBottom: moderateScaleVertical(5),
    borderBottomWidth: moderateScale(1.5),
    borderBottomColor: '#bc9954',
    paddingBottom: moderateScaleVertical(0),
    paddingLeft: moderateScale(0),
  },

  logInButtonAlignment: {
    alignItems: 'center',
  },
  logInButtonText: {
    fontSize: textScale(20),
    color: 'black',
    marginLeft: moderateScale(0),
    borderRadius: 40,
    // paddingTop: moderateScaleVertical(3),
    fontFamily: 'HurmeGeometricSans1',
  },
  ImageBackgroundStyle: {
    alignItems: 'center',
    padding: moderateScale(9),
    width: moderateScale(200),
    height: moderateScaleVertical(60),
    justifyContent: 'center',
    marginTop: moderateScaleVertical(40),
  },
  line: {
    width: '80%',
    height: moderateScaleVertical(1.5),
    backgroundColor: '#bc9954',
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(15),
  },
});
