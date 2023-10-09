import { NUMBER_DECREMENT, NUMBER_INCREMENT } from "../../constants";

const initialState = {
  number: 0,
};
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case NUMBER_INCREMENT:
        return {...state, number: state.number + 1};
      case NUMBER_DECREMENT:
        return {...state, number: state.number - 1};
      default:
        return state;
    }
  };
  
  export default dataReducer;
  