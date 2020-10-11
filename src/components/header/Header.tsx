import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ReactComponent as ParkingSpot } from "../../assets/parking-area (1).svg";
import { ReactComponent as Add } from "../../assets/add.svg";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");

  const onSubmit = () => {
    addKey(inputValue);
  };
  const { addKey } = useContext(AppContext);

  return (
    <HeaderStyled>
      <ul>
        <li>
          <NavLink to={"/"} exact>
            <ParkingSpot />
          </NavLink>
        </li>
        <li>
          <div>
            <input
              onKeyDown={onSubmit}
              type={"text"}
              placeholder={t("common.addApiKey")}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={onSubmit}>
              <Add />
            </button>
          </div>
        </li>
      </ul>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.main};
  position: sticky;
  top: 0;

  ul {
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 1rem;
    margin: 0;
    li {
      height: fit-content;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      input[type="text"] {
        border: none;
        line-height: 2;
        border-radius: 3px;
        padding: 0.25rem 0.5rem;
        margin-right: 1rem;
        width: 100%;
        @media (min-width: ${(props) => props.theme.width.mobileBig}) {
          min-width: 20rem;
        }
        @media (min-width: ${(props) => props.theme.width.tablet}) {
          min-width: 30rem;
        }

        &::placeholder {
          color: ${(props) => props.theme.colors.secondary};
        }
      }

      svg {
        fill: ${(props) => props.theme.colors.white};
        width: 2rem;
        height: 2rem;
      }
      button {
        background-color: transparent;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
      }
    }
  }
`;

export default Header;
