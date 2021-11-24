import { useDispatch, useSelector } from "react-redux";
import { putFilter } from "../../redux/contacts/contactsActions";
import { getFilterFromState } from "../../redux/selectors/selectors";
import s from "./Filter.module.scss";
const Filter = () => {
  const value = useSelector(getFilterFromState);
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(putFilter(e.currentTarget.value));
  };
  return (
    <label>
      Find contact by name
      <input
        name="filter"
        value={value}
        onChange={handleFilterChange}
        className={s.input}
      />
    </label>
  );
};

export default Filter;
