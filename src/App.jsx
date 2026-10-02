import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Masalah from "./pages/Masalah";
import Program from "./pages/Program";
import Aksi from "./pages/Aksi";
import Dampak from "./pages/Dampak";
import Kontak from "./pages/Kontak";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-3 text-gray-600">
          Halaman tidak ditemukan.
        </p>
      </div>
    </div>
  );
}

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