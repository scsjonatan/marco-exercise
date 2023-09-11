import React, { useContext } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExperienceElement from "../../../components/ExperienceElement";
import { CategoriesContext } from "../../../contexts/categories";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const ExperiencesList = styled.ul`
  overflow: auto;
  display: ${(props) => (props.isSelected ? "auto" : "flex")};
  width: 100%;
  display: ${(props) => (props.isSelected ? "auto" : "nowrap")};
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Experience = styled.li`
  margin-right: 24px;
  display: inline-table;
`;

const CaregorySlider = ({ category, isSelected }) => {
  const { setSelectedCategory } = useContext(CategoriesContext);
  const { title, id } = category;
  return (
    <div>
      <TitleContainer>
        <CategoryTitle>{title}</CategoryTitle>
        {isSelected ? null : (
          <ArrowForwardIosIcon
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={() => setSelectedCategory(id)}
          />
        )}
      </TitleContainer>
      <ExperiencesList isSelected={isSelected}>
        {category.items.map((experiencie) => (
          <Experience key={experiencie.id}>
            <ExperienceElement {...experiencie} />
          </Experience>
        ))}
      </ExperiencesList>
    </div>
  );
};

export default CaregorySlider;
