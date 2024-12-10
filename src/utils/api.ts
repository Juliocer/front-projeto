import axios from "axios";

// Recupera o token do localStorage
const token = localStorage.getItem("token");

// Configuração global do Axios
const api = axios.create({
    baseURL: "http://localhost:3001", // Substitua pela URL do backend em produção
    withCredentials: true, // Para cookies ou autenticação
    headers: {
        "Content-Type": "application/json",
        // Adiciona o token JWT ao cabeçalho Authorization, se disponível
        ...(token && { Authorization: `Bearer ${token}` }),
    },
});

export default api;
