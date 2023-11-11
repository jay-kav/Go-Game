import React from "react";

import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="mb-auto p-4 container mx-auto">{children}</main>
    </div>
  );
}

export default MainLayout;
