import { FILLDETAILS } from './formDetails.constant';
import { GET_DETAILS } from './formDetails.constant';

export const initialState = {
    brandName: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    locality: '',
    gstNo: '',
    storePersonName: '',
    contactNo: '',
    gpsLocation: {
        latitude: 37.779,
        longitude: -122.4194,
    },
};

export const fillDetails = (state = initialState, action = {}) => {
    switch (action.type) {
        case FILLDETAILS:
            return {
                ...state,
                ...action.data,
            };
        case GET_DETAILS:
            return action.data;
        default:
            return state;
    }
};