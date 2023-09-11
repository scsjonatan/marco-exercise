import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExperienceElement from "../../../components/ExperienceElement";

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
  display: flex;
  width: 100%;
  white-space: nowrap;
`;

const Experience = styled.li`
  margin-right: 24px;
`;

const CaregorySlider = ({ category }) => {
  const { title } = category;
  return (
    <div>
      <TitleContainer>
        <CategoryTitle>{title}</CategoryTitle>
        <ArrowForwardIosIcon style={{ color: "#fff" }} />
      </TitleContainer>
      <ExperiencesList>
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
