import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductShowcase from './pages/product-showcase/ProductShowcase';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ProductShowcase} />
    </BrowserRouter>
  );
}