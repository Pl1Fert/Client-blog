"use client";

import { FC } from "react";
import { Map, Marker, NavigationControl } from "react-map-gl";

import { CITIES_COORDINATES, ENV_VARS } from "@/constants";

import styles from "./mapComponent.module.scss";

export const MapComponent: FC = () => {
    const mapBoxToken = ENV_VARS.MAPBOX_API_KEY;

    return (
        <div className={styles.mapContainer}>
            <Map
                mapboxAccessToken={mapBoxToken}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                maxZoom={20}
                minZoom={3}
                initialViewState={{
                    longitude: 4.3525,
                    latitude: 50.8467,
                }}>
                {CITIES_COORDINATES.map(({ id, lat, lng }) => (
                    <Marker key={id} latitude={lat} longitude={lng} anchor="bottom" />
                ))}
                <NavigationControl position="top-left" />
            </Map>
        </div>
    );
};
