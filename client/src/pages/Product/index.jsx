import * as Styled from "./style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Navbar } from "../../component/Navbar";
import { Announcement } from "../../component/Announcement";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";

export const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  // sizeのエラー
  console.log(product);
  console.log("product.color・・・" + product.color);
  console.log("product.size・・・" + product.size);
  console.log(color);
  //　ここまで

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
    //update cart
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
            {/* size　エラー有り */}
            {/* <Styled.Filter>
              <Styled.FilterTitle>Size</Styled.FilterTitle>
              <Styled.FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <Styled.FilterSizeOption key={s}>{s}</Styled.FilterSizeOption>
                ))}
              </Styled.FilterSize>
            </Styled.Filter> */}
            {/* ここまで追加 */}
          </Styled.FilterContainer>

          <Styled.AddContainer>
            <Styled.AmountContainer>
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <Styled.Amount>{quantity}</Styled.Amount>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </Styled.AmountContainer>

            <Styled.Button onClick={handleClick}>ADD TO CART</Styled.Button>
          </Styled.AddContainer>
        </Styled.InfoContainer>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
