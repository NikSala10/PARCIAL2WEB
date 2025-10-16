import "./App.css";
import AddComment from "./pages/AddComent";
import CommentList from "./pages/CommentList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditComment from "./pages/EditComment";
import FavoriteComment from "./pages/FavoriteComment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CommentList />} />
          <Route path="/comments" element={<CommentList />} />
          <Route path="/add" element={<AddComment />} />
          <Route path="/edit/:id" element={<EditComment />} />
          <Route path="/favorites" element={<FavoriteComment />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
