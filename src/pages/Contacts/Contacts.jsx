import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import { getContacts } from "../../redux/contacts/contactsOperations";
import { putFilter } from "../../redux/contacts/contactsActions";
import { getError, getisLoading } from "../../redux/selectors/selectors";
import Filter from "../../components/Filter/Filter";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getisLoading);
  const error = useSelector(getError);
  const handleFilterChange = (e) => {
    dispatch(putFilter(e.currentTarget.value));
  };

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <p> is Loading...</p>}
      <Filter onChange={handleFilterChange} />
      {error && <p> {error} </p>}
      <ContactList />
    </>
  );
};

export default Contacts;
