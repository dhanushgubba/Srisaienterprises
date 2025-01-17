import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'; 
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to ="/">Sri Sai Enterprises</Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />}/>
          <Route path ="/" element={<HomeScreen />}/>
        </Routes>
      </main>
    </div>
  </BrowserRouter> 
  );
}

export default App;
