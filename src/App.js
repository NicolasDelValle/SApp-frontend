import { useState, useEffect } from "react";
import "./App.css";
import { NormalButton } from "./components";
import { socket } from "./config";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages";
//import { useTranslation } from "react-i18next";

function App() {
  /*   const [en, setEn] = useState(false);
  const [es, setEs] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lng) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const handleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    setEn(i18n.language === "en");
    setEs(i18n.language === "es");
  }, [i18n.language]);
 */

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
