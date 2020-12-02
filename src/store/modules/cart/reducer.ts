import { Reducer } from 'redux';
import produce from "immer";
import reducerController from './reducerController';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  const controller = reducerController[action.type];

  return produce(state, draft => {
    if(controller) {
      return controller(draft, action.payload);
    }
  
    return state;
  });

  
}

export default cart;