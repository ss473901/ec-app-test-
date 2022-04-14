import * as Styled from "./style";
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>SIGN IN</Styled.Title>
        <Styled.Form>
          <Styled.Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Styled.Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styled.Button onClick={handleClick} disable={isFetching}>
            LOGIN
          </Styled.Button>
          {error && <Styled.Error>問題が発生しました</Styled.Error>}
          <Styled.Link>DO NOT YOU REMEMBER THE PASSWORD?</Styled.Link>
          <Styled.Link>CREATE A NEW ACCOUNT</Styled.Link>
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
