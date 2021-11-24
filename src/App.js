import { useDispatch, useSelector } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Routes from "./Routes";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) dispatch(authOperations.fetchCurrentUser());
  }, [token, dispatch]);
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
};

export default App;
