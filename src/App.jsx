import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Masalah from "./pages/Masalah";
import Program from "./pages/Program";
import Aksi from "./pages/Aksi";
import Dampak from "./pages/Dampak";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout utama */}
        <Route element={<MainLayout />}>

          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/masalah" element={<Masalah />} />
          <Route path="/program" element={<Program />} />
          <Route path="/aksi" element={<Aksi />} />
          <Route path="/dampak" element={<Dampak />} />
          <Route path="/kontak" element={<Kontak />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;