import React, { useContext, useEffect } from "react";
import ProfilAdd from "../../components/users/profil";
import { Modal } from "../../components/modalProvider";
function UserPage() {
  const { setSet } = useContext(Modal);
  useEffect(() => {
    setSet(false);
  });
  return (
    <div className="profil-wrapper">
      <ProfilAdd />
    </div>
  );
}

export default UserPage;
