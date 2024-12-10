type Props = {
  label: string;
  onClick?: () => void;
  size: 1 | 2 | 3;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; // Adicionando a propriedade type
};

export const Button = ({ label, onClick, size, disabled, type = "button" }: Props) => {
  return (
    <button
      type={type} // Usando a propriedade type
      onClick={onClick}
      className={`
        mt-4 flex justify-center items-center cursor-pointer rounded-3xl 
        bg-gray-400 dark:bg-gray-800 dark:text-gray-200 
        ${size === 1 && 'h-14 text-lg'}
        ${size === 2 && 'h-10 text-md'}
        ${size === 3 && 'h-7 text-xs'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''} // Desabilita interação visualmente
      `}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }} // Impede clique quando desabilitado
      disabled={disabled} // Adicionando o atributo disabled
    >
      {label}
    </button>
  );
};
