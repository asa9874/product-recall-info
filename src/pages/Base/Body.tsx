import React from "react";

interface BodyProps {
  children: React.ReactNode;
}

function Body({children}: BodyProps) {
  return (
    <div className="flex flex-col pt-40 min-h-screen h-screen">
      {children}
    </div>
  );
}

export default Body;