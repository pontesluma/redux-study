import { ActionsTypes, ICartState } from "./types";

function addProductToCartSuccess (state: ICartState, payload: Record<string, any>) {
  const { product } = payload;

  const productInCartIndex = state.items.findIndex(item => item.product.id === product.id)

  if (productInCartIndex >= 0) {
    state.items[productInCartIndex].quantity += 1;
  } else {
    state.items.push( {
      product,
      quantity: 1,
    });
  }

  return state;
}

function addProductToCartFailure (state: ICartState, payload: Record<string, number>) {
  const { productId } = payload;

  state.failedStockCheck.push(productId);
  

  return state;
}

const reducerController: Record<string, any> = {
  [ActionsTypes.addProductToCartSuccess]: addProductToCartSuccess,
  [ActionsTypes.addProductToCartFailure]: addProductToCartFailure,
};

export default reducerController