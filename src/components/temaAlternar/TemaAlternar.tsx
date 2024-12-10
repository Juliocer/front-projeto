"use client"; // Marque como Client Component

import { useTheme } from "./themeContext"; // Importar o hook de tema
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function TemaAlternar() {
  const { theme, toggleTheme } = useTheme(); // Usar o tema do contexto

  // Alterar o tema e atualizar as classes do HTML
  const handleThemeToggle = () => {
    toggleTheme();  // Alterna o tema através do contexto
    const newTheme = theme === "light" ? "dark" : "light"; // Definir novo tema
    document.documentElement.setAttribute("data-theme", newTheme); // Aplica no <html>
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="border p-2 m-4 rounded bg-gray-400 dark:bg-gray-800 dark:text-gray-200 flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <FontAwesomeIcon icon={faMoon} />
          Modo Escuro
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faSun} />
          Modo Claro
        </>
      )}
    </button>
  );
}
