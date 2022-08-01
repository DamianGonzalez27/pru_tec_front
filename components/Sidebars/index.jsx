import { SidebarStyle } from "./styles";
import { BiUserCircle, BiLogOutCircle } from "react-icons/bi";
import { FaHome, FaCog } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { FiUsers } from "react-icons/fi";

export const Sidebar = () => {
  return (
    <SidebarStyle>
      <div className="profile">
        <a href="/perfil">
          <BiUserCircle />
          <small>Perfil</small>
        </a>
      </div>
      <div className="menu">
        <a href="/home">
          <FaHome /> Home
        </a>
        <a href="/registros">
          <ImBook /> Solicitudes
        </a>
        <a href="/users">
          <FiUsers /> Usuarios
        </a>
        <a href="/settings">
          <FaCog /> Settings
        </a>
      </div>
      <hr />
      <div className="logout">
        <a href="/login">
          <BiLogOutCircle /> Logout
        </a>
      </div>
    </SidebarStyle>
  );
};
