import React, { useEffect, useState } from 'react';
import api from '../server/api';
import { ICartProduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<ICartProduct[]>([]);

  useEffect(() => {
    async function loadCatalog(){
      const resp = await api.get('/products');
      setCatalog(resp.data);
    }
    loadCatalog();
  }, []);
  
  return (
    <main>
      <h1>Catalog</h1>

      {catalog?.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
}

export default Catalog;
