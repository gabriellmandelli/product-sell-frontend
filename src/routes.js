import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProductShowcase from './pages/product-showcase/ProductShowcase'
import ProductAdd from './pages/product-add/ProductAdd'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ProductShowcase} />
      <Route path="/product-add" component={ProductAdd} />
    </Switch>
  )
}