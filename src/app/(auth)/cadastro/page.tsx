import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page(){
    return(
        <div className="max-w-lg mx-auto mt-12 px-6">
            <Logo size={190} />
            <h1 className="mt-10 text-2xl">Crie a sua conta</h1>
            <div className="mt-10 mb-14 flex flex-col gap-6">
                <SignupForm/>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <div className="text-gray-500">Já tem a conta? </div>
                <Link href="/login" className="houver:underline">Entra no </Link>
            </div>
        </div>
    );
}