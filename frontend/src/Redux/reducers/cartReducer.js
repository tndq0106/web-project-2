import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  dataCart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const itemExist = state.dataCart?.find(
        (item) => item?._id === action.payload._id
      );
      if (itemExist && Object.keys(itemExist).length > 0) {
        return {
          dataCart: [...state.dataCart],
        };
      } else {
        return {
          dataCart: [...state.dataCart, action.payload],
        };
      }

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};
