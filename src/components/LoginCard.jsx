import React from "react";

const LoginCard = () => {
  return (
    <div className="bg-grey py-8 px-5 rounded">
      <h1 className="text-3xl font-semibold text-orange">Iniciar Sesión</h1>

      <form action="" className="mt-5">
        <div className="mx-auto w-[18rem] sm:w-[22rem]">
          <div className="py-2 flex flex-col gap-1">
            <label className="px-1 text-sm text-gray-200">Email</label>
            <input
              type="email"
              className="block px-3 py-2 rounded-3xl w-full border border-black
              focus:outline-none focus:border-orange bg-black text-white"
              placeholder="EjemploxD@hotmail.com"
            />
          </div>
          <div className="py-2 flex flex-col gap-1">
            <label className="px-1 text-sm text-gray-200">Contraseña</label>
            <input
              className="block px-3 py-2 rounded-3xl w-full border border-black focus:outline-none focus:border-orange bg-black text-white"
              type="password"
              placeholder="**************"
            />
          </div>
        </div>
        <div className="flex items-center justify-center py-4">
          <button
            className="bg-orange rounded py-1 px-3 text-white font-medium text-lg hover:bg-yellow-700"
            type="submit"
          >
            Enviar
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <a href="#" className="text-orange hover:text-white">
            Recuperar Contraseña
          </a>
          <a href="#" className="text-orange hover:text-white">
            Crear Cuenta
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
