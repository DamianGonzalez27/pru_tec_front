import baseConfig from "../base.config";
/**
 *
 * @returns
 */
export const login = async ({ name, email, password }) => {
  const registro = await fetch(`${baseConfig.httpsUri}`);
};

/**
 * Función de integracion del logpout de la aplicacion
 *
 * @returns
 */
export const logout = async () => {
  return "Todo ok";
};
