import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/");
    }
  }, []);
  return <div>we are on the home Page</div>;
}
