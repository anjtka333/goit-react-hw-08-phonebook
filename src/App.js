// import { useEffect } from "react";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import Filter from "./components/Filter/Filter";
// import s from "./components/ContactForm/ContactForm.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { putFilter } from "./redux/contacts/contactsActions";
// import { getContacts } from "./redux/contacts/contactsOperations";
// import { getError, getisLoading } from "./redux/selectors/selectors";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink to="/login">Login </NavLink>
        <NavLink to="/register">Register </NavLink>
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
