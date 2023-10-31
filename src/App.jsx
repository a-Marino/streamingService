import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Promo } from "./components/pages/Promo";
import { Series } from "./components/pages/Series";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Promo />} path="/" />
          <Route element={<Series />} path="/series" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
