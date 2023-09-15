import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../Screens/DrawerContent';
import { Button, Image, TouchableOpacity, View , SafeAreaView } from 'react-native';

import WelcomeScreen from '../Screens/DrawerScreens/WelcomeScreen'
import OurProduct from '../Screens/DrawerScreens/OurProduct';
import ManageOrder from '../Screens/DrawerScreens/ManageOrder';
import WastageChart from '../Screens/DrawerScreens/WastageChart';
import AboutUs from '../Screens/DrawerScreens/AboutUs';
import PrivacyPolicy from '../Screens/DrawerScreens/PrivacyPolicy'
import TnC from '../Screens/DrawerScreens/TnC'
import ServiceAvailable from '../Screens/DrawerScreens/ServiceAvailable';
import { moderateScale } from '../utils/responsive';

const DrawerNav = createDrawerNavigator()

const Drawer = ({ navigation }) => {

    return (
    //    <SafeAreaView style={{flex:1}}>
        <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <DrawerNav.Screen name='Profile' component={WelcomeScreen} options={{
                title: '',
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: '#bc9954',
                headerTitleStyle: { color: '#bc9954' },

                headerRight: () => (

                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(20), justifyContent: "space-evenly"}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Appointment")}>
                            <Image
                                style={{ width: 30, height: 30, marginRight: 20, tintColor: "#bc9954" }}
                                source={require('../assets/Appointment.png')}
                            // resizeMode='contain'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("CustomiseOrder")}>
                            <Image
                                style={{ width: 30, height: 30, marginRight: 20, tintColor: "#bc9954" }}
                                source={require('../assets/customise.png')}
                            // resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <DrawerNav.Screen name='ourproduct' component={OurProduct} />
            <DrawerNav.Screen name='manageorder' component={ManageOrder} />
            <DrawerNav.Screen name='wastagechart' component={WastageChart} />
            <DrawerNav.Screen name='aboutus' component={AboutUs} />
            <DrawerNav.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
            <DrawerNav.Screen name='T&C' component={TnC} />
            <DrawerNav.Screen name='Service Available' component={ServiceAvailable} />
        </DrawerNav.Navigator>
        // </SafeAreaView>
    )
}

export default Drawer
