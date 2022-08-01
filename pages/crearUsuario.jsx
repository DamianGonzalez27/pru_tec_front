import { useCallback, useState } from "react";
import { CustomInput } from "../components/Inputs";
import { PrivateLayout } from "../components/Layouts";
import { UsersStore } from "../lib/users";

/**
 * Componente que renderiza la página principal del CrearUsuario
 *
 * @param {*} param0
 * @returns
 */
const CrearUsuario = ({ initialData }) => {
  const [nombre, setNombre] = useState(),
    [paterno, setPaterno] = useState(),
    [materno, setMaterno] = useState(),
    [password, setPassword] = useState();

  const createUser = useCallback(async () => {
    const newUser = await UsersStore(nombre, paterno, materno, password);

    console.log(newUser);
  });

  return (
    <PrivateLayout>
      <div>
        <h3>Crea un usuario nuevo</h3>
        <div>
          <CustomInput
            name="Nombre"
            value={nombre}
            setValue={setNombre}
            type="text"
          />
          <CustomInput
            name="Paterno"
            value={paterno}
            setValue={setPaterno}
            type="text"
          />
          <CustomInput
            name="Materno"
            value={materno}
            setValue={setMaterno}
            type="text"
          />
          <CustomInput
            name="Password"
            type="password"
            value={password}
            setValue={setPassword}
          />
          <button onClick={createUser}>Registrar</button>
        </div>
      </div>
    </PrivateLayout>
  );
};

/**
 * Properties of server side rendering
 *
 * @returns
 */
CrearUsuario.getInitialProps = async ({ query, apolloClient, req, carga }) => {
  return {
    initialData: {
      carga: {
        inicial: carga,
      },
    },
  };
};

export default CrearUsuario;
