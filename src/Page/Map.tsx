import React from 'react'
import { useEffect, useRef } from "react";
declare const google: any;



function Map() {


    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current) {
          const googleMap = new google.maps.Map(mapRef.current, {
            center: { lat: 14.3596, lng: 121.0523 },
            zoom: 14,
          });
          const marker = new google.maps.Marker({
            position: { lat: 14.3596, lng: 121.0523 },
            map: googleMap,
            title:
              "Yngen Building 888-B Sabak Street, Magsaysay Road Brgy, San Antonio, San Pedro, 4023 Laguna",
          });
        }
      }, []);

  return (
    <div className="h-96" ref={mapRef} />
  )
}

export default Map