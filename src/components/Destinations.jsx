const places = [
  {
    name: "Araku Valley",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    budget: "₹4,500"
  },
  {
    name: "Lambasingi",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    budget: "₹3,000"
  },
  {
    name: "Maredumilli",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    budget: "₹3,500"
  }
];

function Destinations() {
  return (
<section id="places" className="places">      
  <h2>Popular Nature Destinations</h2>

      <div className="card-container">
        {places.map((place, index) => (
          <div className="card" key={index}>
            <img src={place.image} alt={place.name} />

            <h3>{place.name}</h3>

            <p>Estimated Budget: {place.budget}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;