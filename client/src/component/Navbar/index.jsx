import * as Styled from "./style";
import { Badge, Box, Modal, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userRedux";
import { useState } from "react";

export const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    dispatch(logout());
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
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

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ログアウトしました
          </Typography>
          <button onClick={handleClose}>閉じる</button>
        </Box>
      </Modal>
    </Styled.Container>
  );
};
