import React, { useRef } from "react";
import "./Map.scss";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  GeoJSON,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import NigeriaLga from "../../../MockGeoFeatures.json";
import NigeriaBoundaries from "../../../MockGeoFeaturesBoundaries.json";
import NigeriaState from "../../../MockGeoFeaturesStates.json";
import L from "leaflet";
import { MdMyLocation } from "react-icons/md";

const MeterMap = () => {
  const center = [9.072264, 7.491302];
  const mapref = useRef();
  const countyStyle = {
    weight: 0.7,
    fillColor: "#003b6d",
    color: "#003b6d",
    opacity: 0.2,

    dashArray: "3",
    fillOpacity: 0.135,
    zoomAnimation: true,
    zoom: 0,
  };
  const countyBoundaryStyle = {
    weight: 0.7,
    fillColor: "yellowgreen",
    color: "#003b6d",
    opacity: 0.7,

    dashArray: "3",
    fillOpacity: 0,
    zoomAnimation: true,
    zoom: 0,
  };
  const stateStyle = {
    weight: 2,
    fillColor: "yellowgreen",
    color: "#003b6d",
    opacity: 0.7,

    dashArray: "3",
    fillOpacity: 0,
    zoomAnimation: true,
    zoom: 0,
  };
  const onEachFeature = (NigeriaLga, layer) => {
    layer.options.fillColor = NigeriaLga.properties.color;
    const Area_Name = NigeriaLga.properties.admin2Name;
    const State_Name = NigeriaLga.properties.admin1Name;

    layer.bindPopup(
      `<div class="popup">
        <h4>${Area_Name}</h4>
        <p>${State_Name}</p>
      </div>`
    );
  };

  // const Icon = new L.Icon({
  //   iconUrl: <MdMyLocation />,
  //   iconSize: [25, 41],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  //   shadowAnchor: [12, 41],
  //   shadowSize: [41, 41],
  // });

  return (
    <div>
      <MapContainer
        zoom={8}
        scrollWheelZoom={true}
        center={center}
        style={{
          height: "70vh",
          marginInline: "22px",
          marginTop: "-17px",
          padding: "22px",
          border: "3.5px outset whitesmoke",
          borderRadius: "12px",
          boxShadow: "rgba(0, 0, 0, 0.7) 0 5.5px 12px",
          transition: "0.35s ease-in-out",
        }}
        ref={mapref}
      >
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Google Satellite">
            <LayerGroup>
              <TileLayer
                attribution='&copy; <a href="https://www.google.com/maps">Google</a>'
                url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              />
              <TileLayer url="https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}" />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>

        <Marker position={center}>
          <Popup>
            <div className="popup">
              <h4>Abuja</h4>
              <p>Federal Capital Territory</p>
            </div>
          </Popup>
        </Marker>
        <GeoJSON
          data={NigeriaState}
          style={stateStyle}
          onEachFeature={onEachFeature}
        />
        <GeoJSON
          data={NigeriaLga}
          style={countyStyle}
          onEachFeature={onEachFeature}
        />
        <GeoJSON
          data={NigeriaBoundaries}
          style={countyBoundaryStyle}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    </div>
  );
};

export default MeterMap;
