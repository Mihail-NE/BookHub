export const initialState = {
    cart: [],
    favorites: [],
    total: 0,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CART":
            return {
                ...state,
                cart: action.payload,
            };
        case "SET_FAVORITES":
            return {
                ...state,
                favorites: action.payload,
            };
        case "ADD_TO_CART": {
            const existingItem = state.cart.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
            };
        }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                total: state.total + 1,
            };
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
                total: state.total - 1,
            };

        case "ADD_TO_FAVORITES": {
            const existingItem = state.favorites.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                return state;
            }
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        }
        case "REMOVE_FROM_FAVORITES":

            return {
                ...state,
                favorites: state.favorites.filter(
                    (item) => item.id !== action.payload
                ),
            };

    }
};
