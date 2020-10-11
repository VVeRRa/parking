import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import LanguageBtn from "../buttons/LanguageBtn";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: SyntheticEvent<HTMLButtonElement>) => {
    i18n
      .changeLanguage(event.currentTarget.value?.toLowerCase() ?? "cz")
      .catch(console.error);
  };

  return (
    <FooterStyled>
      <div>
        <LanguageBtn changeLanguage={changeLanguage} language={"CZ"} />/
        <LanguageBtn changeLanguage={changeLanguage} language={"EN"} />
      </div>
      <article>
        <Trans i18nKey="footer">
          {t("common.iconsMadeBy")}&nbsp;
          <Link to="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </Link>
          &nbsp;{t("common.from")}&nbsp;
          <Link to="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </Link>
        </Trans>
      </article>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  height: 8rem;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  article {
    a {
      color: ${(props) => props.theme.colors.white};
      text-decoration: underline;
    }
  }
`;

export default Footer;
