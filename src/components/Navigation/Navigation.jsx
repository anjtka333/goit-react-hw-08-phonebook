import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import UserMenu from "../UserMenu/UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
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
      )}
    </>
  );
};

export default Navigation;
