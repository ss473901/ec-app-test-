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

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

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
          <Styled.Price>{product.price}</Styled.Price>

          {/* 追加 */}
          <Styled.FilterContainer>
            <Styled.Filter>
              <Styled.FilterTitle>Color</Styled.FilterTitle>
              <Styled.FilterColor></Styled.FilterColor>
            </Styled.Filter>

            <Styled.Filter>
              <Styled.FilterTitle>Size</Styled.FilterTitle>
              <Styled.FilterSize>
                <Styled.FilterSizeOption>S</Styled.FilterSizeOption>
                <Styled.FilterSizeOption>M</Styled.FilterSizeOption>
                <Styled.FilterSizeOption>L</Styled.FilterSizeOption>
              </Styled.FilterSize>
            </Styled.Filter>
          </Styled.FilterContainer>

          {/* ここまで追加 */}
          <Styled.AddContainer>
            <Styled.AmountContainer>
              <RemoveIcon />
              <Styled.Amount>1</Styled.Amount>
              <AddIcon />
            </Styled.AmountContainer>
            <Styled.Button>ADD TO CART</Styled.Button>
          </Styled.AddContainer>
        </Styled.InfoContainer>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
