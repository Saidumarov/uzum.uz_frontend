import React, { useContext, useEffect } from "react";
import Category from "../../components/categorys";
import { Modal } from "../../components/modalProvider";

function CategoryPage() {
  const { setSet, setFixed, setActiveItem } = useContext(Modal);

  useEffect(() => {
    setSet(true);
    setFixed(true);
    localStorage.setItem("text", JSON.stringify(""));
    setActiveItem("");
  }, []);
  return (
    <div>
      <Category />
    </div>
  );
}

export default CategoryPage;
