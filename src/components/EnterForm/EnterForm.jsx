import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

// const ariaLabel = { "aria-label": "description" };

const EnterForm = ({ isLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetName = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(authOperations.logIn({ email, password }));
    } else {
      dispatch(authOperations.register({ name, email, password }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <>
          <Box
            // component="form"
            sx={{ width: "100%" }}
            noValidate
            autoComplete="on"
          ></Box>
          <label htmlFor="nameInput">Name </label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleSetName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id="nameInput"
          />
        </>
      )}
      <label htmlFor="emailInput">Email </label>
      <Input
        type="email"
        name="email"
        value={email}
        required
        id="emailInput"
        onChange={handleSetName}
      />
      <label htmlFor="passwordInput">Password </label>
      <Input
        type="password"
        name="password"
        required
        id="passwordInput"
        value={password}
        onChange={handleSetName}
      />
      <Button variant="text" type="submit">
        Register
      </Button>
    </form>
  );
};

export default EnterForm;
