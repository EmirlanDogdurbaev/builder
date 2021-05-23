import { ADD_MEDICAL, REMOVE_MEDICAL, SET_MEDICALS } from "../actions/types";

const initialState = {
  medicals: {},
  price: 0,
};
const prices = {
  vitA: 5,
  vitB: 5,
  vitC: 5,
  vitD: 5,
  vitE: 5,
  vitK: 5,
  vitAF1: 5,
  vitBF1: 5,
  vitCF1: 5,
  vitDF1:5,
  vitEF1: 5,
  vitKF1: 5
};

const builder = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_MEDICAL:
      newState.medicals[action.medical]++;
      newState.price += prices[action.medical];
      break;
    case REMOVE_MEDICAL:
      newState.medicals[action.medical]--;
      newState.price -= prices[action.medical];
      break;
    case SET_MEDICALS:
      newState.medicals = action.data.medicals;
      newState.price = action.data.price;
      break;

    default:
      break;
  }

  return newState;
};

export default builder;
