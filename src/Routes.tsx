import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Product from './pages/Product'
import Country from './pages/Country'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:id" component={Product} />
    <Route exact path="/country/:id" component={Country} />
  </Switch>
)

export default Routes
