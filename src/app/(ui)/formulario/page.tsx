import { FormularioCadastro } from "@/components/formularioParaCadastro/formulario-cadastro";
import { GeneralHeader } from "@/components/ui/general-header";
import { Logo } from "@/components/ui/logo";

export default function Page(){
    return(
            <div className="max-w-lg mx-auto mt-12 px-6">
                <GeneralHeader backHref="/">
                    <div className="text-center text-2xl">Abertura de Chamado</div>
                </GeneralHeader>

                <h1 className="hidden lg:block mt-10 text-2xl">Abertura de Chamado</h1>

                <div className="mt-5 mb-6 flex flex-col gap-4">
                    <FormularioCadastro/>
                </div>
            </div>
    );
}