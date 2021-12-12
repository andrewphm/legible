// Global Styles
import { GlobalStyles } from './GlobalStyles';

// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// UI Components
import { Header } from './components/index';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
