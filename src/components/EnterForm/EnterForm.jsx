import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import authOperations from "../../redux/auth/auth-operations";
import { getContactsApi } from "../../service/api";

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
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(authOperations.logIn({ email, password }));
    } else {
      dispatch(authOperations.register({ name, email, password }));
    }
    // authOperations.fetchCurrentUser();
    history.push("/contacts");
    // getContactsApi();
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <>
          <label htmlFor="nameInput">Name </label>
          <input
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
      <input
        type="email"
        name="email"
        value={email}
        required
        id="emailInput"
        onChange={handleSetName}
      />
      <label htmlFor="passwordInput">Password </label>
      <input
        type="password"
        name="password"
        required
        id="passwordInput"
        value={password}
        onChange={handleSetName}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default EnterForm;
