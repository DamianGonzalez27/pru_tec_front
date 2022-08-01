import { Navbar } from "../Navs";
import { Sidebar } from "../Sidebars";
import { LayoutContainer } from "./styles";

/**
 * Componente que renderiza el layout de las views privadas de la aplicacion
 *
 * @param {*} param0
 * @returns
 */
export const PrivateLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <div className="content">
        <Sidebar />
        {children}
      </div>
    </LayoutContainer>
  );
};
