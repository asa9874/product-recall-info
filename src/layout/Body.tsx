import React from "react";

interface BodyProps {
  children: React.ReactNode;
  pt: number;
}

function Body({children, pt}: BodyProps) {
  return (
    <div className={`flex flex-col pt-${pt} min-h-screen h-screen`}>
      {children}
    </div>
  );
}

export default Body;