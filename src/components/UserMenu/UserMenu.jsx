import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
const UserMenu = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <>
      <p>Welcome</p>
      <button onClick={handleOnClick} type="submit">
        Logout
      </button>
    </>
  );
};

export default UserMenu;
