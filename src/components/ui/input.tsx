import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

type Props = {
    placeholder: string;
    password?: boolean;
    value?: string;
    onChange?: (newValue: string) => void;  // Tipagem corrigida para passar apenas o valor
    filled?: boolean;
    icon?: IconDefinition;
    onEnter?: () => void;
}

export const Input = ({ placeholder, password, icon, value, filled, onChange, onEnter }: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    
    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if ((event.code.toLowerCase() === "enter" || event.code.toLocaleLowerCase() === "numpadenter") && onEnter) {
            onEnter();
        }
    }

    return (
        <div className={`mt-4 flex items-center h-14 rounded-3xl border transition-all duration-300 
            ${filled ? 'bg-gray-500 dark:bg-gray-700' : 'bg-transparent'} 
            border-gray-300 dark:border-gray-600`}
        >
            {icon && 
                <FontAwesomeIcon 
                    icon={icon}
                    className="ml-4 size-6 text-gray-100"
                />
            }
            <input 
                type={password && !showPassword ? 'password' : 'text'}
                className="flex-1 outline-none bg-transparent h-full px-4"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}  // Passando o valor para o onChange
                onKeyUp={handleKeyUp}
            />
            {password &&
                <FontAwesomeIcon 
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? faEye : faEyeSlash}
                    className="cursor-pointer mr-4 size-6 text-gray-500"
                />
            }
        </div>
    );
}
