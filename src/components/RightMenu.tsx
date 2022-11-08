import React from "react";
import Link from "./Link";

const RightMenu = () => {
  return (
    <>
      <div className="right-menus">
        <span className="right-title-menus">
          DISCOVER MORE OF WHAT MATTERS TO YOU
        </span>
        <div className="categories">
          <Link url={"#"} className={"box-categories"} name={"Programming"} />
          <Link url={"#"} className={"box-categories"} name={"Programming"} />
          <Link url={"#"} className={"box-categories"} name={"Programming"} />
          <Link url={"#"} className={"box-categories"} name={"Programming"} />
          <Link url={"#"} className={"box-categories"} name={"Programming"} />
          <Link url={"#"} className={"box-categories"} name={"Programming"} />
        </div>
      </div>
    </>
  );
};

export default RightMenu;
