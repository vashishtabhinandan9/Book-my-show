import React from "react";

export const NextArrow = (props) => {{/**these props will contain classname,style,onclick 

these props are sentfrom  nextArrow: <NextArrow />, nextArrow send these props*/}

  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}
      />
    </>
  );
};

