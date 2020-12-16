import React from "react";

const Secao = (props) => {
  const { title, children } = props;

  return (
    <div className="secao">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Secao;
