import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ children, redirectTo, ...routeProps }) => {
  const islogin = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route {...routeProps}>
      {!islogin ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PrivateRoute;
