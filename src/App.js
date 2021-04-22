import Layout from "./components/Layout/Layout"
import Checkout from "./components/Checkout/Checkout";

import { Redirect, Route, Switch } from "react-router";
import PharmacyBuilder from "./components/PharmacyBuilder/PharmacyBuilder";

import "./App.css";

const App = () => {
  return (
    <div className="App">
     <Layout>
        <Switch>
          <Route path="/" component={PharmacyBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/" />
        </Switch>
      </Layout>
       
    </div>
  );
}

export default App;
