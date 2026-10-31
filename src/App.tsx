import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import GachaPage from "./pages/gacha"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gacha" element={<GachaPage />} />
    </Routes>
  );
}

export default App;
