import '../src/css/App.css'
import './input.css'
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
