import Header from "@/components/Header";
import React from "react";

const Provider = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="px-10 lg:px-32 xl:px-48 2xl:px-56"> {children}</div>
    </div>
  );
};

export default Provider;
