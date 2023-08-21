import { combineReducers } from 'redux'
import { reducer } from './reducer'
import { fillDetails } from './Formdetails/formDetails.reducer'

export default combineReducers({
    reducer,
    userDetailsData: fillDetails
})