import { BrowserRouter, Route, Routes } from 'react-router';
import Trivia from '../pages/Trivia';
import Home from '../pages/Home';
import Game2 from '../pages/Game2';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/game2" element={<Game2 />} />
      </Routes>
    </BrowserRouter>
  );
}
