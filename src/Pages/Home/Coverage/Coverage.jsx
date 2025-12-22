import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { useLoaderData } from 'react-router';
import Aos from 'aos';

const Coverage = () => {
    const coverageData = useLoaderData()
   useEffect(() => {
     Aos.init();
   }, []);
    return (
      <div
        data-aos-duration="5000"
        data-aos="fade-up"
        className="w-full min-h-60 px-5 space-y-8"
      >
        <p className="text-3xl font-extrabold text-center mt-8">
          {" "}
          Our <span className="text-primary"> Coverage </span> Map{" "}
        </p>
        <MapContainer
          className="h-[600px] w-full"
          center={[23.684994, 90.356331]}
          zoom={7}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {coverageData.map((district) => (
            <Marker position={[district.latitude, district.longitude]}>
              <Popup>
               Whole zilla
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
};

export default Coverage;