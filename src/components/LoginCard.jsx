import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { isEmail } from "../helpers/helpers";

const LoginCard = () => {
  const verifyUser = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-grey py-8 px-5 rounded">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.email) {
            errors.email = "Ingrese un Correo Electrónico";
          } else if (!isEmail(values.email)) {
            errors.email = "El correo solo puede contener letras, puntos y _";
          }

          if (!values.password) {
            errors.password = "Ingrese una Contraseña";
          }

          return errors;
        }}
        onSubmit={(values) => {
          verifyUser(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <h1 className="text-3xl font-semibold text-orange mb-6">
              Iniciar Sesión
            </h1>
            <div className="mx-auto w-[18rem] sm:w-[22rem]">
              <div className="py-2 flex flex-col gap-1">
                <label htmlFor="email" className="px-1 text-sm text-gray-200">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="block px-3 py-2 rounded-3xl w-full border border-black
                 focus:outline-none focus:border-orange bg-black text-white"
                  placeholder="EjemploxD@hotmail.com"
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="text-orange text-sm">{errors.email}</div>
                  )}
                />
              </div>
              <div className="py-2 flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="px-1 text-sm text-gray-200"
                >
                  Contraseña
                </label>
                <Field
                  className="block px-3 py-2 rounded-3xl w-full border border-black focus:outline-none focus:border-orange bg-black text-white"
                  type="password"
                  name="password"
                  placeholder="**************"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="text-orange text-sm">
                      {errors.password}{" "}
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center justify-center py-4">
              <button
                className="bg-orange rounded-full py-1 px-5 text-white font-medium text-lg hover:bg-yellow-700"
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginCard;
