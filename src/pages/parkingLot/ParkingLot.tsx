import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import ParkingMap from "../../components/map/ParkingMap";
import { parkingLotFetcher } from "../../api/client";
import { ParkingLotCardStyled } from "../../components/parkingLotCard/ParkingLotCard";
import { AppContext } from "../../context/AppContext";
import InfoItem from "../../components/infoItem/InfoItem";

const ParkingLot = () => {
  const query = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { apiKey } = useContext(AppContext);

  const { data, isLoading, error, isError } = useQuery(
    ["parkingLot", apiKey, query.id],
    parkingLotFetcher(apiKey, query.id)
  );

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error}</p>;

  const { properties, geometry } = data;

  const {
    address,
    parking_type,
    name,
    num_of_free_places,
    updated_at,
    payment_link,
    total_num_of_places,
  } = properties;

  return (
    <ParkingLotContainerStyled>
      <ParkingLotAndMapWrapper>
        <ParkingMap coords={geometry.coordinates} />
        <h2>{parking_type.description}</h2>
        <ParkingLotCardReStyled>
          <InfoItem info={t("common.name")} value={name} />
          <InfoItem info={t("common.region")} value={address.address_region} />
          <InfoItem
            info={t("common.placesInTotal")}
            value={total_num_of_places}
          />
          <InfoItem
            info={t("common.numberOfFreePlaces")}
            value={num_of_free_places}
          />
          <InfoItem
            info={t("common.actualized")}
            value={dayjs(updated_at).format("DD/MM/YYYY, HH:mm")}
          />

          <div>
            <a href={payment_link} target="_blank" rel="noopener noreferrer">
              {t("common.paymentLink")}
            </a>
          </div>
        </ParkingLotCardReStyled>
      </ParkingLotAndMapWrapper>
    </ParkingLotContainerStyled>
  );
};

const ParkingLotContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    max-width: 768px;
    padding: 2rem 0;
    margin: auto;
  }

  .leaflet-container {
    width: 100% !important;
  }
`;

const ParkingLotAndMapWrapper = styled.div`
  width: 100%;

  h2 {
    margin: 2rem 0 1rem 0;
    padding: 0 1rem;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.main};

    @media (min-width: ${(props) => props.theme.width.tablet}) {
      padding: 0;
    }
  }
`;

const ParkingLotCardReStyled = styled(ParkingLotCardStyled)`
  box-shadow: none;
  padding: 0 1rem;
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    min-height: auto;
    padding: 0;
  }

  div:first-child {
    align-items: baseline;
  }
  div {
    padding-right: 2rem;
    margin: 0.5rem 0;
    a {
      color: ${(props) => props.theme.colors.main};
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

export default ParkingLot;
