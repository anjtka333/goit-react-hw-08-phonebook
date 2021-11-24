import s from "./UserMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.user.name);
  const handleOnClick = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <>
      <p>Welcome {name}!</p>
      <button className={s.btn} onClick={handleOnClick} type="submit">
        Logout
      </button>
    </>
  );
};

export default UserMenu;
