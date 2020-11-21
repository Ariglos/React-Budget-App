const initialState = {
  loadingState: {},
  budget: {},
  budgetCategories: [],
};

action = {
  type: "BUDGET_FETCHED",
  payload: {
    id: "1",
  },
};

function budget(state = initialState, action) {
  switch (action.type) {
    case "BUDGET_FETCHED":
      return {
        ...state,
        budget: action.payload,
      };
  }
}
