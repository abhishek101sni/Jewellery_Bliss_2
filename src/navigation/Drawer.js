import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../Screens/DrawerContent';
import { Dimensions } from 'react-native';

import WelcomeScreen from '../Screens/DrawerScreens/WelcomeScreen'
import OurProduct from '../Screens/DrawerScreens/OurProduct';
import ManageOrder from '../Screens/DrawerScreens/ManageOrder';
import WastageChart from '../Screens/DrawerScreens/WastageChart';
import AboutUs from '../Screens/DrawerScreens/AboutUs';
import PrivacyPolicy from '../Screens/DrawerScreens/PrivacyPolicy'
import TnC from '../Screens/DrawerScreens/TnC'
import ServiceAvailable from '../Screens/DrawerScreens/ServiceAvailable';

const DrawerNav = createDrawerNavigator()

const Drawer = () => {

    return (
        <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <DrawerNav.Screen name='Profile' component={WelcomeScreen} options={{
                title: '',
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: '#bc9954',
                headerTitleStyle: { color: '#bc9954' }
            }} />
            <DrawerNav.Screen name='ourproduct' component={OurProduct} />
            <DrawerNav.Screen name='manageorder' component={ManageOrder} />
            <DrawerNav.Screen name='wastagechart' component={WastageChart} />
            <DrawerNav.Screen name='aboutus' component={AboutUs} />
            <DrawerNav.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
            <DrawerNav.Screen name='T&C' component={TnC} />
            <DrawerNav.Screen name='Service Available' component={ServiceAvailable} />
        </DrawerNav.Navigator>
    )
}

export default Drawer
