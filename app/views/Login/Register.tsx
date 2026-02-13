

"use client";

import { useRef } from "react";
import { Mail, Eye, Lock, User, IdCard } from "lucide-react";
import Image from "next/image";
import "@/styles/globals.css";
import { Button } from "../ui/buttons/button";

export default function Register() {
    const passwordRef = useRef<HTMLInputElement | null>(null);

    function togglePassword() {
        const input = passwordRef.current;
        if (!input) return;

        // Si es password lo pasa a text, y viceversa
        input.type = input.type === "password" ? "text" : "password";
    }

    return (

        <div className="w-max h-screen grid grid-cols-2 place-items-center m-auto px-4">

            <div
                className="w-120 h-120 rounded-l-lg shadow-2xl flex items-center justify-center relative overflow-hidden"
                style={{ width: "480px", height: "500px" }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: "url(/images/tablero.png)" }}
                />
                <Image
                    src={'/images/Logo-Login.png'} alt="" width={400} height={400} className="absolute z-10" />
            </div>
            <div className="w-120 h-125 rounded-r-lg shadow-2xl p-9 ">

                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance texxt-accent mb-4">
                    Crear una cuenta
                </h1>

                <span>
                    "Eleva tu nivel, domina tu futuro."
                </span>
                <form action="" className="flex flex-col">

                    <div className="relative w-full">

                            <IdCard
                                className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-gray-400"
                                strokeWidth={2}
                            />
                            <input
                                type="text"
                                placeholder="Identificacion"
                                className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                            />
                        </div>

                    <div className="flex w-full gap-2.5 mt-2">
                        <div className="relative w-full">

                            <User
                                className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-gray-400"
                                strokeWidth={2}
                            />
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                            />
                        </div>
                        <input type="text" placeholder="Apellido" className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" />
                    </div>

                    <div className="relative w-full">
                        <Mail
                            className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-gray-400"
                            strokeWidth={2}
                        />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600"
                        />
                    </div>

                    <div className="relative w-full">
                        <Lock
                            className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-gray-400"
                            strokeWidth={2}
                        />
                        <input type="password" id="password" ref={passwordRef} placeholder="Contraseña" className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" />
                    </div>
                    <div className="flex flex-row items-center gap-2 my-2">
                        <input type="checkbox" className="accent-blue-600 w-3 h-3" /> <span>Acepto los <a href="#" className="underline text-blue-600">Terminos y condiciones</a></span>
                    </div>

                    <Button
                        variant={'default'}
                    >Registrarse</Button>
                </form>
                <p className="text-center mt-2">Ya tienes cuenta?<a href="" className="underline text-blue-600">Iniciar Sesion</a></p>


            </div>
        </div>

    )
}