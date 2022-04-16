import * as Styled from "./style";
import { Announcement } from "../../component/Announcement";
import { Navbar } from "../../component/Navbar";
import { Products } from "../../component/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Styled.Container>
      <Announcement />
      <Navbar />
      <Styled.Title>{cat}</Styled.Title>
      <Styled.FilterContainer>
        <Styled.Filter>
          <Styled.FilterText>Filter Products</Styled.FilterText>
          <Styled.Select name="color" onChange={handleFilters}>
            <Styled.Option disable>color</Styled.Option>
            <Styled.Option>white</Styled.Option>
            <Styled.Option>black</Styled.Option>
            <Styled.Option>red</Styled.Option>
            <Styled.Option>blue</Styled.Option>
            <Styled.Option>yellow</Styled.Option>
            <Styled.Option>green</Styled.Option>
          </Styled.Select>
          <Styled.Select name="size" onChange={handleFilters}>
            <Styled.Option disable>size</Styled.Option>
            <Styled.Option>XS</Styled.Option>
            <Styled.Option>S</Styled.Option>
            <Styled.Option>M</Styled.Option>
            <Styled.Option>L</Styled.Option>
            <Styled.Option>XL</Styled.Option>
          </Styled.Select>
        </Styled.Filter>
        <Styled.Filter>
          <Styled.FilterText>Sort Products:</Styled.FilterText>
          <Styled.Select onChange={(e) => setSort(e.target.value)}>
            <Styled.Option value="newest">Newest</Styled.Option>
            <Styled.Option value="asc">Price(asc)</Styled.Option>
            <Styled.Option value="desc">Price(desc)</Styled.Option>
          </Styled.Select>
        </Styled.Filter>
      </Styled.FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
    </Styled.Container>
  );
};
