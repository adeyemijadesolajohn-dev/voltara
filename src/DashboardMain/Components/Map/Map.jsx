import React, { useRef } from "react";
import "./Map.scss";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Nigeria from "../../../MockGeoFeatures.json";
import $ from "jquery";

const MeterMap = () => {
  const center = [6.967480183000134, 8.490447044];
  const mapref = useRef();
  const countyStyle = {
    weight: 2,
    fillColor: "yellowgreen",
    color: "#003b6d",
    opacity: 1,

    dashArray: "3",
    fillOpacity: 0.7,
    zoomAnimation: true,
    zoom: 0,
  };
  const onEachFeature = (Nigeria, layer) => {
    layer.options.fillColor = Nigeria.properties.color;
    const Area_Name = Nigeria.properties.NAME_2;
    const State_Name = Nigeria.properties.NAME_1;

    layer.bindPopup(
      `<div class="popup">
        <h4>${Area_Name}</h4>
        <p>${State_Name}</p>
      </div>`
    );
  };

  return (
    <div>
      <MapContainer
        zoom={7}
        scrollWheelZoom={false}
        center={center}
        style={{ height: "700px", margin: "20px" }}
        ref={mapref}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.967480183000134, 8.490447044]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <GeoJSON
          data={Nigeria}
          style={countyStyle}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    </div>
  );
};

export default MeterMap;
