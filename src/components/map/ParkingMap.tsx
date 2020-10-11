import React from "react";
import { Map, TileLayer, Circle } from "react-leaflet";
import styled from "styled-components";

import "leaflet/dist/leaflet.css";

import { theme } from "../../assets/styles/theme";

type MapProps = {
  coords: number[];
};
const ParkingMap = ({ coords }: MapProps) => {
  const position: [number, number] = [coords[1], coords[0]];

  return (
    <StyledMap>
      <Map
        center={position}
        zoom={15}
        preferCanvas
        style={{ height: "100%", width: "400px" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={position}
          radius={15}
          weight={3}
          fillColor={theme.colors.main}
          color={theme.colors.main}
        />
      </Map>
    </StyledMap>
  );
};

const StyledMap = styled.div`
  height: 250px;
  width: 100%;
`;

export default ParkingMap;
