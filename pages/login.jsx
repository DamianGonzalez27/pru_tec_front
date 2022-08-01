import { LoginForm } from "../components/Forms";
import { LoginContainer } from "../styles/login";

const Login = ({ initialData }) => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

/**
 * Properties of server side rendering
 *
 * @returns
 */
Login.getInitialProps = async ({ query, apolloClient, req, carga }) => {
  return {
    initialData: {
      carga: {
        inicial: carga,
      },
    },
  };
};

export default Login;
