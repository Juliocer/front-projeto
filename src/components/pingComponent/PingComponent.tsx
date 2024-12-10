import api from "@/utils/api";
import { useEffect } from "react";

const PingComponent = () => {
  useEffect(() => {
    const fetchPing = async () => {
      try {
        const response = await api.get("/ping");
        console.log(response.data); // Ver resposta do backend
      } catch (error) {
        console.error("Erro ao fazer o ping:", error);
      }
    };
    fetchPing();
  }, []);

  return <div>Testando conexão com o backend...</div>;
};

export default PingComponent;
