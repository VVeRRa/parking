import React from "react";
import styled from "styled-components";

type InfoItemProps = {
  info: string;
  value: string | number;
};
const InfoItem = ({ info, value }: InfoItemProps) => {
  return (
    <InfoItemStyled>
      <h6>{info}: </h6>
      <h3>{value}</h3>
    </InfoItemStyled>
  );
};

const InfoItemStyled = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 2;
  h6 {
    font-size: 1rem;
    margin: 0 0.5rem 0 0;
    color: ${(props) => props.theme.colors.dark};
  }
  h3 {
    margin: 0;
    color: ${(props) => props.theme.colors.black};
  }
  h4 {
    margin: 0;
    color: ${(props) => props.theme.colors.black};
  }
`;

export default InfoItem;
