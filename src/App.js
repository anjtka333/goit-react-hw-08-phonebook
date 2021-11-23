import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import UserMenu from "./components/UserMenu/UserMenu";
import Contacts from "./pages/Contacts/Contacts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "./redux/auth/auth-selectors";
import authOperations from "./redux/auth/auth-operations";
import { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Routes from "./Routes";

const App = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) dispatch(authOperations.fetchCurrentUser());
  }, [token, dispatch]);
  return (
    <div className="App">
      <Navigation />
      <Routes />
      {/* {isLoggedIn ? (
        <UserMenu />
      ) : (
        <nav>
          <ul>
            <li>
              <NavLink to="/login">Login </NavLink>
            </li>
            <li>
              <NavLink to="/register">Register </NavLink>
            </li>
          </ul>
        </nav>
      )} */}
      {/* <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch> */}
    </div>
  );
};

export default App;
