import React, { useContext, useEffect, useState } from "react";
import CaregorySlider from "./components/CategorySlider";
import { CategoriesContext } from "../../contexts/categories";
import styled from "styled-components";

const HomeContainer = styled.main`
  padding: 0 24px 24px;
`;

function Home() {
  const { categories, selectedCategory } = useContext(CategoriesContext);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      const category = categories.find(
        (category) => category.id === selectedCategory
      );
      setSelectedItem(category);
    } else {
      setSelectedItem(null);
    }
  }, [selectedCategory, categories]);

  const renderCategorySlider = () => {
    return categories.map((category) => (
      <CaregorySlider key={category.id} category={category} />
    ));
  };

  return (
    <HomeContainer>
      {selectedItem ? (
        <CaregorySlider isSelected category={selectedItem} />
      ) : (
        renderCategorySlider()
      )}
    </HomeContainer>
  );
}

export default Home;
