import React from 'react'
import { hot } from 'react-hot-loader/root'
import Layout from './components/Layout'
import Home from './views/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
        </Switch>
      </Layout>
    </ExtensionProvider2>
  </Router>
))
