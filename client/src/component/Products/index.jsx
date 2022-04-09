import * as Styled from "./style";

import { Product } from "../Product";
import { popularProducts } from "../../date";

export const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);

  return (
    <Styled.Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Styled.Container>
  );
};
