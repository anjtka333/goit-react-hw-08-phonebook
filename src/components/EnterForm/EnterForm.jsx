const EnterForm = ({ isLogin }) => {
  return (
    <form>
      {!isLogin && (
        <>
          <label htmlFor="nameInput">Name </label>
          <input
            type="text"
            name="name"
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
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        id="emailInput"
      />
      <label htmlFor="passwordInput">Password </label>
      <input
        type="password"
        name="password"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        id="passwordInput"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default EnterForm;
