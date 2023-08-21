// import { FILLDETAILS } from './FormDetails.constant';
// import { FILLDETAILS } from './FormDetails.constant';
import { FILLDETAILS } from './formDetails.constant';
import { GET_DETAILS } from './formDetails.constant';
import { updateUserDetails, fetchUserDetails } from './formDetails.service';

export const fillDetails = (userToken, userDetails) => {
    return async function (dispatch) {
        const details = await updateUserDetails(userToken, userDetails);
        const { data } = details;
        console.log('fill details', data);
        await getUserDetails(data._id, userToken, dispatch);
    };
};

export const getUserDetailsActionCreator = (id, userToken) => {
    return async function (dispatch) {
        console.log('getUserDetails action creator', id);
        await getUserDetails(id, userToken, dispatch);
    };
};

const getUserDetails = async (id, userToken, dispatch) => {
    const userDetailsData = await fetchUserDetails(id, userToken);
    dispatch({
        type: FILLDETAILS,
        data: userDetailsData,
    });
};