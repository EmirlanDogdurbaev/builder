const initialState = {
  ingredients: {
    vitA: 5,
    vitB: 5,
    vitC: 5,
    vitD: 5,
    vitE: 5,
    vitK: 5,
  },
  price: 125,
};
const prices = {
  vitA: 5,
  vitB: 5,
  vitC: 5,
  vitD: 5,
  vitE: 5,
  vitK: 5,
};

const builderReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_INGREDIENT":
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case "REMOVE_INGREDIENT":
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;

    default:
      break;
  }

  return newState;
};

export default builderReducer;
