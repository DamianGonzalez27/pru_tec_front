import { PrivateLayout } from "../components/Layouts";

/**
 * Componente que renderiza la página principal del Registros
 *
 * @param {*} param0
 * @returns
 */
const Registros = ({ initialData }) => {
  return (
    <PrivateLayout>
      <div>Esta es la view del Registros</div>
    </PrivateLayout>
  );
};

/**
 * Properties of server side rendering
 *
 * @returns
 */
Registros.getInitialProps = async ({ query, apolloClient, req, carga }) => {
  return {
    initialData: {
      carga: {
        inicial: carga,
      },
    },
  };
};

export default Registros;
