import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
// import Carts from '../Screens/TabScreens/Carts'
import Drawer from './Drawer'
import Delivery from '../Screens/TabScreens/Delivery'
import Filter from '../Screens/TabScreens/Filter'
import TabContent from '../Screens/TabContent'
import { height, moderateScale, moderateScaleVertical, textScale } from "../utils/responsive"

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
    return (

        <Tab.Navigator>
            {/* <Tab.Screen
                name='Home'
                component={Drawer}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/home.png")} style={styles.IconSize} />
                        )
                    }
                }} /> */}
            {/* <Tab.Screen name='Filter' component={Filter}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 80, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/filter.png")} style={styles.IconSize} />
                        )
                    }
                }}
            /> */}
            {/* <Tab.Screen name='Cart2' component={Carts}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TouchableOpacity onPress={() => { navigation.navigate('cart') }}>
                                <Image source={require("../assets/cart.png")} style={styles.IconSize} />
                            </TouchableOpacity>
                        )
                    }
                }} /> */}

            {/* <Tab.Screen name='Delivery' component={Delivery}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/delivery.png")} style={styles.IconSize} />
                        )
                    }
                }} /> */}
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    IconSize: {
        marginTop:moderateScaleVertical(2),
        width: moderateScale(30),
        height: moderateScaleVertical(27),
        // resizeMode: "cover",
        // paddingBottom: 30,
    },
})