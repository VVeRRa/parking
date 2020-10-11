import React, { SyntheticEvent } from "react";
import styled from "styled-components";

type LanguageBtnProps = {
  changeLanguage: (event: SyntheticEvent<HTMLButtonElement>) => void;
  language: string;
};
const LanguageBtn = ({ changeLanguage, language }: LanguageBtnProps) => {
  return (
    <LanguageBtnStyled onClick={changeLanguage} value={language}>
      {language}
    </LanguageBtnStyled>
  );
};

const LanguageBtnStyled = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  margin: 2rem;
`;

export default LanguageBtn;
