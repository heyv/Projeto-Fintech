import React, { useEffect, useState } from "react";
import { useData } from "../Context/DataContext";
import DataRange from "./DataRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DataRange />
        <h1 className="box bg3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
