import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-black flex flex-col items-center">
      <div className="w-full max-w-[3840px]">{children}</div>
    </div>
  );
};

export default Layout;
