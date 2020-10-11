import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import { ReactComponent as Parking } from "../../assets/parking.svg";
import { Link } from "react-router-dom";
import InfoItem from "../infoItem/InfoItem";

export type ParkingLotProps = {
  properties: {
    address: { address_formatted: string; address_region: string };
    parking_type: { description: string; id: number };
    id: number;
    num_of_free_places: number;
    updated_at: string;
    name: string;
  };
};

type ParkingLotCardProps = {
  parkingLot: ParkingLotProps;
};

const ParkingLotCard = ({ parkingLot }: ParkingLotCardProps) => {
  const { t } = useTranslation();

  const { properties } = parkingLot;
  const {
    address,
    parking_type,
    name,
    num_of_free_places,
    updated_at,
    id,
  } = properties;

  return (
    <ParkingLotCardStyled>
      <Link to={`/detail/${id}`}>
        <div>
          <Parking />
          <h2>{parking_type.description}</h2>
        </div>
        <InfoItem info={t("common.name")} value={name} />
        <InfoItem info={t("common.region")} value={address.address_region} />

        <InfoItem
          info={t("common.numberOfFreePlaces")}
          value={num_of_free_places}
        />
        <InfoItem
          info={t("common.actualized")}
          value={dayjs(updated_at).format("DD/MM/YYYY, HH:mm")}
        />
      </Link>
    </ParkingLotCardStyled>
  );
};

export const ParkingLotCardStyled = styled.article`
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  padding: 0.5rem 1rem;
  @media (min-width: ${(props) => props.theme.width.mobileBig}) {
    min-height: 18rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  }
  @media (min-width: ${(props) => props.theme.width.desktop}) {
    min-height: 15rem;
  }
  a {
    text-decoration: none;
  }
  div:first-child {
    display: flex;
    align-items: center;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  h2 {
    margin: 0.5rem 0;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.main};
  }
`;

export default ParkingLotCard;
