import { Switch, Redirect } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PublicRoute from "./components/shared/components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/shared/components/PrivateRoute/PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" redirectTo="/login">
        <Redirect to="/contacts" />
      </PrivateRoute>
      <PublicRoute exact path="/register" redirectTo="/contacts">
        <Register />
      </PublicRoute>
      <PublicRoute exact path="/login" redirectTo="/contacts">
        <Login />
      </PublicRoute>
      <PrivateRoute exact path="/contacts" redirectTo="/login">
        <Contacts />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
