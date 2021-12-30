// Global Styles
import { GlobalStyles } from './GlobalStyles';

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import NotFound from './pages/NotFound';
import AddBook from './pages/AddBook/AddBook';

// UI Components
import { Header, Footer, ScrollUp } from './components/index';

// Redux
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // const dispatch = useDispatch();

  return (
    <Router>
      {console.log(user)}
      <ScrollUp />
      <Header />
      <Routes>
        {user && (
          <>
            <Route path="/sign-up" element={<Navigate replace to="/" />} />
            <Route path="/log-in" element={<Navigate replace to="/" />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </Router>
  );
}

export default App;
