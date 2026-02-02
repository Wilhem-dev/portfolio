import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css/Passion.css";
import L from "leaflet";
import { useState } from "react";
import img2 from "../assets/img2.png";

// Fix icône Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Lieux visités
const places = [
  { name: "Guyane", position: [3.9339, -53.1258] },
  { name: "Paris", position: [48.8566, 2.3522] },
  { name: "Le Havre", position: [49.4944, 0.1079] },
  { name: "Nantes", position: [47.2184, -1.5536] },
  { name: "Angers", position: [47.4784, -0.5632] },
  { name: "Tours", position: [47.3941, 0.6848] },
  { name: "Marseille", position: [43.2965, 5.3698] },
  { name: "Nice", position: [43.7102, 7.262] },
  { name: "Lyon", position: [45.764, 4.8357] },
  { name: "Brest", position: [48.3904, -4.4861] },
  { name: "Rennes", position: [48.1173, -1.6778] },
  { name: "Saint-Malo", position: [48.6493, -2.0257] },
  { name: "Mont-Saint-Michel", position: [48.636, -1.5115] },
  { name: "Strasbourg", position: [48.5734, 7.7521] },
  { name: "Annecy", position: [45.8992, 6.1294] },
  { name: "Abou Dhabi", position: [24.4539, 54.3773] },
  { name: "Kuala Lumpur", position: [3.139, 101.6869] },
  { name: "Hong Kong", position: [22.3193, 114.1694] },
  { name: "Shenzhen", position: [22.5431, 114.0579] },
  { name: "Shanghai", position: [31.2304, 121.4737] },
  { name: "Pékin", position: [39.9042, 116.4074] },
  { name: "Milan", position: [45.4642, 9.19] },
  { name: "Londres", position: [51.5074, -0.1278] },
  { name: "Séville", position: [37.3891, -5.9845] },
  { name: "Barcelone", position: [41.3851, 2.1734] },
  { name: "Bruxelles", position: [50.8503, 4.3517] },
  { name: "Amsterdam", position: [52.3676, 4.9041] },
  { name: "Rotterdam", position: [51.9244, 4.4777] },
  { name: "Budapest", position: [47.4979, 19.0402] },
  { name: "Genève", position: [46.2044, 6.1432] },
];

// Passions
const passions = [
  {
    title: "Voyager 🌍",
    description:
      "J’aime voyager et découvrir de nouvelles cultures. J’ai déjà visité plus de neuf pays et de nombreuses villes en Europe, en Asie et au Moyen-Orient. Cliquez pour voir les lieux que j'ai déjà visités sur une carte interactive !",
    type: "map",
  },
  {
    title: "Pêche en mer 🎣",
    description:
      "J'adore pêcher en mer, même si je n’ai jamais eu de grosse prise, à part un calamar. Ce que j’aime le plus dans la pêche, c’est le calme, la connexion avec la nature et le ressourcement. Cliquez pour voir une image !",
    image: img2,
  },
];

const Passion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="passion-section">
      <h2 className="section-title">Passions</h2>

      <div className="cards-container-vertical">
        {passions.map((passion, index) => (
          <div
            className={`passion-card ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleCard(index)}
          >
            <h3>{passion.title}</h3>
            <p>{passion.description}</p>
            <div className="click-indicator">
              <span>⬇️ Cliquez pour voir !</span>
            </div>

            {/* Affiche la carte ou l'image seulement si active */}
            {activeIndex === index && passion.type === "map" && (
              <div className="map-container">
                <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false}>
                  <TileLayer
                    attribution="© OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {places.map((place, i) => (
                    <Marker key={i} position={place.position}>
                      <Popup>{place.name}</Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            )}

            {activeIndex === index && passion.image && (
              <img
                src={passion.image}
                alt={passion.title}
                className="passion-image"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Passion;
