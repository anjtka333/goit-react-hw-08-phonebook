import s from "./ContactList.module.scss";
import { filteredContacts } from "../../redux/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { removeContacts } from "../../redux/contacts/contactsOperations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(filteredContacts);

  return (
    <ul className={s.ulStyle}>
      {filtered.map((item) => {
        return (
          <li key={item.id}>
            {item.name} {item.number}
            <button
              className={s.btn}
              type="button"
              onClick={() => {
                dispatch(removeContacts(item.id));
              }}
            >
              Del
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
