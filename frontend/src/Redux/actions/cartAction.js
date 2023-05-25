import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload,
  };
};

export { addItem, deleteItem };
