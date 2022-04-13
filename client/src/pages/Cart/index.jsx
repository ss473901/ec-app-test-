import * as Styled from "./style";
import { Announcement } from "../../component/Announcement";
import { Navbar } from "../../component/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE;

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
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
                    <Styled.ProductColor />
                    <Styled.ProductSize>
                      <b>サイズ：</b>
                      {product.size}
                    </Styled.ProductSize>
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
            <Styled.SummaryItem>
              <Styled.SummaryItemText>シャツ</Styled.SummaryItemText>
              <Styled.SummaryItemPrice>1500円</Styled.SummaryItemPrice>
            </Styled.SummaryItem>
            <Styled.SummaryItem>
              <Styled.SummaryItemText>シャツ</Styled.SummaryItemText>
              <Styled.SummaryItemPrice>1500円</Styled.SummaryItemPrice>
            </Styled.SummaryItem>
            <Styled.SummaryItem>
              <Styled.SummaryItemText>Total</Styled.SummaryItemText>
              <Styled.SummaryItemPrice>{cart.total}</Styled.SummaryItemPrice>
            </Styled.SummaryItem>

            {/* stripe追加 */}

            <StripeCheckout 
            name="shop" 
            image="https://avatars.githubusercontent.com/ss473901" 
            billingAddress
            shippingAddress
            description=""
            amount={cart.total*100} 
            token={onToken}
            stripeKey={}
            >
              <Styled.Button>決済する</Styled.Button>
            </StripeCheckout>

            {/* ここまで */}
          </Styled.Summary>
        </Styled.Bottom>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
