import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({item}) {
    return (
        <MapContainer center={[item.latitude, item.longitude]} zoom={13} scrollWheelZoom={false} className="map">
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[item.latitude, item.longitude]}></Marker>
        </MapContainer>
    )
}

export default Map;