import React from 'react'
import { Animated, ImageBackground, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../assets/logo.png';

const WaitSplash = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.background} >
            <Animated.View>
                <ImageBackground style={styles.image} source={Logo} />
            </Animated.View>
        </SafeAreaView>
    )
}

export default WaitSplash;

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