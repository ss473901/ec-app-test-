import * as Styled from "./style";
import { Announcement } from "../../component/Announcement";
import { Navbar } from "../../component/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE;

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate.push("/success", {
          stripeDate: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  //delete
  const dispatch = useDispatch();
  const handleClick = (product) => {
    const id = product._id;
    const price = product.price;
    const quantity = product.quantity;
    dispatch(deleteProduct({ id, price, quantity }));
  };

  return (
    <Styled.Container>
      <Announcement />
      <Navbar />
      <Styled.Wrapper>
        <Styled.Title>CART</Styled.Title>
        <Styled.Top>
          <Styled.TopButton>買い物を続ける</Styled.TopButton>
          <Styled.TopButton type="filled">決済をする</Styled.TopButton>
        </Styled.Top>
        <Styled.Bottom>
          <Styled.Info>
            {cart.products.map((product) => (
              <Styled.Product>
                <Styled.ProductDetail>
                  <Styled.Image src={product.img} />
                  <Styled.Details>
                    <Styled.ProductName>
                      <b>商品名：</b>
                      {product.title}
                    </Styled.ProductName>
                    <Styled.ProductId>
                      <b>ID:</b>
                      {product._id}
                    </Styled.ProductId>
                    <Styled.ProductColor color={product.color} />
                    <Styled.ProductSize>
                      <b>サイズ：</b>
                      {product.size}
                    </Styled.ProductSize>
                    <button
                      onClick={() => {
                        handleClick(product);
                      }}
                    >
                      削除
                    </button>
                  </Styled.Details>
                </Styled.ProductDetail>
                <Styled.PriceDetail>
                  <Styled.ProductAmountContainer>
                    <AddIcon />
                    <Styled.ProductAmount>
                      {product.quantity}
                    </Styled.ProductAmount>
                    <RemoveIcon />
                  </Styled.ProductAmountContainer>
                  <Styled.PriceDetail>
                    {product.price * product.quantity}円
                  </Styled.PriceDetail>
                </Styled.PriceDetail>
              </Styled.Product>
            ))}
            <Styled.Hr />
          </Styled.Info>

          <Styled.Summary>
            <Styled.SummaryTitle>商品合計</Styled.SummaryTitle>
            {/*ここから */}
            {/* <Styled.SummaryItem>
              <Styled.SummaryItemText>シャツ</Styled.SummaryItemText>
              <Styled.SummaryItemPrice>{cart.total}円</Styled.SummaryItemPrice>
            </Styled.SummaryItem> */}
            {/* ここまで */}
            <Styled.SummaryItem type="total">
              <Styled.SummaryItemText></Styled.SummaryItemText>
              <Styled.SummaryItemPrice>{cart.total}円</Styled.SummaryItemPrice>
            </Styled.SummaryItem>
            <StripeCheckout
              name="カートの商品を購入する"
              image="https://avatars.githubusercontent.com/ss473901"
              billingAddress
              shippingAddress
              currency="JPY"
              locale="ja"
              description={`合計は${cart.total}円です`}
              amount={cart.total}
              token={onToken}
              stripeKey={KEY}
            >
              <Styled.Button>決済する</Styled.Button>
            </StripeCheckout>
          </Styled.Summary>
        </Styled.Bottom>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
