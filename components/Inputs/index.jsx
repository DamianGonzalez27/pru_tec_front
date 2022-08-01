import { useCallback } from "react";
import { CustomPrincipalInputStyled } from "./styles";

/**
 * Componente que renderiza un tipo de input
 *
 * @param {Hook} value Valor inicial del estado del input
 * @param {Hook} setValue Hook para cambiar el valor del estado
 * @param {String} name Nombre del input
 * @returns
 */
export const CustomInput = ({ value, setValue, name, type }) => {
  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value, setValue]
  );

  return (
    <CustomPrincipalInputStyled>
      <label htmlFor="">{name}</label>
      <input type={type} onChange={handleChange} />
    </CustomPrincipalInputStyled>
  );
};
