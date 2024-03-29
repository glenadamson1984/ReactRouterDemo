import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exct path={"/"}>
            <Redirect to="/welcome" />
          </Route>
          <Route path={"/welcome"}>
            <Welcome />
          </Route>
          <Route exact path={"/products"}>
            <Products />
          </Route>
          <Route path={"/products/:productId"}>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
