import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { ICartProduct } from '../store/modules/cart/types';

interface ICatalogItemProps {
  product: ICartProduct;
}
const CatalogItem: React.FC<ICatalogItemProps> = ({product}) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(
    state => state.cart.failedStockCheck.includes(product.id)
  );
  
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span> {'  '}

      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{color: 'red'}}>
          Falta de estoque
        </span>
      )}
    </article>
  );
}

export default CatalogItem;