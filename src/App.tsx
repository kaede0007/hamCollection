import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import GachaPage from "./pages/gacha";
import CollectionPage from "./pages/collection";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gacha" element={<GachaPage />} />
      <Route path="/collection" element={<CollectionPage />} />
    </Routes>
  );
}

export default App;
