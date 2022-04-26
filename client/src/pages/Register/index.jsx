import { useState } from "react";
import * as Styled from "./style";
import { register } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>CREATE ACCOUNT</Styled.Title>
        <Styled.Form>
          <Styled.Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Styled.Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Styled.Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styled.Button onClick={handleClick} disabled={isFetching}>
            CREATE
          </Styled.Button>
          {error && <Styled.Error>問題が発生しました</Styled.Error>}
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
