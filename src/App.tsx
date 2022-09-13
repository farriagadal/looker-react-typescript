import React from 'react'
import { hot } from 'react-hot-loader/root'
import Layout from './components/Layout'
import Home from './views/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RHConnect from './views/RHConnect'
import IncomeExits from './views/IncomeExits'
import RemunerationAccount from './views/RemunerationAccount'
import { ExtensionProvider2 } from '@looker/extension-sdk-react'
import { Looker40SDK } from '@looker/sdk'

export const App = hot(() => (
  <Router>
    <ExtensionProvider2 type={Looker40SDK}>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/entradas-y-salidas">
            <IncomeExits />
          </Route>
          <Route exact path="/cuentas-y-remuneraciones">
            <RemunerationAccount />
          </Route>
          <Route exact path="/rh-connect">
            <RHConnect />
          </Route>
        </Switch>
      </Layout>
    </ExtensionProvider2>
  </Router>
))
