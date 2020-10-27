import Header from "./Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Mileage from "./Mileage";
import User from "./User";
import Anim from "./Anim";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mileageallowance" component={Mileage} />
        <Route exact path="/user" component={User} />
        <Route exact path="/animation" component={Anim} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
