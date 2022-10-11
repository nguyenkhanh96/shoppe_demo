import './App.css';
import './assets/css/grid.css';
import Header from'./components/header/index.js';
import Container from'./components/container/index.js';
import Footer from'./components/footer/index.js';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
