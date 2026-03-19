import avis1 from '../img/avis1.png';
import avis2 from '../img/avis2.png';
import avis3 from '../img/avis3.png';
import avis4 from '../img/avis4.png';
import avis5 from '../img/avis5.png';
import avis6 from '../img/avis6.png';
import '../components/carrousel.css';

function Carrousel() {
  return (
    <div className="avis-clients">
      <div className="avis-container">
        <h2>Avis clients</h2>
        <div className="carrousel">
          <img src={avis1} alt="avis client" />
          <img src={avis2} alt="avis client" />
          <img src={avis3} alt="avis client" />
          <img src={avis4} alt="avis client" />
          <img src={avis5} alt="avis client" />
          <img src={avis6} alt="avis client" />
        </div>
      </div>
    </div>
  );
}
export default Carrousel;
