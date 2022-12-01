import React, { useState, useMemo, useCallback } from "react";
import PortfolioButton from "./PortfolioButton";
import PortfolioItem from "./PortfolioItem";

function Portfolio({ items }) {
  const categories = ["All", ...new Set(items.map((item) => item.category))];

  const [category, setCategory] = useState("All");

  const sort = useCallback((category) => {
    setCategory(category);
  }, []);

  const sortedPortfolio = useMemo(() => {
    return [...items].sort((item) => item.category === category && -1);
  }, [category, items]);

  return (
    <React.Fragment>
      <PortfolioButton active={category} items={categories} sort={sort} />
      <PortfolioItem active={category} items={sortedPortfolio} />
    </React.Fragment>
  );
}

export default Portfolio;
