import React from "react";
import { NavLink } from "react-router-dom";

interface propsLink {
  url: string;
  className: string;
  name: string;
}
const Link = (props: propsLink) => {
  return (
    <>
      <NavLink to={props.url} className={props.className}>
        {props.name}
      </NavLink>
    </>
  );
};

export default Link;
