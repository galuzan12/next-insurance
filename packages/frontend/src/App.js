import './App.css';
import Footer from './components/containers/Footer/Footer';
import Header from './components/containers/Header/Header';
import MoviesContainer from './components/containers/MoviesContainer/MoviesContainer';
import Modal from './components/ui/Modal/Modal';
import {ModalProvider} from './providers/ModalProvider/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Header />
        <MoviesContainer />
        <Footer />
      </div>
      <Modal />
    </ModalProvider>
  );
}

export default App;
