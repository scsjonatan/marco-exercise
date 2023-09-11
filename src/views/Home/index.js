import React, { useContext } from "react";
import CaregorySlider from "./components/CategorySlider";
import { CategoriesContext } from "../../contexts/categories";
import styled from "styled-components";

const HomeContainer = styled.main`
  padding: 0 24px 24px;
`;

function Home() {
  const { categories } = useContext(CategoriesContext);
  return (
    <HomeContainer>
      {categories.map((category) => (
        <CaregorySlider key={category.id} category={category} />
      ))}
    </HomeContainer>
  );
}

export default Home;
