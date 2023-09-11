import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 239px;
`;

const ExperienceImageContainer = styled.div`
  width: 100%;
  height: 319px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const ExperienceTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  margin-bottom: 0;
`;

const ExperienceHost = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 5px;
`;

const ExperienceElement = ({ title, img, host }) => {
  return (
    <ExperienceContainer>
      <ExperienceImageContainer image={img} />
      <ExperienceTitle>{title}</ExperienceTitle>
      <ExperienceHost>{host}</ExperienceHost>
    </ExperienceContainer>
  );
};

export default ExperienceElement;
