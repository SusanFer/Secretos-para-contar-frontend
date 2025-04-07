import { Form, Link } from "@remix-run/react";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#D1B280] p-4 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md border border-[#D1B280]">
        <h1 className="text-2xl font-bold text-[#437099] mb-6 text-center">
          Iniciar Sesión
        </h1>
        
        <Form method="post" className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border-b-2 border-[#D1B280] focus:border-[#437099] focus:outline-none bg-transparent text-black" 
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            className="w-full p-3 border-b-2 border-[#D1B280] focus:border-[#437099] focus:outline-none bg-transparent text-black" 
          />
          <button
            type="submit"
            className="w-full bg-[#437099] hover:bg-[#3a6491] text-white py-3 px-4 rounded transition-colors"
          >
            Entrar
          </button>
        </Form>

        <p className="text-center mt-4 text-[#437099]">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="underline hover:text-[#3a6491]">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}