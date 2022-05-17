import '../css/App.css';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import RedirectURL from './RedirectURL';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <RedirectURL />
      <Footer />
    </div>
  );
}

export default App;
