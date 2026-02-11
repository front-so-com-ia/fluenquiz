import { BrowserRouter, Route, Routes } from 'react-router';
import Trivia from '../pages/Trivia';
import Home from '../pages/Home';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivia" element={<Trivia />} />
      </Routes>
    </BrowserRouter>
  );
}
