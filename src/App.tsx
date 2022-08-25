import React from 'react'
import { HelloWorld } from './HelloWorld'
import { ExtensionProvider } from '@looker/extension-sdk-react'
import { hot } from 'react-hot-loader/root'
import Layout from './components/Layout'
import Home from './views/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App = hot(() => (
  <Router>
    <ExtensionProvider>
      <Layout>
        {/* <h1>Aquí debería ir el HEADER</h1>
        <HelloWorld /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dotacion">
            <h1>Dotación</h1>
          </Route>
        </Switch>
      </Layout>
    </ExtensionProvider>
  </Router>
))
