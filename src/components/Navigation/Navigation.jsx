import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import UserMenu from "../UserMenu/UserMenu";
import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Box sx={{ width: "100%" }}>
          <NavLink to="/login">
            <Tab value="one" label="Login" />
          </NavLink>

          <NavLink to="/register">
            <Tab value="two" label="Register" />
          </NavLink>
        </Box>
      )}
    </>
  );
};

export default Navigation;
