import { PrivateLayout } from "../components/Layouts";
import { UsersList } from "../components/Tables";
import { UsersIndex } from "../lib/users";

/**
 * Componente que renderiza la página principal del Users
 *
 * @param {*} param0
 * @returns
 */
const Users = ({ initialData }) => {
  return (
    <PrivateLayout>
      <div>
        <div>
          <h2>Lista de usuarios</h2>
          <a href="/crearUsuario">Crear usuario</a>
        </div>
        <UsersList users={initialData.carga.users} />
      </div>
    </PrivateLayout>
  );
};

/**
 * Properties of server side rendering
 *
 * @returns
 */
Users.getInitialProps = async ({ query, apolloClient, req, carga }) => {
  const usersList = await UsersIndex(req);

  return {
    initialData: {
      carga: {
        inicial: carga,
        users: usersList,
      },
    },
  };
};

export default Users;
