import React, { useContext } from "react";
import { useQuery} from "react-query";
import { parkingLotsFetcher } from "../../api/client";
import ParkingLotCard, {
  ParkingLotProps,
} from "../../components/parkingLotCard/ParkingLotCard";
import styled from "styled-components";
import { AppContext } from "../../context/AppContext";

const ParkingLots = () => {
  const { apiKey } = useContext(AppContext);

  const { data, isLoading, error, isError } = useQuery(
    ["parkingLots", apiKey],
    parkingLotsFetcher(apiKey)
  );

  if (isError) return <p>{error}</p>;

  return (
    <ParkingWrapperStyled>
      {isLoading && <p>Loading...</p>}
      <ParkingListStyled>
        {data?.features?.map((parkingLot: ParkingLotProps) => (
          <li key={parkingLot.properties.id}>
            <ParkingLotCard parkingLot={parkingLot} />
          </li>
        ))}
      </ParkingListStyled>
    </ParkingWrapperStyled>
  );
};

const ParkingWrapperStyled = styled.article`
  max-width: 1080px;
`;

const ParkingListStyled = styled.ul`
  display: grid;
  justify-content: center;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fill, 100%);
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: ${(props) => props.theme.width.mobileBig}) {
    grid-template-columns: repeat(auto-fill, 45%);
    grid-gap: 1em;
    padding: 1rem 0;
  }
  @media (min-width: ${(props) => props.theme.width.tablet}) {
    grid-template-columns: repeat(auto-fill, 30%);
    grid-gap: 1em;
    padding: 2rem 0;
  }
  @media (min-width: ${(props) => props.theme.width.desktop}) {
    //grid-template-columns: repeat(auto-fill, 25%);
    grid-gap: 1em;
    padding: 3rem 0;
  }
`;

export default ParkingLots;
