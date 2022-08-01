export const UsersList = ({ users }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Paterno</th>
            <th>Materno</th>
            <th>CVE</th>
            <th colSpan={2}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <th>{user.id_usuario}</th>
                <th>{user.nombre}</th>
                <th>{user.paterno}</th>
                <th>{user.materno}</th>
                <th>{user.cve_grupo}</th>
                <th colSpan={2}>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
