import { Link } from "react-router-dom";

function Hero() {
  return (
<section id="home" className="hero">     
   <h1>Explore Nature With Family & Friends</h1>

      <p>
        Discover waterfalls, mountains, forests, beaches and
        affordable travel plans.
      </p>

      <Link to="/places" className="explore-btn">Explore Now</Link>
    </section>
  );
}

export default Hero;