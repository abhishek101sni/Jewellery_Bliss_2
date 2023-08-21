import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'
import { setActiveItem } from '../redux/action';
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'


const Product = ({ navigation }) => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getAPIDATA = async () => {
        const url = "https://bliss-app-backend-production.up.railway.app/api/products/?search=20";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getAPIDATA();
    }, []);

    const handlePress = (item) => {
        dispatch(setActiveItem(item));
        navigation.navigate('singleproduct');
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View style={{ top: height - 938, }}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={{ borderWidth: 3, width: 1090, alignSelf: "center" }} />
            </View>

            <FlatList contentContainerStyle={{ alignItems: "center" }}
                data={data}
                numColumns={2}
                renderItem={({ item, index }) => <View key={index} style={styles.View1}>

                    <View style={styles.View2}>
                        <TouchableOpacity onPress={() => handlePress(item)}>
                            <View style={styles.View3}>
                                <Image style={styles.ImageView} source={{ uri: item.images[0] }} />
                                <Text style={styles.View5}>{item?.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>}
            />
        </ImageBackground>

    )
}

export default Product

const styles = StyleSheet.create({
    View1: {
        margin: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: moderateScale(20)
    },

    View2: {
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        marginRight: moderateScale(10),
        marginTop: moderateScaleVertical(15),
        marginBottom: moderateScaleVertical(15),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: moderateScale(150),
        height: moderateScaleVertical(180),
    },

    View3: {
        backgroundColor: 'white',
        borderRadius: 35
    },

    ImageView: {
        height: moderateScaleVertical(155),
        width: moderateScale(150),
        alignSelf: 'center',
        borderRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    View5: {
        height: moderateScaleVertical(40),
        width: moderateScale(150),
        color: 'black',
        paddingTop: 13,
        backgroundColor: '#ECC440',
        textAlign: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        fontWeight: "900",
        fontSize: textScale(10),
        justifyContent: "center",
    }
})