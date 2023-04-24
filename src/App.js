import './App.css';
import ImageGallery from 'react-image-gallery';
import { images } from './gallery-image';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="image-gallery-wrapper">
          <ImageGallery items={images} />
        </div>
        <b>
        memory
        </b>
        <p>
          jason qiu
        </p>
      </header>
    </div>
  );
}

export default App;
