import photos from '../img/photos.png';
import '../components/photos.css';
function Photo() {
  return (
    <div className="photos">
      <img src={photos} alt="photos fêtes" style={{ width: '50%' }} />
    </div>
  );
}
export default Photo;
