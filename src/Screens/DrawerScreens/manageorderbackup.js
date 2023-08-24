
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const ManageOrder = () => {
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
        } catch (error) {
            console.error('Error fetching order history:', error.message);
        }
    };

    return (
        <View>
            <Text>Order History:</Text>
            {orderHistory.map((order, index) => (
                <View key={index}>
                    <Text>Order ID: {order._id}</Text>
                    <Text>Total Amount: {order.totalAmount}</Text>
                    {/* Other order details */}
                </View>
            ))}
        </View>
    );
};

export default ManageOrder;