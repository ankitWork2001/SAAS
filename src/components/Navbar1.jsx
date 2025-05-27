import React from "react";

const Navbar1 = () => {
  return (
    <div
      className="fixed top-0 z-10 w-full"
      style={{
        height: "101px",
        paddingLeft: "256px", // leaves space for sidebar
        background: "linear-gradient(90deg, #010B24 0%, #1823FF 184.42%)",
        display: "flex",
        alignItems: "center",
        paddingRight: "20px",
        color: "white",
      }}
    >
      <h1 className="text-xl font-semibold">Admin Panel Navbar</h1>
    </div>
  );
};

export default Navbar1;
