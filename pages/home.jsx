import { HomeContainer } from "../styles/home";
import { PrivateLayout } from "../components/Layouts";

/**
 * Componente que renderiza la página principal del home
 *
 * @param {*} param0
 * @returns
 */
const Home = ({ initialData }) => {
  return (
    <PrivateLayout>
      <HomeContainer>
        <div>
          <h3>Erick Damian Gonzalez Aranda</h3>
          <p>Prueba técnica</p>
        </div>
      </HomeContainer>
    </PrivateLayout>
  );
};

/**
 * Properties of server side rendering
 *
 * @returns
 */
Home.getInitialProps = async ({ query, apolloClient, req, carga }) => {
  return {
    initialData: {
      carga: {
        inicial: carga,
      },
    },
  };
};

export default Home;
