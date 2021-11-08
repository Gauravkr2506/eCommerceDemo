import { ActionTypes } from "./action";

interface StateInterface {
  productList: Array<any>;
  productInCart: Array<any>;
}

const initialState: StateInterface = {
  productList: [],
  productInCart: [],
};

interface ActionInterface {
  type: string;
  payload: any;
}

const rootReducer = (state = initialState, action: ActionInterface) => {
  // const newState = JSON.parse(JSON.stringify(state))

  const { type, payload } = action;
  switch (type) {
    case ActionTypes.UPDATE_ROOT_REDUCER_DATA:
      debugger;
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
