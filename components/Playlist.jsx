import Songs from './Songs';
import '../components/playlist.css';
function Playlist() {
  return (
    <div className="content">
      <div className="content-section">
        <div className="intro">
          <p>
            Chanteuse, DJ et animatrice , ma bonne humeur et mon sens du contact
            pour la réussite de vos soirées. <br /> Je vous propose des
            événements personnalisés, à votre image, grâce un large panel
            musical <br />
            (variété française et internationale, pop, funk, soul, jazz...).
          </p>
        </div>
        <div className="songs">
          <Songs />
        </div>
      </div>
    </div>
  );
}
export default Playlist;
