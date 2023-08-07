import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Promo } from "./components/pages/Promo";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Promo />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
