import React, { useContext, useEffect } from "react";
import AboutCards from "../../components/aboutcards";
import { Modal } from "../../components/modalProvider";

function AboutPage() {
  const { setSet, hig, setHig } = useContext(Modal);
  useEffect(() => {
    setSet(true);
    setHig(true);
  }, []);
  return (
    <div>
      <AboutCards />
      {hig ? <div className="about-hig"></div> : ""}
    </div>
  );
}

export default AboutPage;
