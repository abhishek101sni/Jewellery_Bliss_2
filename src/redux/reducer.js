import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA, SET_ACTIVE_ITEM } from "./constants";

const initialState = {
    cartDetails: { total: 0, grandTotal: 0 },
    cart: [],
    users: [],
    activeItem: null
};

export const reducer = (state = initialState, action = {}) => {
    const { cart } = state;
    const { data } = action;
    const index = cart.findIndex(cartItem => cartItem?.id === data?._id);

    switch (action.type) {
        case ADD_TO_CART:
            if (index > -1) {
                const updatedCart = cart.map((cartItem, i) => {
                    if (i === index) {
                        return {
                            ...cartItem,
                            count: cartItem.count + 1
                        };
                    }
                    return cartItem;
                });

                const total = calculateCartTotal(updatedCart);
                const grandTotal = calculateGrandTotal(total);

                return {
                    ...state,
                    cartDetails: { ...state.cartDetails, total, grandTotal },
                    cart: updatedCart,
                };
            }

            const newCart = [...cart, {
                id: data._id,
                item: data,
                count: 1
            }];

            const newTotal = calculateCartTotal(newCart, state.cartDetails.total);
            const newGrandTotal = calculateGrandTotal(newTotal);

            return {
                ...state,
                cart: newCart,
                cartDetails: { ...state.cartDetails, total: newTotal, grandTotal: newGrandTotal },
            };
        case REMOVE_FROM_CART:
            if (index === -1) {
                return state;
            }

            const updatedCart = cart.map((cartItem, i) => {
                if (i === index) {
                    if (cartItem.count - 1 <= 0) {
                        return null;
                    }
                    return {
                        ...cartItem,
                        count: cartItem.count - 1
                    };
                }
                return cartItem;
            }).filter(Boolean);

            console.log(updatedCart);

            const total = calculateCartTotal(updatedCart);
            const grandTotal = calculateGrandTotal(total);

            return {
                ...state,
                cart: updatedCart,
                cartDetails: { ...state.cartDetails, total: total, grandTotal }
            };
        case SET_USER_DATA:
            return {
                ...state,
                users: [...state.cart]
            };
        case SET_ACTIVE_ITEM:
            return {
                ...state,
                activeItem: action.data
            };
        default:
            return state;
    }
};

function calculateCartTotal(cartItems, initialTotal = 0) {
    return cartItems.reduce((acc, cartItem) => {
        console.log(`%%%%%%`, acc, cartItem);
        return acc + (parseInt(cartItem.item.price) * (cartItem.count));
    }, initialTotal)
}

function calculateGrandTotal(total) {
    const tax = 1.5;
    const discount = 1000;
    console.log(`total-----------`, total)

    return parseInt(total);
}
