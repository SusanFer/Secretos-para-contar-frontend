import { Form, useActionData, Link } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const password = formData.get("password")?.toString() || "";
  const confirmPassword = formData.get("confirmPassword")?.toString() || "";

  if (password !== confirmPassword) {
    return json({ error: "Las contraseñas no coinciden" }, { status: 400 });
  }
  return json({ success: true });
}

export default function Register() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="min-h-screen bg-[#D1B280] p-4 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md border border-[#D1B280]">
        <h1 className="text-2xl font-bold text-[#437099] mb-6 text-center">
          Registrarse
        </h1>
        
        <Form method="post" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
            className="w-full p-3 border-b-2 border-[#D1B280] focus:border-[#437099] focus:outline-none bg-transparent text-black" // Añade text-black
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            required
            className="w-full p-3 border-b-2 border-[#D1B280] focus:border-[#437099] focus:outline-none bg-transparent text-black" 
          />
          {actionData?.error && (
            <p className="text-red-500 text-sm mt-1">{actionData.error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#437099] hover:bg-[#3a6491] text-white py-3 px-4 rounded transition-colors"
          >
            Crear Cuenta
          </button>
        </Form>

        <p className="text-center mt-4 text-[#437099]">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="underline hover:text-[#3a6491]">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}