/**
 * Funcion para listar todos los usuarios registrados en la base de datos
 *
 * @returns
 */
export const UsersIndex = async ({ req }) => {
  const users = await fetch("http://127.0.0.1:8000/api/Usuarios");

  return users.json();
};

/**
 * Función de integración para crear usuairos
 *
 * @param {*} param0
 */
export const UsersStore = async ({ nombre, paterno, materno, password }) => {
  const newUser = await fetch("http://127.0.0.1:8000/api/Usuarios", {
    method: "POST",
    body: JSON.stringify({
      nombre,
      paterno,
      materno,
      password,
    }),
  });

  return newUser.json();
};
