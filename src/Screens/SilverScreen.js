import React from 'react';
import { StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const GoldScreen = () => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>

            <ScrollView>

                <View>
                    <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-around", marginHorizontal: 30 }}>
                        <Image source={require("../assets/silver-Bars.png")} style={{ width: moderateScale(250), height: moderateScaleVertical(250), borderRadius: 30 }} />
                    </View>
                </View>

                <View style={styles.container}>
                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: "#C0C0C0", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(390), alignSelf: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >SILVER COINS</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Weight</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Silver Price</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Making</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Gst</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(12), fontWeight: "700" }}>Net Amt</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), justifyContent: "space-evenly", alignSelf: "center" }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>1 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 73.50</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>1.47</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>2.205</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 77.175</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>2 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 147</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>2.94</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>4.41</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 154.35.</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), alignSelf: "center" }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>5 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 367.5</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>7.35</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>11.025</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 385.875</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>10 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 735</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>14.70</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>22.05</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 771.75.</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), alignSelf: "center" }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>20 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 1,470</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>29.40</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>44.10</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 1543.50.</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", width: moderateScale(390), alignSelf: "center" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>50 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 3,675</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>73.50</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>110.25</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 3,858.75</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", width: moderateScale(390), alignSelf: "center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(11), fontWeight: "700" }}>100 Gram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 7,350</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>147</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>220.5</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(11) }}>₹ 7707.5</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default GoldScreen;

const styles = StyleSheet.create({
    container: {
        // padding: 15,
        // fontSize: textScale(30),
        alignItems: "center",
        alignSelf: "center"
    },
    tableHeader: {
        borderColor: 'black',
    },
    GoldCoinsText: {
        justifyContent: "center",
        fontSize: textScale(45),
        color: "black",
        fontWeight: "600",
    },
    flex: {
        marginTop: moderateScaleVertical(30),
        backgroundColor: "#eec06b",
        borderRadius: 20,
        width: "98%",
        alignContent: "center",
        marginLeft: moderateScale(4.5),

    },
    line: {
        width: "95%",
        height: moderateScaleVertical(1.5),
        // backgroundColor: "#a4a4a4",
        backgroundColor: "black",
        alignSelf: 'center',
        marginBottom: moderateScaleVertical(15),
    },
    container: {
        paddingTop: 20,
        paddingHorizontal: 30,
    },
});