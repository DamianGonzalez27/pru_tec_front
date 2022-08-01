import { PrivateLayout } from "../components/Layouts";

/**
 * Componente que renderiza la página principal del Settings
 *
 * @param {*} param0
 * @returns
 */
const Settings = ({ initialData }) => {
  return (
    <PrivateLayout>
      <div>Esta es la view del Settings</div>
    </PrivateLayout>
  );
};

/**
 * Properties of server side rendering
 *
 * @returns
 */
Settings.getInitialProps = async ({ query, apolloClient, req, carga }) => {
  return {
    initialData: {
      carga: {
        inicial: carga,
      },
    },
  };
};

export default Settings;
