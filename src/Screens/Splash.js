import React, { useEffect, useState } from 'react'
import { Animated, ImageBackground, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../assets/logo.png';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('getstarted')
        }, 2000)
    }, [])

    return (
        <SafeAreaView style={styles.background} >
            <Animated.View>
                <ImageBackground style={styles.image} source={Logo} />
            </Animated.View>
        </SafeAreaView>
    )
}

export default Splash;

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black"
    },
    image: {
        width: 450,
        height: 450,
    }
})