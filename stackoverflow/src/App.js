import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoginState from "./controller/loginstate";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <LoginState>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Login' component={Login} />
        </Switch>
      </BrowserRouter>
    </LoginState>
  );
}

export default App;
