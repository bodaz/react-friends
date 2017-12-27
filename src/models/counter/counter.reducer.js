import { INCREMENT } from "./counter.types";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export default reducer;
