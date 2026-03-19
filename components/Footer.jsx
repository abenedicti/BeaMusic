import '../components/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="infos">
        <p>Tél. 06-69-42-04-55</p>
        <a href="mailto:beadidom@gmail.com">beadidom@gmail.com</a>
      </div>

      <div className="lien">
        <h3>Retrouvez-moi également sur </h3>
        <a
          href="https://www.mariages.net/musique-mariage/bea-music--e213021/avis"
          target="_blank"
        >
          mariages.net
        </a>
      </div>
    </div>
  );
}

export default Footer;
