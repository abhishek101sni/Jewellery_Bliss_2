import axios from 'axios';
import { BASE_URL } from '../../Screens/config';
export const updateUserDetails = async (userToken, userDetails) => {
    let formDetails = {};
    const headers = { Authorization: `Bearer ${userToken}` };
    try {
        const response = await axios.post(`${BASE_URL}api/user-details/add`, userDetails, {
            headers,
        });
        formDetails = response.data;
    } catch (e) {
        console.log(`error from Redux: ${e}`);
        console.log(`Response: ${JSON.stringify(e.response)}`);
    }
    return formDetails;
};

export const fetchUserDetails = async (id, userToken) => {
    if (!id) {
        throw new Error(`id not found`);
    }
    const headers = { Authorization: userToken };
    let userDetails = {};
    try {
        const response = await axios.get(`${BASE_URL}api/user-details/${id}`, { headers });
        console.log('Structured data here', response.data);
        if (response.data) {
            userDetails = { ...response?.data?.userDetails };
        }
    } catch (e) {
        console.log(e);
    }
    return userDetails;
};