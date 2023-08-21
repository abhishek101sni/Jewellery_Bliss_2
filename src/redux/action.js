// import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST, SET_ACTIVE_ITEM } from './constants';
import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST, SET_ACTIVE_ITEM } from './constants';

export function addToCart(data) {
    return {
        type: ADD_TO_CART,
        data
    }
}
export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        data: item
    }
}

export function getUserList() {
    return {
        type: USER_LIST
    }
}

export function setActiveItem(data) {
    return {
        type: SET_ACTIVE_ITEM,
        data
    }
}