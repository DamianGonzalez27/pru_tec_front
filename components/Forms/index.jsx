import { useCallback, useState } from "react";
import { PrincipalButton } from "../Buttons";
import { CustomInput } from "../Inputs";
import { LoginFormStyled } from "./styles";

export const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    alert(user);
  });

  return (
    <LoginFormStyled>
      <CustomInput
        value={user}
        setValue={setUser}
        name="Nombre de usuario"
        type="text"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        name="Password"
        type="password"
      />
      <PrincipalButton name="Login" onClick={handleLogin} />
    </LoginFormStyled>
  );
};
