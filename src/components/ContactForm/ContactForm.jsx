import React from "react";
import s from "./ContactForm.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOperations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts.items);

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleInputNameChange = (e) => {
    setName(e.currentTarget.value);
  };

  const handleInputNumberChange = (e) => {
    setNumber(e.currentTarget.value);
  };

  const addContactsOnSubmit = (e) => {
    e.preventDefault();
    if (
      contacts.some((item) => {
        return item.name.toLowerCase() === name.toLowerCase();
      })
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      name: name,
      number: number,
    };
    dispatch(addContact(contact));
    reset();
  };

  return (
    <form onSubmit={addContactsOnSubmit} className={s.container}>
      <label htmlFor="nameInputId">Name </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleInputNameChange}
        id="nameInputId"
        className={s.input}
      />
      <label htmlFor="phoneInputId">Number </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        onChange={handleInputNumberChange}
        id="phoneInputId"
        className={s.input}
      />
      <button className={s.btn} type="submit">
        Add conttact
      </button>
    </form>
  );
};

export default ContactForm;
