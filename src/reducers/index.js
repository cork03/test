import { ADD_TODO, REMOVE_TODO } from "../actions/actions";

const initialData = {
  1: { id: 1, text: "brush a tooth" },
  2: { id: 2, text: "wash a face" },
  3: { id: 3, text: "drink a coffee" },
};

const initialState = {
  index: Object.values(initialData).length,
  data: initialData,
};

// Reducer:
const reducer = (state = initialState, action) => {
  let newState = { ...state };
  const { id, text } = action.payload || {};
  switch (action.type) {
    case ADD_TODO:
      newState.index++;
      newState.data[newState.index] = { id: newState.index, text };
      return newState;
    case REMOVE_TODO:
      let newData = { ...newState.data };
      delete newData[id];
      return {
        ...newState,
        data: newData,
      };
    default:
      return state;
  }
};

export default reducer;
