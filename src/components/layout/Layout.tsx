import React, { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutMainStyled>
      <Header />
      {children}
      <Footer />
    </LayoutMainStyled>
  );
};

const LayoutMainStyled = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;
export default Layout;
