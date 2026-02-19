import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "../ui/buttons/button";
import Image from "next/image";

// export function Session() {
//   return (
//     <div className="flex items-center gap-4 justify-center h-screen flex-col">
//       <User className="h-6 w-6 text-muted-foreground" />
//       <span className="text-sm font-medium text-muted-foreground">Iniciar Sesión</span>
//       <input type="text" placeholder="Nombre de Usuario" />
//     <input type="password" placeholder="Contraseña" />
//     </div>
//   )
// }

// https://preline.co/docs/input.html#underline-input

export default function Session() {
    return (
        <div className="max-w-sm space-y-3 flex items-center justify-center h-screen flex-col mx-auto px-4 ">
            <Image src="/images/Logo-Login.png" alt="" width={400} height={400} className="drop-shadow-accent-2xl" />
            <div className="relative w-full">
                <input
                    type="email"
                    className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                    placeholder="Enter name"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none justify-center">
                    <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                    </svg>
                </div>
            </div>
            <div className="relative w-full">
                <input
                    type="password"
                    className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                    placeholder="Enter password"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                        <circle cx="16.5" cy="7.5" r=".5" />
                    </svg>
                </div>
            </div>
            <Button variant="default" className="w-full">Iniciar Sesión</Button>

            <p>No Tienes cuenta? <a href="" className=" text-primary">Regístrate</a></p>
        </div>
    );
}
