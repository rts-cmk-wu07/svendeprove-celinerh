import { MdLogout } from "react-icons/md";
import { useToken } from "../contexts/TokenProvider";
import { setCookie } from "react-use-cookie";
import { toast } from "react-toastify";

function LogOut() {
  const { setToken } = useToken();

  const handleLogout = () => {
    setCookie("token", "", { days: 0 });
    setToken(null);

    toast.success("Du er nu logget ud");
  };

  return (
    <button
      className="absolute top-8 right-6 navLink border-buttonText text-primaryText z-30"
      onClick={handleLogout}
    >
      <MdLogout />
    </button>
  );
}

export default LogOut;
