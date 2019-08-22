import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductShowcase from './pages/product-showcase/ProductShowcase';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ProductShowcase} />
    </Switch>
  );
}