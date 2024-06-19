import React from "react";
import Header from "../molecules/Header";
import Footer from "../atoms/Footer";
import CarteMenu from "../molecules/CarteMenu";

const MenuPage = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <Header />
      <main className="flex-grow flex items-center justify-center py-10">
        <CarteMenu />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
