
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image, Modal } from 'react-native'
import axios from 'axios';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
import SimpleModal from '../SimpleModal';

const ManageOrder = ({ navigation }) => {
    const [orderHistory, setOrderHistory] = useState([]);
    const API_URL = 'https://bliss-app-backend-production.up.railway.app/api/checkouts/order';
    const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtIFNpbmdoIiwiZW1haWwiOiI1MzJAZ21haWwuY29tIiwiX2lkIjoiNjRlMzQ1MmNkYzQ4Yjc0MThmZGFiOWQ3IiwidXNlckNvdW50IjozLCJtb2JpbGUiOiIyMzY0NDQ0NDg5IiwiaWF0IjoxNjkyNjE1OTgwfQ.9dygSEqZolBwpDqOuKIgK4gRkYEBq2rFQBJl2v2C_ts';

    useEffect(() => {
        fetchOrderHistory();
    }, []);

    const fetchOrderHistory = async () => {
        try {
            const response = await axios.get(API_URL, {
                headers: {
                    Authorization: `Bearer ${JWT_TOKEN}`,
                },
            });
            setOrderHistory(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching order history:', error.message);
        }
        // console.log(order)
    };

    // WhatsApp
    const [isModalVisible, setisModalVisible] = useState(false);
    const [chooseData, setChooseData] = useState();

    const changeModalVisible = bool => {
        setisModalVisible(bool);
    };

    const setData = data => {
        setChooseData(data);
    };

    // WhatsApp

    return (
        <View style={styles.background}>
            <View style={{}}>
                <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
            </View>
            <ScrollView>
                <View style={{ flex: 1, marginBottom: moderateScaleVertical(60) }}>
                    {orderHistory.map((order, index) => {
                        const createdAtDate = new Date(order.createdAt);
                        const formattedDate = createdAtDate.toISOString().split('T')[0];
                        const last4DigitsOfOrderNo = order._id.slice(-4);
                        return (
                            <View key={index}>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: moderateScale(40), marginVertical: moderateScaleVertical(10), justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Date</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Order No</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Qty</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "#bc9954", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-60) }}>Total</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-70) }}>:</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{formattedDate}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{last4DigitsOfOrderNo}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.items[0].quantity}</Text>
                                            <Text style={{ fontFamily: "HurmeGeometricSans1SemiBold", fontSize: textScale(13), color: "black", marginVertical: moderateScaleVertical(1), marginLeft: moderateScale(-140) }}>{order.total}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
            <View style={{ bottom: moderateScaleVertical(-42), position: 'absolute', right: moderateScale(5) }}>

                <TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment}>
                    <View style={styles.icontextAlignment}>
                        <Image source={require('../../assets/whatsapp-white.png')} style={styles.whatsappIcon} />
                        <Text style={styles.helpText}>Help</Text>
                    </View>
                </TouchableOpacity>

                <Modal transparent={true} animationType="fade" visible={isModalVisible} nRequestClose={() => changeModalVisible(false)}>
                    <SimpleModal changeModalVisible={changeModalVisible} setData={setData} />
                </Modal>

            </View>

            {/* Whatsapp end */}

            {/* BottomTabNavigator */}
            <ImageBackground source={require('../../assets/CompressedTexture3.jpg')} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignSelf: "center" }} style={{ height: moderateScaleVertical(50), width: moderateScale(370), alignSelf: 'center', marginBottom: moderateScale(4), marginTop: moderateScaleVertical(0) }}>
                <View style={{ marginTop: moderateScaleVertical(9), flexDirection: 'row', justifyContent: 'space-around' }}>

                    <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}>
                        <Image source={require('../../assets/home.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('cart'); }}>
                        <Image source={require('../../assets/cart.png')} style={{ width: moderateScale(35), height: moderateScaleVertical(35), }} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );
};

export default ManageOrder;


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#1A2228"
    },
    image: {
        width: moderateScale(450),
        height: moderateScaleVertical(450),
    },
    // Whatsapp style

    HelpButtonAlignment: {
        justifyContent: 'center',
        backgroundColor: '#25D366',
        width: moderateScale(90),
        height: moderateScaleVertical(40),
        borderRadius: 40,
        marginBottom: moderateScaleVertical(100),
        // position: "fixed",
    },
    icontextAlignment: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: moderateScale(-30),
        marginHorizontal: moderateScale(15),
    },
    whatsappIcon: {
        width: moderateScale(20),
        height: moderateScaleVertical(20),
        // position:"fixed",
    },
    helpText: {
        color: 'white',
        fontSize: textScale(13),
        fontWeight: 'bold',
    },
    goldenStrip: {
        width: "100%",
        height: 3,
    },
})