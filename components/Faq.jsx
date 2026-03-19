import { useState } from 'react';
import './faq.css';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: 'Quels services proposez-vous ?',
      answer: (
        <ul>
          <li>Musique pour la cérémonie (seulement</li>
          <li>Musique pour le vin d'honneur</li>
          <li>Musique pour la soirée dansante</li>
          <li>Animation (jeux, karakoké)</li>
          <li>Dj</li>
        </ul>
      ),
    },
    {
      question: 'Quels sont les services inclus dans le forfait mariage  ?',
      answer:
        "Plusieurs formules s'offrent à vous : Animation de la réception, Animation du vin d'honneur + la réception, sonorisation de la cérémonie Laïque+ animation du vin d'honneur + la réception",
    },
    {
      question: 'Le matériel est-il inclus dans vos services ?',
      answer:
        "Oui, je viens avec ma sono et mes jeux de lumières. Vous pouvez également avoir des micros à disposition ainsi qu'un vidéo projecteur.",
    },
    {
      question: 'Quels styles musicaux jouez-vous ?',
      answer: (
        <ul>
          <li>Pop</li>
          <li>Latino</li>
          <li>Rock</li>
          <li>Jazz</li>
          <li>Disco</li>
        </ul>
      ),
    },
    {
      question:
        'Pouvez-vous apprendre une chanson spécifique pour mon événement ?',
      answer: 'Oui',
    },
    {
      question:
        'Que se passe-t-il si ma date ou mes horaires changent après vous avoir réservée ?',
      answer:
        'Pour la date, il faut savoir si je suis disponible à une autre date. Pour les horaires je peux toujours ajuster.',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Questions fréquentes</h2>

      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            {item.question}
            <div className={`arrow ${openIndex === index ? 'open' : ''}`}>
              ▼
            </div>
          </div>

          {openIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
