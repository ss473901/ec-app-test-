import * as Styled from "./style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Navbar } from "../../component/Navbar";
import { Announcement } from "../../component/Announcement";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Box, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // モーダルスタイル
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid teal",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Styled.Container>
      <Announcement />
      <Navbar />
      <Styled.Wrapper>
        <Styled.ImgContainer>
          <Styled.Image src={product.img} />
        </Styled.ImgContainer>
        <Styled.InfoContainer>
          <Styled.Title>{product.title}</Styled.Title>
          <Styled.Desc>{product.desc} </Styled.Desc>
          <Styled.Price>{product.price}円</Styled.Price>
          <Styled.FilterContainer>
            <Styled.Filter>
              <Styled.FilterTitle>Color</Styled.FilterTitle>
              {product.color?.map((c) => (
                <Styled.FilterColor
                  color={c}
                  key={c}
                  onClick={() => setColor(c)}
                />
              ))}
            </Styled.Filter>
            <Styled.Filter>
              <Styled.FilterTitle>Size</Styled.FilterTitle>
              <Styled.FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <Styled.FilterSizeOption key={s}>{s}</Styled.FilterSizeOption>
                ))}
              </Styled.FilterSize>
            </Styled.Filter>
          </Styled.FilterContainer>
          <Styled.AddContainer>
            <Styled.AmountContainer>
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <Styled.Amount>{quantity}</Styled.Amount>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </Styled.AmountContainer>
            <Styled.Button onClick={handleClick}>カートに入れる</Styled.Button>
          </Styled.AddContainer>
        </Styled.InfoContainer>
      </Styled.Wrapper>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Styled.Icon onClick={handleClose}>
            <CloseIcon />
          </Styled.Icon>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            margin={"10px"}
          >
            カートに商品が追加されました
          </Typography>
          <Styled.Bottom>
            <Styled.ModalButton type="filled">カートを見る</Styled.ModalButton>
            <Styled.ModalButton>お買い物を続ける</Styled.ModalButton>
          </Styled.Bottom>
        </Box>
      </Modal>
    </Styled.Container>
  );
};
