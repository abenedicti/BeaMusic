import Header from '../components/Header';
import Playlist from '../components/Playlist';
import Events from '../components/Events';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import Photo from '../components/Photo';
import './App.css';
import AudioProvider from '../context/AudioProvider.jsx';

function App() {
  return (
    <AudioProvider>
      <Header />
      <Playlist />
      <Events />
      <Carrousel />
      <Faq />
      <Photo />
      <Footer />
    </AudioProvider>
  );
}

export default App;
