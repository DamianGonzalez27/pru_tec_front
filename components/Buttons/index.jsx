/**
 * Componente que renderiza un boton genérico
 *
 * @param {*} param0
 * @returns
 */
export const PrincipalButton = ({ onClick, name }) => {
  return <button onClick={onClick}>{name}</button>;
};
