/**
 * Modulo con las reglas de acceso al sistema
 *
 * @module ModuloDeAcceso
 */
import url from "url";

/**
 *
 *
 * @param {Component} Component Componente de renderizado de la aplicacion
 * @param {Object} ctx Contexto de la aplicacion general
 * @returns
 */
const globalAccess = async (Component, ctx) => {
  const currentPath = url.parse(ctx.req.url).pathname;

  if (currentPath == "/") {
    ctx.res.writeHead(302, {
      Location: `/home`,
    });
    ctx.res.end();
    return {};
  }

  let pageProps = {};
  if (!(await validateAuth(currentPath, ctx.req))) {
    ctx.res.writeHead(302, {
      Location: `/home`,
    });
    ctx.res.end();
    return {};
  }
  if (Component)
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps({
        ...ctx,
        carga: await getPageInitialProps(currentPath, ctx.req),
      });

  return {
    pageProps,
  };
};

/**
 *
 * @param {String} path Ruta actual de la peticion de la aplicacion
 * @param {Object} req Request de la aplicacion
 * @returns
 */
const validateAuth = async (path, req) => {
  return true;
};

/**
 *
 * @param {String} path  Ruta actual de la peticion de la aplicacion
 * @param {Object} req Request de la aplicacion
 * @returns
 */
const getPageInitialProps = async (path, req) => {
  return {
    path,
    session: {
      persona: null,
    },
  };
};

export { globalAccess };
