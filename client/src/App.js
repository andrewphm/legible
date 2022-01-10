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
import Book from './pages/Book/Book';
import Purchase from './pages/Purchase/Purchase';
import Library from './pages/Library';
import Browse from './pages/Browse';

// UI Components
import { Header, Footer, ScrollUp } from './components/index';

// Redux
import { useSelector } from 'react-redux';
import WishList from './pages/WishList';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // const dispatch = useDispatch();

  return (
    <Router>
      <ScrollUp />
      <Header />
      <Routes>
        {user && (
          <>
            <Route path="/sign-up" element={<Navigate replace to="/" />} />
            <Route path="/log-in" element={<Navigate replace to="/" />} />
          </>
        )}
        <Route path="/book/:id" element={<Book />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/purchase/:id" element={user ? <Purchase /> : <LogIn />} />
        <Route path="/library" element={user ? <Library /> : <LogIn />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/wishlist" element={user ? <WishList /> : <LogIn />} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </Router>
  );
}

export default App;
