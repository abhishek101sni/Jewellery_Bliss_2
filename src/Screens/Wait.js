import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

const Wait = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#eec06b"
        }}>
            <Image source={require('../assets/wait.png')} />
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', marginLeft: 20 }}>
                    Awaited
                </Text>
                <Text style={{ color: 'black' }}>For Your approval admin</Text>
            </View>
        </View>
    )
}
export default Wait;