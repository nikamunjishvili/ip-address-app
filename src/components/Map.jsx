import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useGlobalContext } from "../context";

function Map() {
  const { address } = useGlobalContext();

  // center={[
  //       data[index].coordinates.langitude,
  //       data[index].coordinates.latitude,
  //     ]}

  //    center={[
  //       data[index].coordinates.langitude,
  //       data[index].coordinates.latitude,
  //    ]}

  return (
    <>
      {address.location !== undefined ? (
        <section className="map">
          <MapContainer
            key={JSON.stringify([address.location.lat, address.location.lng])}
            center={[address.location.lat, address.location.lng]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[address.location.lat, address.location.lng]}
            ></Marker>
          </MapContainer>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Map;
