export default {
  defaultTitle: "Prueba técnica",
  rootDomain:
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
  httpsUri:
    process.env.NODE_ENV === "development" ? "http://127.0.0.1:8080" : "",
  passwordMinLength: 8,
};
