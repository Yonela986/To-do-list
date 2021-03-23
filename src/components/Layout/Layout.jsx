import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import Global from "../Global/Global";

const Header = styled.header`
  background: #1b4332;
  color: white;
  text-align: center;
  padding: 0.5rem;
  width: 100%;
`;
const Title = styled.h1`
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 1px;
`;

const Footer = styled.footer`
  background: #1b4332;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  font-family: "Times New Roman", Times, serif;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
`;
const LinkWrap = styled.li`
  width: 50%;
`;

const PAGE_TITLE_MAP = {
  home: "To-Do-List",
  add: "Adding Items",
  edit: "Editing Items"
};

const Home = (props) => {
  const { children, activePage = "home" } = props;
  return (
    <>
      <Header>
        <Title>{PAGE_TITLE_MAP[activePage]}</Title>
      </Header>

      {children}

      <Footer>
        <nav>
          <List>
            <LinkWrap>
             <Global>
              <Link fullWidth disabled={activePage === "home"} url="#/">
                Back to Home
              </Link>
              </Global>
            </LinkWrap>

            <LinkWrap>
            <Global>
              <Link fullWidth disabled={activePage === "add"} url="#/add">
                Add New Item
              </Link>
              </Global>
            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </>
  );
};

export default Home;
