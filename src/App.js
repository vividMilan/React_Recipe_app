import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipies from "./pages/Recipies";
import Settings from "./pages/Settings"
import PageNotFound from "./pages/PageNotFound"
import {
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipies' element={<Recipies />} />
          <Route path='/settings' element={<Settings />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
