import React, { useContext } from "react";
import styled from "styled-components";
import { CategoriesContext } from "../../contexts/categories";

const HeroContainer = styled.div`
  padding: 24px 24px 0;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  line-height: 39.6px;
  letter-spacing: 1.5px;
`;

const CategoriesContainer = styled.ul`
  overflow: auto;
  display: flex;
  width: 100%;
  white-space: nowrap;
`;

const Caregory = styled.li`
  border-radius: 120px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-right: 10px;
  padding: 12px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 15.4px;
`;

const Hero = () => {
  const { categories } = useContext(CategoriesContext);
  console.log(categories);
  return (
    <HeroContainer>
      <HeroTitle>Explore Experiences</HeroTitle>
      <CategoriesContainer>
        {categories.map(({ title, id }) => (
          <Caregory key={id}>{title}</Caregory>
        ))}
      </CategoriesContainer>
    </HeroContainer>
  );
};

export default Hero;
