import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import { IoIosLogOut } from "react-icons/io";
import { useLogout } from "./useLogout";

function Logout() {
  const { isLoading, logout } = useLogout();
  return (
    <ButtonIcon onClick={logout}>
      {isLoading ? <SpinnerMini /> : <IoIosLogOut />}
    </ButtonIcon>
  );
}

export default Logout;
