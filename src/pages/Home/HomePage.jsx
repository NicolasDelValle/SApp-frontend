import { useState, useEffect } from "react";
import { MainLayout } from "../../layouts";
import { socket } from "../../config";

const HomePage = () => {
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
    <MainLayout>
      <div>
        <h1>Mensajes:</h1>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg.content}</li>
          ))}
        </ul>
        <button onClick={sendMessage}>Enviar mensaje</button>
      </div>
    </MainLayout>
  );
};

export default HomePage;
