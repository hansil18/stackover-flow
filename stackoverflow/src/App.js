import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Login' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
