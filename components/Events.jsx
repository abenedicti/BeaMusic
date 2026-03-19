import { useState } from 'react';
import '../components/events.css';
import cocktails from '../img/cocktails.png';
import danse from '../img/danse.png';
import anniversaire from '../img/gateau.png';
import mariage from '../img/mariage.png';

function Events() {
  const [modal, setModal] = useState(null);

  return (
    <div className="events-container">
      <div className="events">
        <div className="mariage">
          <h2 onClick={() => setModal('mariage')}>Mariages</h2>
          <img
            src={mariage}
            alt="mariage"
            onClick={() => setModal('mariage')}
          />
        </div>
        <div className="anniversaire">
          <h2 onClick={() => setModal('anniversaire')}>Anniversaires</h2>
          <img
            src={anniversaire}
            alt="anniversaire"
            onClick={() => setModal('anniversaire')}
          />
        </div>
        <div className="cocktails">
          <h2 onClick={() => setModal('cocktails')}>Cocktails privés</h2>
          <img
            src={cocktails}
            alt="cocktails"
            onClick={() => setModal('cocktails')}
          />
        </div>
        <div className="danse">
          <h2 onClick={() => setModal('danse')}>Soirées</h2>
          <img src={danse} alt="danse" onClick={() => setModal('danse')} />
        </div>
      </div>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {modal === 'mariage' && (
              <>
                <h2>Mariages</h2>
                <p>
                  Pour une journée qui vous ressemble... <br /> Je construis
                  avec vous, en fonction de vos souhaits <br /> la sonorisation
                  de votre cérémonie laique <br />
                  votre vin d'honneur en live <br />
                  l'animation DJ jusqu'au bout de la nuit.
                </p>
              </>
            )}

            {modal === 'anniversaire' && (
              <>
                <h2>Anniversaires</h2>
                <p>
                  Pour célébrer un anniversaire, je m’adapte à l’ambiance que
                  vous souhaitez : des morceaux calmes pour un moment convivial,
                  ou des hits entraînants pour faire danser tout le monde.{' '}
                  <br />
                  Mon objectif : que chacun reparte avec de beaux souvenirs.
                </p>
              </>
            )}

            {modal === 'cocktails' && (
              <>
                <h2>Cocktails privés</h2>
                <p>
                  Soirée intimiste, ambiance musicale lounge et jazzy...
                  (accompagnée d'un musicien sur demande)
                </p>
              </>
            )}

            {modal === 'danse' && (
              <>
                <h2>Soirées dansantes</h2>
                <p>
                  Mon professionnalisme et ma bonne humeur au service de votre
                  soirée dansante, joyeuse et conviviale. <br />
                  Titres actuels ou classiques, je ferai en sorte que tout le
                  monde se lève et profite du moment. <br />
                  Conscrits, bals, repas dansants... <br />
                  Un répertoire pour tous les publics !
                </p>
              </>
            )}

            <button onClick={() => setModal(null)}>✖︎</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Events;
