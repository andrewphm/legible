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
import WishList from './pages/WishList';
import FAQs from './pages/FAQs';
import BrowseCategory from './pages/BrowseCategory';
import Search from './pages/Search';

// UI Components
import { Header, Footer, ScrollUp } from './components/index';

// Redux
import { useSelector } from 'react-redux';

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
            <Route
              path="/legible/sign-up"
              element={<Navigate replace to="/" />}
            />
            <Route
              path="/legible/log-in"
              element={<Navigate replace to="/" />}
            />
          </>
        )}
        <Route path="/legible/search" element={<Search />} />
        <Route path="/legible/book/:id" element={<Book />} />
        <Route path="/" element={<Navigate replace to="/legible" />} />
        <Route path="/legible" element={<Home />} />
        <Route path="/legible/add-book" element={<AddBook />} />
        <Route path="/legible/sign-up" element={<SignUp />} />
        <Route path="/legible/log-in" element={<LogIn />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/legible/purchase/:id" element={<Purchase />} />
        <Route
          path="/legible/library"
          element={user ? <Library /> : <LogIn />}
        />
        <Route path="/legible/browse" element={<Browse />} />
        <Route
          path="/legible/browse/category"
          element={<Browse category={true} />}
        />
        <Route
          path="/legible/wishlist"
          element={user ? <WishList /> : <LogIn />}
        />
        <Route path="/legible/faq" element={<FAQs />} />
        <Route
          path="/legible/browse/category/:id"
          element={<BrowseCategory />}
        />
      </Routes>
      <Footer />
      <GlobalStyles />
    </Router>
  );
}

export default App;
