import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/search-input";
import { NavItem } from "../nav/nav-item";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { NavLogout } from "../nav/nav-logout";
import TemaAlternar from "../temaAlternar/TemaAlternar";

type Props = {
    closeAction: () => void;
}

export const HomeMenu = ({ closeAction }: Props) => {
    return (
        <div className="fixed inset-0 p-6 bg-black dark:bg-gray-900">
            <div className="flex justify-between items-center">
                <Logo size={125} />
                <div onClick={closeAction} className="cursor-pointer flex justify-center items-center size-12 rounded-full">
                    <FontAwesomeIcon icon={faXmark} className="size-6" />
                </div>
            </div>

            <div className="my-6">
                <SearchInput />
            </div>

            <div>
                <nav className="mt-11">
                    <NavItem 
                        href="/home"
                        icon={faHouse}
                        label="Pagina inicial"
                    />

                    <NavItem 
                        href="/profile"
                        icon={faUser}
                        label="Meu perfil"
                    />
                    <TemaAlternar />
                    <NavLogout />
                </nav>
            </div>
        </div>
    );
}

