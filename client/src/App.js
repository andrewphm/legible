// Global Styles
import { GlobalStyles } from './GlobalStyles';

// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';

// UI Components
import { Header, Footer } from './components/index';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </Router>
  );
}

export default App;
