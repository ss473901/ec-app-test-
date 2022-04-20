import * as Styled from "./style";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userRedux";

export const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout);
    console.log("ログアウト");
  };

  return (
    <Styled.Container role="header">
      <Styled.Wrapper>
        <Styled.Left></Styled.Left>

        <Styled.Center>
          <Styled.SLink to={`/`}>
            <Styled.Logo>Clothes.</Styled.Logo>
          </Styled.SLink>
        </Styled.Center>

        <Styled.Right>
          <Styled.SLink to={`/register`}>
            <Styled.Item>REGISTER</Styled.Item>
          </Styled.SLink>

          <Styled.SLink to={`/login`}>
            <Styled.Item>SIGN IN</Styled.Item>
          </Styled.SLink>

          <Styled.Item onClick={handleClick}>LOGOUT</Styled.Item>

          <Link to="/cart">
            <Styled.Item>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Styled.Item>
          </Link>
        </Styled.Right>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
