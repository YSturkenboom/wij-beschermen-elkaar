import React from 'react'
import { Card } from '@material-ui/core';
import { PinDropOutlined } from '@material-ui/icons';

interface MapLegendProps {
    isOpened: boolean;
}

export const MapLegend: React.FC<MapLegendProps> = ({ isOpened }) => {
    return (
        <Card raised className="map-legend">
            <p className="map-legend-title">Key</p>
            <div className="map-legend-icons">
                <div className="map-legend-icons-block">
                    <PinDropOutlined />
                    <p>Kitchen Showroom</p>
                </div>
                <div className="map-legend-icons-block">
                    <PinDropOutlined />
                    <p>Other Store</p>
                </div>
                <div className="map-legend-icons-block">
                    <PinDropOutlined />
                    <p>Samsung Experience Center</p>
                </div>
            </div>
        </Card>
    );
}