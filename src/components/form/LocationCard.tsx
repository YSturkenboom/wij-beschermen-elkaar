import React from 'react'
import { PinDropOutlined } from '@material-ui/icons';

interface LocationCardProps {
    name: string;
    address: string;
    telephone: string | number;
}

export const LocationCard: React.FC<LocationCardProps> = ({ name, address, telephone }) => {
        return (
            <div className="map-search-location">
                <div className="map-search-location-info">
                    <p className="map-search-location-info-title">{name}</p>
                    <p>{address}</p>
                    <p>Phone: <a href="tel:{telephone}">{telephone}</a></p>
                </div>
                <div className="map-search-location-icons">
                    <PinDropOutlined />
                </div>
            </div>
        );
}