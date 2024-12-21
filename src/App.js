import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import socket from "./socket";

function App() {
  const [en, setEn] = useState(false);
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

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Escucha eventos del servidor
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    // Limpia el evento al desmontar el componente
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", { content: "Hola, servidor!" });
  };

  return (
    <div className="App">
      <div>
        <h1>Mensajes:</h1>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg.content}</li>
          ))}
        </ul>
        <button onClick={sendMessage}>Enviar mensaje</button>
      </div>
    </div>
  );
}

export default App;
