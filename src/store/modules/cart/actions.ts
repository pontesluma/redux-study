import { ActionsTypes, ICartProduct } from "./types";

export function addProductToCartRequest(product: ICartProduct) {
  return {
    type: ActionsTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: ICartProduct) {
  return {
    type: ActionsTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionsTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}