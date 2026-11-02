import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import GachaPage from "./pages/gacha";
import CollectionPage from "./pages/collection";
import { useEffect } from 'react';
import { preloadHamsterImages } from './utils/preloadImages';

export function App() {
  useEffect(() => {
    // アプリ起動時に画像を裏で一括読み込み
    preloadHamsterImages(64);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gacha" element={<GachaPage />} />
      <Route path="/collection" element={<CollectionPage />} />
    </Routes>
  );
}

export default App;
