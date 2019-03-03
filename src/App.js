import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";
import MainPage from "./containers/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <Layout>
          <Switch>
              <Route path="/" exact component={MainPage} />
              <Route render={() => <h1>Not found!</h1>} />
          </Switch>
      </Layout>
    );
  }
}

export default App;
