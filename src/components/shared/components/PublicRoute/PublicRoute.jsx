import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

const PublicRoute = ({ children, redirectTo, exact, path }) => {
  const islogin = useSelector((state) => state.auth.isLoggedIn);
  console.log(islogin);
  return (
    <Route exact={exact} path={path}>
      {islogin ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
