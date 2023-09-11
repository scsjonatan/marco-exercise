import React, { createContext, useState, useEffect } from "react";

const CategoriesContext = createContext();

const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.marcoexperiences.com/api/experiences/explore_test"
      );
      const data = await response.json();
      //   const categoryList = getCategoryList(data);

      setCategories(data.categories);
    };
    fetchData();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{ categories, selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

// const getCategoryList = (data) => {
//   return data.categories.map((item) => item.title);
// };

export { CategoriesContext, CategoriesContextProvider };
