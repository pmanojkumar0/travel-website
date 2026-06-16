import { useState } from "react";
import "./Destinations.css";

const places = [
  {
    name: "Araku Valley",
    state: "Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    budget: "₹4,500",
    type: "hills",
    desc: "Coffee trails & tribal culture",
  },
  {
    name: "Lambasingi",
    state: "Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    budget: "₹3,000",
    type: "hills",
    desc: "Kashmir of Andhra Pradesh",
  },
  {
    name: "Maredumilli",
    state: "Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    budget: "₹3,500",
    type: "forest",
    desc: "Dense rainforests & waterfalls",
  },
  {
    name: "Coorg",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    budget: "₹6,000",
    type: "hills",
    desc: "Coffee country & misty peaks",
  },
  {
    name: "Munnar",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
    budget: "₹5,500",
    type: "hills",
    desc: "Rolling tea gardens & cool air",
  },
  {
    name: "Alleppey",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    budget: "₹5,000",
    type: "backwater",
    desc: "Houseboat stays on serene waters",
  },
];

const TYPES = ["all", "hills", "forest", "backwater"];

function Destinations() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");

  const filtered = places.filter(
    (p) => filter === "all" || p.type === filter
  );

  const sorted = [...filtered].sort((a, b) => {
    const aBudget = parseInt(a.budget.replace(/\D/g, ""));
    const bBudget = parseInt(b.budget.replace(/\D/g, ""));

    if (sort === "budget-asc") return aBudget - bBudget;
    if (sort === "budget-desc") return bBudget - aBudget;

    return 0;
  });

  return (
    <section className="places">
      <h2>Nature Destinations</h2>
      <p>Handpicked escapes across India</p>

      <div className="filter-row">
        {TYPES.map((t) => (
          <button
            key={t}
            className={filter === t ? "active" : ""}
            onClick={() => setFilter(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="sort-row">
        <span>{sorted.length} destinations</span>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default Order</option>
          <option value="budget-asc">Budget: Low to High</option>
          <option value="budget-desc">Budget: High to Low</option>
        </select>
      </div>

      <div className="card-container">
        {sorted.map((place, index) => (
          <div className="card" key={index}>
            <img src={place.image} alt={place.name} />

            <h3>{place.name}</h3>

            <p>
              {place.state} • {place.desc}
            </p>

            <p>
              <strong>Budget:</strong> {place.budget}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;