import React from "react";
import styled from "styled-components";

const Link = styled.a`
color: black;
font-weight: bold;
display: block;
padding: 1rem;
text-transform: uppercase;
user-select: none;
font-family: "Times New Roman", Times, serif;
border: 1px solid ;
border-radius: 4px;
text-decoration: none;
text-align: center;
white-space: nowrap;

width: ${(props) => (props.fullWidth ? "100%" : "auto")}
cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}

color: ${(props) => (props.disabled ? "#999" : "#222")}

&:hover {
  background: ${(props) => (props.disabled ? "#74c69d" : "#222")}
   ;
}

&: active {
  background :${(props) => (props.disabled ? "#74c69d" : "#40916c")};
   
}
`
const MyLink = (props) => {
  const { children, disabled, url, fullWidth } = props;

  return (
    <Link
      fullWidth={fullWidth}
      href={disabled ? undefined : url}
      disabled={disabled}
    >
      {children}
    </Link>
  )
}
export default MyLink;
